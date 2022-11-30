import {TfiAngleUp,TfiAngleDown} from "react-icons/tfi";
import ProductListOption from "./ProductListOption";
const CheckBox = (props)=>{
    const {attribute_name , attribute_value, show, setShow, index} = props

    function handleToggle(){
        const object = document.getElementById(`product-list-option-${index}`)
        const btnUp = document.getElementsByClassName(`product-filter-icon-up-${index}`)[0]
        const btnDown = document.getElementsByClassName(`product-filter-icon-down-${index}`)[0]

        
        console.log(object)
        object.classList.toggle("noActive");
        btnUp.classList.toggle('noActive')
        btnDown.classList.toggle('noActive')
        
    }
    return(
        <div className="product-filter-item">
             <h4>{attribute_name}
                        <span>
                            <button className={`product-filter-icon-up product-filter-icon-up-${index}`} onClick={()=>handleToggle(index)}>

                                <TfiAngleUp />
                                
                            </button>
                            <button className={`noActive product-filter-icon-down product-filter-icon-down-${index}`} onClick={()=>handleToggle(index)}>
                            <TfiAngleDown />
                            </button>
                        </span>
                        </h4>
                        {/* show && show?.includes(attribute_name)&& */}
                        {
                            <div className ="product-list-option" id={`product-list-option-${index}`} >
                                <ProductListOption detail={attribute_value} /> 
                                </div>
                        }

        </div>
    )
}

export default CheckBox;