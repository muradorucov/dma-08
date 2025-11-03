export const columns = [
  {
    title: "index",
    name: "Sıra",
    cell: (obj, index) => {
      return <p className="text-center">{index + 1}</p>
    }
  },
  {
    title: "image",
    name: "Şəkil",
    cell: (obj) => {
      return <img src={obj.image} className="w-[60px]" />
    }
  },
  {
    title: "title",
    name: "Başlıq"
  },
  {
    title: "categoryId",
    name: "Kategoriya",
    cell: (obj) => {
      return obj.categoryId?.title || "Yoxdur"
    }
  },
  {
    title: "isActive",
    name: "Status",
    cell: (obj) => {
      return obj.isActive ? (
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">
          Aktiv
        </span>
      ) : (
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700 border border-red-300">
          Deaktiv
        </span>
      )
    }
  },
  {
    title: "action",
    name: "Əməliyyatlar",
    cell: (obj, index) => {
      return <div className="inline-flex items-center gap-2">
        <button className="text-xs px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          Status dəyiş
        </button>
        <button className="text-xs px-3 py-1 rounded-lg bg-[#661BDC] text-white hover:brightness-110 transition">
          Yenilə
        </button>
      </div>
    }
  }

]