import { listOption } from "./listOption";
import ProductListOption from "./ProductListOption";
import {TfiAngleUp, TfiPlus} from "react-icons/tfi";
import { useEffect, useState } from "react";
import './ProductFilter.css';
import CheckBox from "./CheckBox";

const ProductFilterCopy = (props)=>{
    let {optionFilter,setOptionFilter} = props;
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

    const ShowList = (props)=>{
        const {item,index} = props
        const {attribute_value , attribute_name} = item
                    return(
                    <>

                        {!item.attribute_name ?null:
                        <CheckBox attribute_value={attribute_value} attribute_name={attribute_name} show = {show} setShow={setShow} index={index} ></CheckBox>
                     }
                    </>
                    )
    }

    const [show, setShow] = useState([])

    return(
        
        <div className="grid__column-2">
            <div className="filter-list-wrap">

                <ul className="product-filter-list">
                    {typeDetail.map((item,index) => {
                        return (
                            <ShowList item={item} index={index} optionFilter={optionFilter} setOptionFilter={setOptionFilter} />
                        // const {attribute_value , attribute_name} = item
                        // return(
                        // <>
                        //     {!item.attribute_name ?null:
                        //     <CheckBox attribute_value={attribute_value} attribute_name={attribute_name} show = {show} setShow={setShow}></CheckBox>
                        //  }
                        // </>
                        // )
                    )})}           
                </ul>
            </div>
        </div>
    )
}

export default ProductFilterCopy;