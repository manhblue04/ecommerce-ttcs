import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { formater } from "utils/fomater";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Header() {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li>
                                <FiMail />
                                hello@gmail.com
                            </li>
                            <li>
                                Miễn phí hóa đơn từ {formater(200000)}
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaTwitterSquare />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaRegUser />
                                </Link>
                                <span>
                                    Đăng nhập
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Header);