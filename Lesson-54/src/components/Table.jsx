import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";

function Table({ setUsers, users }) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="p-10"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">User Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700 uppercase tracking-wider">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Full Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Password</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium text-gray-700">{i + 1}</td>
                <td className="py-3 px-4">{user.fullName}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.password}</td>
                <td className="py-3 px-4 flex gap-3">
                  <button className="text-indigo-600 hover:text-indigo-800 transition">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Table