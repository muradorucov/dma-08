import React, { useState } from "react";
import { createTourService } from "../../../services/tours";

const TourCreate = () => {
  const [tour, setTour] = useState({
    title: "",
    location: "",
    expiredDate: "",
    isActive: false,
    image: []
  })

  const inputHanler = (e) => {
    const { name, value } = e.target
    if (name === "image") {
      setTour({
        ...tour,
        image: e.target.files
      });
    } else if (name === "isActive") {
      setTour({
        ...tour,
        isActive: e.target.checked
      });
    } else {
      setTour({
        ...tour,
        [name]: value
      });
    }
  }


  const formSubmit = async () => {
    try {
      const data = await createTourService(tour);
      console.log(data);
    } catch (error) {
      console.log("create Tour error", error);
    }
  }
  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-6">Create Tour</h1>

      <div className="text-white bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-6">

        <div>
          <label className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Istanbul–Gəncə"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={inputHanler}
            name="title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="Azerbayjan"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={inputHanler}
            name="location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Expired Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={inputHanler}
            name="expiredDate"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tour Images
          </label>
          <input
            type="file"
            multiple
            className="w-full px-4 py-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 bg-transparent cursor-pointer"
            onChange={inputHanler}
            name="image"
          />
          <p className="text-xs text-gray-500 mt-1">
            Multiple images allowed (PNG, JPG)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="isActive"
            className="w-4 h-4 rounded border-gray-300"
            defaultChecked
            onChange={inputHanler}
            name="isActive"
          />
          <label htmlFor="isActive" className="text-sm">
            Active Tour
          </label>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t dark:border-gray-700">
          <button className="px-5 py-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
            Cancel
          </button>
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            onClick={formSubmit}>
            Create Tour
          </button>
        </div>

      </div>
    </div>
  );
};

export default TourCreate;
