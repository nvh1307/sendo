import './HeaderTop.css'
import {useEffect, useState} from 'react'
import img from './R842FO.png'
const HeaderTop = ()=>{

   const [downloadApp,setDownloadApp] = useState(false);
   const [cskh, setCskh] = useState(false);
   const [checkOrder, setCheckOrder] = useState(false);

   const clickOut=()=>{
    setDownloadApp(false);
    setCskh(false);
    setCheckOrder(false);
   }
   
   useEffect(()=>{
    
        document.addEventListener('onClick',clickOut)
    
    
   },[])
    return(
        <div className="header-top container">
            <div className='header-top-action'>
                <span onClick={()=>{setDownloadApp(!downloadApp);setCheckOrder(false);setCskh(false)}}>Tải ứng dụng</span>
                {downloadApp && 
                <div className='header-top-download-app'>
                    <img src={img} alt="" />
                    <p>Quét tải ứng dụng</p>
                </div>
}
            </div>
            <div className='header-top-action'>
                <span onClick={()=>{setCskh(!cskh); setCheckOrder(false);setDownloadApp(false)}}>Chăm sóc khách hàng</span>

                {cskh &&
                <div className='header-top-customcare'>
                <p>Trung tâm hỗ trợ</p>
                <p>
                    Trả hàng hoàn tiền
                </p>
            </div>
}
            </div>
            

            <div className='header-top-action'>
                <span onClick={()=>{setCheckOrder(!checkOrder);setDownloadApp(false);setCskh(false)}}>Kiểm tra đơn hàng</span>

                {checkOrder &&
                <form className='header-top-form-check' action="">
                        <input type="text" placeholder='Nhập mã đơn hàng' />
                        <input type="text" placeholder='Email / Số điện thoại' />
                        <button type='submit' className='header-top-submit-btn'>Kiểm tra</button>
                </form>
}
            </div>
        </div>
    )
}

export default HeaderTop;