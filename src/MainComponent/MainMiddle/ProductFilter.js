import { listOption } from "./listOption";
import ProductListOption from "./ProductListOption";
import {TfiAngleUp, TfiPlus} from "react-icons/tfi";
import { useEffect, useState } from "react";
import './ProductFilter.css';
import ProductFilterCopy from "./ProductFiltercopy";

const ProductFilter = ()=>{
    
    const [typeDetail, setTypeDetail] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/typeList')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setTypeDetail(data)
        })
    },[])
    return(
        
        <div className="grid__column-2">
            <ul className="product-filter-list">
                {typeDetail.map((item,index)=>{
                    const {attribute_value} = item
                    return(
<>
{!item.attribute_name ?null:
                    <li className="product-filter-item" key={index}>
                        
                        
                        <h4>{item.attribute_name}
                        <span>
                        <TfiAngleUp className="product-filter-icon-up"/>
                        </span>
                        </h4>
                        
                        <ProductListOption detail={attribute_value} /> 

                        
                        
                    </li>
                     }
                    </>
                    )
                })}           
            </ul>
        </div>
    )
}

export default ProductFilter;