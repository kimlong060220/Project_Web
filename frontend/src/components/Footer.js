import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
    return (
        <section id="footer">
			<div className="container">
				<div className="row text-center text-xs-center text-sm-left text-md-left">
					<div className="col-xs-12 col-sm-4 col-md-4">
						<img src="https://techzones.vn/Data/Sites/1/media/logo/logor.png" alt="Paris" width="140" height="30"></img>
						<ul className="list-unstyled quick-links">
							<li><a href="#"><i className="fa fa-angle-double-right"></i><b>Địa Chỉ :</b>GD3-UET-VNU</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i><b>Hotline :</b>18008098</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i><b>Hỗ trợ kĩ thuật :</b>18020909</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i><b>Thời Gian Làm Việc :</b>10h-18h (Trừ chủ nhật)</a></li>
							<li><a href=""><i className="fa fa-angle-double-right"></i><b>Xem Bản Đồ</b></a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5>Về TechZone</h5>
						<ul className="list-unstyled quick-links">
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Điều Khoản Sử Dụng</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Chính Sách Bảo Mật</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Giới Thiệu</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Tin Tức</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Liên Hệ</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5>Hỗ Trợ Khách Hàng</h5>
						<ul className="list-unstyled quick-links">
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Phương Thức Đặt Hàng</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Phương Thức Giao Hàng</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Phương Thức Thanh Toán</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Chính Sách Đổi Trả</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Quy Định Bảo Hành</a></li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
						<p>Công ty TNHH Công nghệ TechZone Việt Nam | Số ĐKKD 0107273909 do Sở KHĐT Thành phố Hà Nội cấp ngày 30/12/2015</p>
						<br></br>
						<p className="h6">© All right Reversed.</p>
					</div>
					<hr></hr>
				</div>
			</div>
		</section>
    );
}