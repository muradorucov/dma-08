import React, { useEffect, useState } from 'react'
import { getAllContacts } from '../../../services/contact'
import Table from '../../../components/common/Table';
import { columns } from './columns';

function Contact() {

  const [contacts, setContacts] = useState([])
  const [isRender, setIsRender] = useState({})
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllContacts();
        setContacts(data.data)
      } catch (error) {
        alert(error.message)
      }
    })();
  }, [isRender])
  return (
    <div>
      <h1>Contact Page</h1>

      <Table columns={columns} data={contacts} setIsRender={setIsRender} />
    </div>
  )
}

export default Contact