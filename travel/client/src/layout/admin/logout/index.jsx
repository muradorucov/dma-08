export default function ProfilePopup() {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-md z-50">
      <div className="p-3 border-b">
        <p className="font-semibold">Admin Name</p>
        <p className="text-sm text-gray-500">admin@gmail.com</p>
      </div>

      <button
        onClick={() => alert("Logout")}
        className="w-full text-left p-3 hover:bg-gray-100 text-red-600"
      >
        Logout
      </button>
    </div>
  );
}
