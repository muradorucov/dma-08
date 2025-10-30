import { changeSTatusAction } from "./actions";

export const columns = [
  {
    title: "index",
    name: "Sıra",
    cell: (obj, index) => {
      return index + 1
    }
  },
  {
    title: "fullname",
    name: "Ad Soyad"
  },
  {
    title: "email",
    name: "E-Poçt"
  },
  {
    title: "isSee",
    name: "Status",
    cell: (obj) => {
      return <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium 
      ${obj.isSee ? "bg-green-500 text-green-700" : "bg-red-300 text-red-700"}
      `}>
        {obj.isSee ? "Oxunub" : "Oxunmayıb"}
      </span>
    }
  },
  {
    title: "createdAt",
    name: "Tarix",
    cell: (obj) => {
      const date = new Date(obj.createdAt);
      const options = { day: "2-digit", month: "long", year: "numeric" };
      return date.toLocaleDateString("en-GB", options);
    }
  },
  {
    title: "action",
    name: "Əməliyyatlar",
    cell: (obj, index, setIsRender) => {
      return <div className="inline-flex items-center gap-2">
        <button className="text-xs px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          onClick={() => changeSTatusAction(obj._id, setIsRender)}
        >
          Status dəyiş
        </button>
        <button className="text-xs px-3 py-1 rounded-lg bg-[#661BDC] text-white hover:brightness-110 transition">
          Yenilə
        </button>
      </div>
    }
  }
]