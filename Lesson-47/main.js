const companiesElem = document.querySelector("#companies")
const singleModalContent = document.querySelector("#sinlge-modal-content");
const singleModal = document.querySelector("#single-modal")
const formModal = document.querySelector("#form-modal")
const openBtnFormModal = document.querySelector("#openFormModal")
const formElem = document.querySelector("#form");
let selectedID;
getAllData();

let isEdit = false;

function getAllData() {
  fetch("https://northwind.vercel.app/api/suppliers")
    .then(res => res.json())
    .then(data => {
      companiesElem.innerHTML = ""
      data.forEach(company => {
        companiesElem.innerHTML += `
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all relative">
        <div class="absolute top-[10px] right-[10px]">
          <button class="cursor-[pointer]" onclick="deleteCompany(${company.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-delete-icon lucide-delete"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/></svg>
          </button>
          <button class="cursor-[pointer]" onclick="editCompany(${company.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
          </button>
          <button class="cursor-[pointer]" onclick="getSingleCompany(${company.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <h1>ID:${company.id}</h1>
        <h2 class="text-lg font-semibold mb-2 text-gray-800">${company.companyName || "Unknow"}</h2>
        <p class="text-sm text-gray-600 mb-1"><span class="font-medium">Əlaqə:</span> ${company.contactName || "Unknow"}</p>
        <p class="text-sm text-gray-600 mb-1"><span class="font-medium">Vəzifə:</span> ${company.contactTitle || "Unknow"}</p>
        <div class="mt-3 border-t pt-3 text-sm text-gray-600 space-y-1">
          <p><span class="font-medium">Ünvan:</span>${company.address?.street || "Unknow"}</p>
          <p><span class="font-medium">Şəhər:</span> ${company.address?.city || "Unknow"}</p>
        </div>
      </div>
      `
      });
      /*
      <p><span class="font-medium">Rayon:</span> ${company.address?.region === "NULL" ? "Unknow" : company.address?.region}</p>
            <p><span class="font-medium">Poçt kodu:</span> ${company.address?.postalCode || "Unknow"}</p>
            <p><span class="font-medium">Ölkə:</span> ${company.address?.country || "Unknow"}</p>
            <p><span class="font-medium">Telefon:</span> ${company.address?.phone || "Unknow"}</p>
      */
    })
}

function getSingleCompany(id) {
  fetch("https://northwind.vercel.app/api/suppliers/" + id)
    .then(res => res.json())
    .then(data => {
      singleModal.classList.remove("hidden");
      singleModalContent.innerHTML = `
       <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold" onclick="closeSingleModal()">&times;</button>
      <h2 class="text-xl font-semibold text-gray-800 mb-4">${data.companyName || "Unknow"}</h2>
      <div class="space-y-2 text-gray-700 text-sm">
        <p><span class="font-medium">ID:</span> ${data.id}</p>
        <p><span class="font-medium">Əlaqə:</span>${data.contactName || "Unknow"}</p>
        <p><span class="font-medium">Vəzifə:</span> ${data.contactTitle || "Unknow"}</p>
      </div>
      <hr class="my-4">
      <div class="space-y-1 text-sm text-gray-700">
        <p><span class="font-medium">Ünvan:</span> ${data.address?.street || "Unknow"}</p>
        <p><span class="font-medium">Şəhər:</span> ${data.address?.city || "Unknow"}</p>
        <p><span class="font-medium">Region:</span>${data.address?.region === "NULL" || !data.address?.region ? "Unknow" : data.address?.region}</p>
        <p><span class="font-medium">Poçt kodu:</span> ${data.address?.postalCode || "Unknow"}</p>
        <p><span class="font-medium">Ölkə:</span> ${data.address?.country || "Unknow"}</p>
        <p><span class="font-medium">Telefon:</span> ${data.address?.phone || "Unknow"}</p>
      </div>
      <div class="mt-6 flex justify-end gap-3">
        <button class="px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50" onclick="closeSingleModal()">Bağla</button>
        <button class="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Əlaqə saxla</button>
      </div>
      `
    })
}

function closeSingleModal() {
  singleModal.classList.add("hidden")
}

function closeFormModal() {
  formModal.classList.add("hidden")
}

singleModal.addEventListener("click", (event) => {
  if (event.target === singleModal) {
    closeSingleModal()
  }
})

formModal.addEventListener("click", (e) => {
  if (e.target === formModal) {
    closeFormModal()
  }
})

openBtnFormModal.addEventListener("click", (e) => {
  formModal.classList.remove("hidden")
})

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const company = {
    companyName: formElem.companyName.value,
    contactName: formElem.contactName.value,
    contactTitle: formElem.contactTitle.value,
    address: {
      street: formElem.street.value,
      city: formElem.city.value,
      country: formElem.country.value,
      region: formElem.region.value,
      phone: formElem.phone.value,
      postalCode: formElem.postalCode.value,
    }
  }
  if (!isEdit) {
    fetch("https://northwind.vercel.app/api/suppliers", {
      method: "post",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(company)
    }).then(res => {
      if (res.ok) {
        formElem.reset();
        closeFormModal();
        getAllData();
      }
    })
  } else {
    fetch("https://northwind.vercel.app/api/suppliers/" + selectedID, {
      method: "put",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(company)
    }).then(res => {
      if (res.ok) {
        formElem.reset();
        closeFormModal();
        getAllData();
        isEdit = false;
      }
    })
  }
})

function deleteCompany(id) {
  fetch("https://northwind.vercel.app/api/suppliers/" + id, {
    method: "Delete"
  }).then(res => {
    res.ok ? getAllData() : alert("Xeta")

  })


}


function editCompany(id) {
  formModal.classList.remove("hidden");
  isEdit = true;
  selectedID = id
  fetch("https://northwind.vercel.app/api/suppliers/" + id)
    .then(res => res.json())
    .then(data => {
      formElem.companyName.value = data.companyName;
      formElem.contactName.value = data.contactName
      formElem.contactTitle.value = data.contactTitle
      formElem.street.value = data.address?.street
      formElem.city.value = data.address?.city
      formElem.country.value = data.address?.country
      formElem.region.value = data.address?.region
      formElem.phone.value = data.address?.phone
      formElem.postalCode.value = data.address?.postalCode
    })
}


// GET -> all
// GET for Id -> single
// POST -> create
// PUT for id -> update
// DELETE for id -> delete
// PATCH for id -> edit
// 