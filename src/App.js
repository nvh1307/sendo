
import './App.css';
import { useState, useEffect } from 'react'
import HeaderTop from './HeaderComponent/HeaderTop/HeaderTop';
import HeaderMiddle from './HeaderComponent/HeaderMiddle/HeaderMiddle';

import MainComponent from './MainComponent/MainComponent';
import FooterMiddle from './FooterComponent/FooterMiddle/FooterMiddle';

import Footer from './FooterComponent/Footer';
import FooterBottom from './FooterComponent/FooterBottom/FooterBottom';

import Modal from './HeaderComponent/HeaderTop/Modal';
import Form from './FormComponent/Form';
import {SiGooglechat} from "react-icons/si";



function App() {
const [showLogin,setShowLogin] = useState(false)
const[products,setProducts] = useState([])

useEffect(()=>{
  fetch('http://localhost:8000/products')
  .then(res=>{
      return res.json()
  })
  .then(data=>{
    setProducts(data)
  })
},[])
  
  return (
    <>
    <div className="App">
    {showLogin?<Form />:""}
        <HeaderTop />
         <HeaderMiddle  setShowLogin={setShowLogin} showLogin={showLogin}/>
        <MainComponent products={products} setProducts={setProducts}/>
        <Footer />
         <FooterMiddle />
        <FooterBottom/>
         <button className='action-message'>
        <SiGooglechat className='message-icon'/>
        <span>
          Chat</span> 
      </button>
    </div>
      
      </>
  );
}

export default App;
