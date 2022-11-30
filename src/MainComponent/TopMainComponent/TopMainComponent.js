import './TopMainComponent.css'
const TopMainComponent = ()=>{
    return(
        <div>
            <div className="top-main-container container">
                <div className='top-main-home'>

                <a href="" className='top-main-homepage-redirect' >Sendo.vn</a>
                <span>/</span>
                <span>Kết quả tìm kiếm</span>
                </div>

                <div className='top-main-show-result'>
                    <p className="top-main-search">Quần áo</p>
                    <p className="top-main-result">Tìm thấy hơn 10.000 sản phẩm</p>
                </div>
            </div>
        </div>
    )
}

export default TopMainComponent