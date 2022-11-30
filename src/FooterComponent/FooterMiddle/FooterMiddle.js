import './FooterMiddle.css'

const FooterMiddle = ()=>{
    return(
        <div className="container">
            <div className="footer-middle-container">
                <div className='footer-middle-infor'  >
                    <span>Về chúng tôi</span>
                    <a href="">Giới thiệu Sendo.vn</a>
                    <a href="">Giới thiệu SenMall</a>
                    <a href="">Quy chế hoạt động</a>
                    <a href="">Chính sách bảo mật</a>
                    <a href="">Giao hàng và nhận hàng</a>
                </div>
                <div className='footer-middle-infor'>
                    <span>Dành cho người mua</span>
                    <a href="">Giải quyết khiếu nại</a>
                    <a href="">Hướng dẫn mua hàng </a>
                    <a href="">Chính sách đổi trả </a>
                    <a href="">Chăm sóc khách hàng</a>
                    <a href="">Nạp tiền điện thoại</a>
                </div>
                <div className='footer-middle-infor'>
                    <span>Dành cho người bán</span>
                    <a href="">Quy định đối với người bán</a>
                    <a href="">Chính sách bán hàng</a>
                    <a href="">Hệ thống tiêu chí kiểm duyệt</a>
                    <a href="">Mở shop trên Sendo</a>
                    <a href="">Giao hàng và nhận hàng</a>
                </div>
                <div className='footer-middle-infor'>
                    <span>Tải ứng dụng sendo</span>
                    <a href="">Mang thế giới mua sắm của Sendo trong tầm tay của bạn</a>
                    <div className='footer-middle-infor-link'>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png" alt="" />
                        <img src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png" alt="" />
                        <img src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle