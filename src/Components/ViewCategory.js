import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
function ViewCategory() {
    const {category} = useParams()

    const [allprod,setproducts] = useState([])

    const [os,setos] = useState('all')

    const [oscat,setoscat] = useState([])
   


    useEffect(()=>{
        if(category=="Mobile"){
            
            axios.post('http://localhost:3005/ViewAllSmartphone')
            .then((res)=>{console.log(res)
                setproducts(res.data.data)
                setoscat(['Android','ios'])
            })
               
            .catch((err)=>{console.log(err);})
        }
        else if(category=="Tablet"){
            
            axios.post('http://localhost:3005/ViewAllTablet')
            .then((res)=>{console.log(res)
                setproducts(res.data.data)
                setoscat(['Android','ios'])
            })
                
            .catch((err)=>{console.log(err);})
        }
        else if(category=="Laptop"){
            axios.post('http://localhost:3005/ViewAllLaptop')
            .then((res)=>{console.log(res)
                setproducts(res.data.data)
                setoscat(['Windows','MacOS'])})
                
            .catch((err)=>{console.log(err);})
        }
    },[])


  return (
    <div>View Category {category}
    <br/>
    <button onClick={()=>{setos("all")}}> All category</button>
    {oscat.map((a)=>{return <button onClick={()=>{setos(a)}}> {a}</button>})}
    {allprod.map((a)=>{
        if(a.os==os || os=="all"){
            return <div> 
            <p style={{border:"1px solid black",width:"350px",margin:"auto"}}>{a.Company} - {a.model} - {a.category} - {a.os}</p>
            </div>
        }
           
        })}</div>
  )
}

export default ViewCategory