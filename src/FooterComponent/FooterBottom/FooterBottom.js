
import './FooterBottom.css'
const FooterBottom = ()=>{
    return(
        <div className="footer-bottom container">
            <div className='footer-bottom-container'>
                <div className='footer-bottom-item'>
                    
                    <p className='footer-bottom-paragraph'>
                        Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của tập đoàn FPT
                    </p>
                    <p className='footer-bottom-paragraph'>
                        Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.
                    </p>

                    <p className='footer-bottom-paragraph'>
                        Cơ quan cấp: Sở kế hoạch và Đầu tư TPHCM.
                    </p>

                    <p className='footer-bottom-paragraph'>
                        Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân
                        Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                    </p>
                    <p className='footer-bottom-paragraph'>
                        Email: lienhe@sendo.vn
                    </p>

                    <div className='footer-bottom-img'>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png" alt="" />

                        <img src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png" alt="" />
                    </div>
                </div>
                

                
            </div>
            <div className="footer-bottom-form">
                <span>Đăng kí nhận bản tin ưu đãi khủng từ Sendo</span>
                <div>

                <input className='footer-bottom-form-input' type="text" placeholder="Email của bạn là" />
                <button className='footer-bottom-form-btn' type="submit">Đăng ký</button>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom