import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function Dashboard() {

    const [suc, setSuc] = useState()
    const navigate =useNavigate()


    useEffect(() => {
        axios.get('https://day39-resetpassbe.onrender.com/dashboard')
            .then(res => {
                if (res.data === 'Success') {
                    setSuc('Successded OK')
                } else {
                    navigate('/')
                }
            }).catch(err => console.log(err))
        
    },[])

  return (
      <div>
          <h2>dashboard</h2>
          <p>{suc}</p>
   </div>
  )
}

export default Dashboard