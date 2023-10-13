import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Viewproduct() {
    const [allprod,setallprod] = useState([])

    useEffect(()=>{
        axios.post('http://localhost:3005/viewAllproduct')
        .then((res)=>{console.log(res)
        setallprod(res.data.data)})
        .catch((err)=>{console.log(err);})

    },[])
  return (
    <div>
        <div>
            <Link to='/product/category/Mobile'> Mobile</Link> &nbsp;&nbsp;
            <Link  to='/product/category/Tablet'> Tablet </Link>&nbsp;&nbsp;
            <Link  to='/product/category/Laptop'> Laptop</Link>&nbsp;&nbsp;
        </div>
        {allprod.map((a)=>{
            return <div>
                <p style={{border:"1px solid black",width:"350px",margin:"auto"}}>{a.Company} - {a.model} - {a.category}</p>
                </div>
        })}
    </div>
  )
}

export default Viewproduct