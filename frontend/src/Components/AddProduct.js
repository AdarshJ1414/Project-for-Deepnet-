import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
function AddProduct() {
  const [data, setdata] = useState({
    company: "",
    model: "",
    category: "",
    os: "",
  });

  const [osselect, setosselect] = useState(["Select a category"]);

  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data.category == "smartphone") {
      setosselect(["Android", "ios"]);
    } else if (data.category == "laptop") {
      setosselect(["Windows", "MacOS"]);
    } else if (data.category == "tablet") {
      setosselect(["Android", "ios"]);
    }
  },[data.category]);


  useEffect(()=>{
    console.log(data);
  })

  const subfn = (e)=>{
    e.preventDefault()
    console.log(data);

    axios.post('http://localhost:3005/AddProduct', data)
    .then((res)=>{console.log(res);})
    .catch((err)=>{console.log(err);})
  }
  return (
    <div>
      <form onSubmit={subfn}>
        <input type="text" placeholder="Company" name="company" onChange={changefn} required/>
        <input type="text" placeholder="Model" name="model" onChange={changefn} required />
        <select onChange={changefn} name="category" required>
          <option value="smartphone"> Smartphone</option>
          <option value="laptop"> Laptop</option>
          <option value="tablet"> Tablet</option>
        </select>
        <select onChange={changefn} name="os" required>
            <option value=""> Select a type</option>
          {osselect.map((a) => {
            return <option value={a}> {a}</option>
          })}
        </select>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default AddProduct;
