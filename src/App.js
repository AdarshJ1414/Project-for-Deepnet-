import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Addproduct from './Components/AddProduct'
import Navbar from './Components/Navbar';
import Viewproduct from './Components/Viewproduct';
import ViewCategory from './Components/ViewCategory';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Addproduct' element={[<Navbar/>,<Addproduct/>]}/>
      <Route path='/Viewproduct' element={[<Navbar/>,<Viewproduct/>]}/>
      <Route path='/product/category/:category' element={[<Navbar/>,<ViewCategory/>]}/>

     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
