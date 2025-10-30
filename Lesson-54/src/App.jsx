import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

export default function App() {


  const [users, setUsers] = useState([])
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-200 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <Form
          setUsers={setUsers}
          users={users}
        />
        <Table
          setUsers={setUsers}
          users={users}
        />
      </div>
    </div>
  );
}
