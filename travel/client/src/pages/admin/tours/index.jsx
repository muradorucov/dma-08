import React, { useEffect, useState } from "react";
import { getAllToursForAdmin } from "../../../services/tours";
import { origin } from "../../../utils/origin";
import { dateFormat } from "../../../utils/dateFormat";
import { useNavigate } from "react-router";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const tours = await getAllToursForAdmin();
        setTours(tours.data)
      } catch (error) {
        console.log("getAll tour admin error", error);
      }
    })();
  }, [])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold mb-6">Tours</h1>
        <button
          onClick={() => navigate("create")}
          className="
    px-4 py-2
    rounded-lg
    bg-blue-600
    text-white
    text-sm
    font-medium
    hover:bg-blue-700
    active:scale-95
    transition
    shadow-sm
  "
        >
          Create
        </button>

      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-left text-white">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Expire Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y dark:divide-gray-700">
            {tours.map((tour) => (
              <tr
                key={tour._id}
                className="hover:bg-gray-50 hover:text-white dark:hover:bg-gray-900 transition"
              >
                <td className="px-4 py-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-500">
                    <img src={`${origin}/${tour.image[0]}`} alt="" />
                  </div>
                </td>

                <td className="px-4 py-3 font-medium">
                  {tour.title}
                </td>

                <td className="px-4 py-3">
                  {tour.location}
                </td>

                <td className="px-4 py-3">
                  {dateFormat(tour.expiredDate)}
                </td>

                <td className="px-4 py-3">
                  {tour.isActive ? (
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">
                      Passive
                    </span>
                  )}
                </td>

                <td className="px-4 py-3">
                  {dateFormat(tour.createdAt)}
                </td>

                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 text-xs rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-xs rounded-lg border border-red-500 text-red-500 hover:bg-red-50">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tours;
