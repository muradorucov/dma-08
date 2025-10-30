import React from "react";

function Table({ columns, data, setIsRender }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">İstifadəçi Siyahısı</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 font-medium border-b">
            <tr>
              {
                columns.map(col => <th className="px-4 py-3">{col.name}</th>)
              }
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {
              data?.map((item, index) => <tr className="border-b hover:bg-gray-50">
                {columns.map(col => col.cell ? <td>
                  {col.cell(item, index, setIsRender)}
                </td> : <td className="px-4 py-3">{item[col.title]}</td>)}
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
