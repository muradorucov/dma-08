import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideAction } from "../store/actions/toast.action";

function Toasts({ data }) {
  const dis = useDispatch()
  useEffect(() => {
    const time = setTimeout(() => {
      dis(hideAction())
    }, 3000);


    return () => {
      clearTimeout(time)
    }
  }, [])

  return (
    <div className="fixed top-5 right-5 space-y-3 z-50">

      {
        data.state === "success" && <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm font-medium">{data.title}</span>
        </div>
      }



      {
        data.state === "error" && <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-sm font-medium">{data.title}</span>
        </div>
      }
    </div>
  );
}

export default Toasts;
