import FooterTop from "./FooterTop/FooterTop";
import './Footer.css';
import ScrollToTop from 'react-scroll-to-top';
import {TfiArrowUp} from "react-icons/tfi";
const Footer = ()=>{
    return(
        <div className="footer">
            <FooterTop/>
            <ScrollToTop smooth top="500" className="back-to-top" component={<TfiArrowUp className="back-to-top-icon"/>} />
        </div>
    )
}

export default Footer;