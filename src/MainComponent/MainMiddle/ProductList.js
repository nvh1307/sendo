
import './ProductList.css'
import { useState, useEffect } from 'react'
import {TfiStar} from "react-icons/tfi"
import Button from '../../ButtonComponent/Button'

function formatCash(number) {
    let str = number.toString()
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

const ProductList = (props)=>{

    
    const {products} = props;

    
    return(
        <div className='grid__row'>
        
             {products.map((item)=>(
                
            <div className='grid__column-2'>
                <a className='product-list-container'>
                    <div className='product-item-img'>
                        <img src={item.image} alt="" />
                    </div>

                    <div className='product-item-infor'>
                    <div className='product-item-name'>
                        <div className='product-item-name-infor'>
                            {!item.shop.badge_urls.shop_plus? null : 
                            <img src={item.shop.badge_urls.shop_plus} alt="" />}
                            <span className='product-item-name-text'>{item.name}</span>
                        </div>
                        
                        
                    
                        
                    </div>
                    

                    <div className='product-item-price-current'>
                        <h4>{formatCash(item.sale_price_min)}đ</h4>
                    </div>
                    {!item.sale_percent?null: 
                        <div className='product-item-price-default'>
                        <span className='product-item-price-before'>
                          
                        {formatCash(item.default_price_max)}đ 
                        </span>
                        
                        <span className='product-item-price-sale'>

                        -{item.sale_percent}%
                        </span>
                    </div>}
                        <div className='product-item-text'>
                            <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" alt="" style={{width:"15%",marginRight:"4px"}} />
                            <span>Trả góp Kredivio</span></div> 
                    
                        {/* {item.package_discount?.[0] ?
                        (<div className='product-item-text'>
                            <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" alt="" style={{width:"15%",marginRight:"4px"}} />
                            <span>{item.package_discount?.[0].text}</span></div>) : null } */}
                        
                    
                    <div className='product-item-sold'>
                        <span>
                            Đã bán {item.sold} 
                        </span>

                        <span className='product-item-star'>
                            
                            {!item.rated.star ?null :
                            <>
                            <TfiStar className='product-item-star-icon' />
                            <span className='product-item-rated-star'>{item.rated.star}/5</span>
                            </>}
                            {!item.rated.total ?null :  
                            <span className='product-item-rated-total'>({item.rated.total})</span>}
                        </span>
                    </div>
                    <div className='product-item-shopname'>
                        <span>{item.shop.ware_house_region_name}</span>
                    </div>
                    </div>
                    
                </a>
            </div>
            
           
            
             ))}  

             <Button>Xem thêm</Button>
             </div>  
    )
}

export default ProductList