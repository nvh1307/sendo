import TopMainComponent from './TopMainComponent/TopMainComponent'
import './MainComponent.css'
import ProductFilter from './MainMiddle/ProductFilter'
import ProductListFilter from './MainMiddle/ProductListFilter'
import ProductList from './MainMiddle/ProductList'
import ProductFilterCopy from './MainMiddle/ProductFiltercopy'
import { useState } from 'react'
const MainComponent = (props)=>{
    const {products,setProducts} = props
    const handleFilterProducts = (e, item,attributeKey)=>{
        const {check} = e.target
        
    }
    
    
    const [optionFilter,setOptionFilter]=useState([])
    return(
        <div className="app-container">
            <TopMainComponent/>

            <div className='grid__row container'>
                <ProductFilterCopy className="filter-list-wrap" optionFilter={optionFilter} setOptionFilter={setOptionFilter}/>
                <div className='grid__column-8'>
                    <ProductListFilter/>
                    <ProductList products={products}/>
                </div>
            </div>
        </div>
    )
}

export default MainComponent