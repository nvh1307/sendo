import './ProductListOption.css';
import Button from '../../ButtonComponent/Button';
import {TfiPlus} from "react-icons/tfi";
const ProductListOption = (props)=>{
    const {detail} = props
    

    const formarPrice = ((price)=>{
        if(price>100000 && price < 1000000){
            return `${price/1000}K`
        }
        else if(price > 1000000){
            return `${price/1000000}M`
        }
        return price;
    })
    const handlePrice = ((lt,gt) => {
        switch(true){
            case gt === -1:
                return `Dưới ${formarPrice(lt)}`
            case lt === -1:
                return `Trên ${formarPrice(gt)}`
            case lt!==-1 && gt!== -1:
                return `${formarPrice(gt)} - ${formarPrice(lt)} `
            default:
                return null
        }
    })
    
        
    const handleColor = ((color)=>{
        return `#${color}`
    })    
        
    
    if(!detail) return null
    return(
        
        <div>
            <ul className='product-list-option'>
                {detail.map((item,index)=>{
                    return(

                    <li className="product-list-option-item" key={index}>

                    <input type="checkbox"/>
                    <span>

                    {item?.option_name ? item.option_name:null}
                    {item?.ltprice?handlePrice(item?.ltprice,item?.gtprice):null} 
                    {item?.color_hexRgb?<>
                        <input className='product-list-type-price' type="color" value={handleColor(item.color_hexRgb)} />
                        <span>{item.color_name}</span>
                    </>:
                    null                    
                    }
                    </span>
                    
                    </li>
                    
                    )
                    })}

                    <Button>
                            
                            <TfiPlus className="product-filter-icon-plus"/>Xem thêm    
                        </Button>

            </ul>
        </div>
    )
}

export default ProductListOption