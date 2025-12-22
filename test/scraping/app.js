import fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";

// Mənbə URL-lərin siyahısı
const urls = JSON.parse(fs.readFileSync("./urls.json", "utf8"));

// Məhsul səhifələrinin URL-lərini filtrlə
const productUrls = urls.filter(u => u.includes("/az/product/"));

const delay = ms => new Promise(r => setTimeout(r, ms));

async function scrapeProduct(url) {
  try {
    const { data } = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      timeout: 10000,
    });

    const $ = cheerio.load(data);

    const name = $("h1").first().text().trim();
    const code = $(".pwi_content span").text().replace("Məhsulun kodu:", "").trim();

    const description = $(".product-desciption").text().trim();

    const notes = {
      top: [],
      heart: [],
      base: [],
    };

    $(".info-list li").each((_, el) => {
      const title = $(el).find("span").first().text().trim();
      const items = [];
      $(el)
        .find(".not-item")
        .each((_, n) => {
          items.push({
            name: $(n).find("span").text().trim(),
            image: $(n).find("img").attr("src"),
          });
        });

      if (/Üst/i.test(title)) notes.top = items;
      else if (/Ürək/i.test(title)) notes.heart = items;
      else if (/Baza/i.test(title)) notes.base = items;
    });

    // Qiymətlər
    const prices = [];
    $(".pwipl_item").each((_, el) => {
      const name = $(el).find(".name").text().trim();
      const price = $(el).find(".new-price").text().trim();
      prices.push({ name, price });
    });

    // Bənzər ətirlər
    const related = [];
    $(".special-products").first().find(".product_wrap").each((_, el) => {
      related.push({
        name: $(el).find(".pwi_title a").text().trim(),
        url: $(el).find(".pwi_title a").attr("href"),
        img: $(el).find(".pw_image img").attr("src"),
      });
    });

    return { url, name, code, description, notes, prices, related };
  } catch (err) {
    console.log(`⚠️ Xəta: ${url}`);
    return null;
  }
}

async function main() {
  const results = [];

  console.log(`🧠 ${productUrls.length} məhsul səhifəsi tapıldı.`);

  // 👉 yalnız ilk 2 məhsulu test üçün götür
  const testUrls = productUrls.slice(0, 2);

  for (let i = 0; i < testUrls.length; i++) {
    const url = testUrls[i];
    console.log(`🔍 [${i + 1}/${testUrls.length}] ${url}`);
    const data = await scrapeProduct(url);
    if (data) results.push(data);
    await delay(1000); // serveri çox yükləməmək üçün
  }

  fs.writeFileSync("products.json", JSON.stringify(results, null, 2), "utf8");
  console.log(`✅ ${results.length} məhsul uğurla yazıldı: products.json`);
}

main();
