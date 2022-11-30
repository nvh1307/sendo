import Button from "../ButtonComponent/Button";
import {TfiFacebook, TfiGoogle} from "react-icons/tfi"
import './Form.css'
const Form = ()=>{
    return(
        <div className="sign-up-container">
            <form action="" className="form-sign-up">
                <div>
                    <h2>Xin chào,</h2>
                </div>
                <div>
                    <h4>Đăng nhập hoặc đăng ký tài khoản</h4>
                </div>
                <div className="form-sign-up-input">
                    <input type="text"placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-sign-up-btn-submit">
                    <button type="submit">Tiếp tục</button>
                </div>

                <div className="form-sign-up-more">
                    <p>Hoặc thông qua:</p>
                    <div className="form-sign-up-icon">

                    <span>
                        <TfiFacebook/>
                    </span>
                    <span>
                        <TfiGoogle/>
                    </span>
                    </div>

                    <p>Khi dùng tài khoản Sendo, bạn đã đồng ý về <a href="">điều khoản dịch vụ</a></p>
                </div>
            </form>
        </div>
    )
}

export default Form