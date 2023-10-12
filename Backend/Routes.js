const express=require('express')
const Route=express.Router()
const category=require('./Category/Categorycontroller')



Route.post('/AddProduct',category.categoryuser)

Route.post("/ViewAllProduct",category.viewAllproduct)

Route.post("/ViewAllSmartphone",category.Mobiles)
Route.post("/ViewAllLaptop",category.Laptop)
Route.post("/ViewAllTablet",category.Tablets)




module.exports=Route