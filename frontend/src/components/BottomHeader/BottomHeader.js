import React from "react";
import { Link } from "react-router-dom";
import "./BottomHeader.css";
export default function BottomHeader() {
    return (
      <div className="BottomHeader">
        <nav className="navbar ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">THIẾT BỊ ĐEO TAY</a>
              <ul className="DropDown">
                <li className="Column">
                  <span className="ColumnTitle">Đồng hồ thông minh</span>
                  <img
                    alt="Đồng hồ thông minh"
                    className="loaded"
                    src="https://techzones.vn/Data/Sites/1/media/cover-menu/thiet-bi-deo-tay/smartwatch.png"
                    data-was-processed="true"
                  ></img>{" "}
                  <ul className="ColumnSubMenu">
                    <li><Link to={`/search?category=watch&brand=Garmin`}>Đồng hồ thông minh Garmin</Link></li>
                    <li><Link to={`/search?category=watch&brand=SamSung`}>Đồng hồ thông minh SamSung</Link></li>
                    <li><Link to={`/search?category=watch&brand=Apple`}>Đồng hồ thông minh Apple</Link></li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">Vòng Đeo Tay</span>
                  <div className="subimg">
                    <img
                      alt="Vòng đeo tay"
                      className="loaded"
                      src="https://techzones.vn/Data/Sites/1/media/cover-menu/thiet-bi-deo-tay/vongdeotay.png"
                      data-was-processed="true"
                    ></img>
                  </div>
                  <ul className="ColumnSubMenu">
                    <li><Link to={`/search?category=bracelet&brand=Garmin`}>Vòng Đeo Tay Garmin</Link></li>
                    <li><Link to={`/search?category=bracelet&brand=SamSung`}>Vòng Đeo Tay SamSung</Link></li>
                    <li><Link to={`/search?category=bracelet&brand=Misfit`}>Vòng Đeo Tay MisFit</Link></li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">Hybrid Watch</span>
                  <div className="subimg">
                    <img
                      alt="Hybrid watch"
                      className="loaded"
                      src="https://techzones.vn/Data/Sites/1/media/cover-menu/thiet-bi-deo-tay/hybridwatch.png"
                      data-was-processed="true"
                    ></img>
                  </div>
                  <ul className="ColumnSubMenu">
                    <li>Đồng hồ Diesel</li>
                    <li>Đồng hồ Fossil</li>
                    <li>Đồng hồ Micheal Kors</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">NGHE / NHÌN</a>
              <ul className="DropDown">
                <li className="Column">
                  <span className="ColumnTitle">Tai nghe</span>
                  <img alt="Tai nghe" className="loaded" src="https://techzones.vn/Data/Sites/1/media/cover-menu/am-thanh/tainghe.png" data-was-processed="true" />
                  <ul className="ColumnSubMenu">
                    <li><Link to={`/search?category=inear`}>Tai nghe In-ear</Link></li>
                    <li><Link to={`/search?category=fullsize`}>Tai nghe Full-Size</Link></li>
                    <li><Link to={`/search?category=bluetooth`}>Tai nghe Bluetooth</Link></li>
                    <li><Link to={`/search?category=onear`}>Tai nghe On-ear</Link></li>
                    <li><Link to={`/search?category=earpud`}>Tai nghe Ear-pud</Link></li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">Loa</span>
                  <div className="subimg">
                  <img alt="Loa" className="loaded" src="https://techzones.vn/Data/Sites/1/media/cover-menu/am-thanh/loaat.png" data-was-processed="true"/>
                  </div>
                  <ul className="ColumnSubMenu">
                    <li>Loa Di động</li>
                    <li>Loa Để Bàn</li>
                    <li>Book Shelf</li>
                    <li>Sound bar</li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">Máy Nghe Nhạc</span>
                  <div className="subimg">
                  <img alt="Máy nghe nhạc" className="loaded" src="https://techzones.vn/Data/Sites/1/media/cover-menu/am-thanh/maynghenhac.png" data-was-processed="true"/>
                  </div>
                </li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">LINH KIỆN PC</a>
              <ul className="DropDown">
                <li className="Column">
                  <span className="ColumnTitle">Mainboard</span>
                  <img alt="Bo mạc chủ , mainboard" className="loaded" src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/mainboard.png" data-was-processed="true"/>
                  <ul className="ColumnSubMenu">
                    <li>Mainboard Gigabyte</li>
                    <li>Mainboard Asus</li>
                    <li>Mainboard MSI</li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">RAM</span>
                  <div className="subimg">
                  <img alt="Ram máy tính" className="loaded" data-src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/ram.png" src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/ram.png" data-was-processed="true"/>
                  </div>
                  <ul className="ColumnSubMenu">
                    <li>RAM Kingmax</li>
                    <li>RAM Galax</li>
                    <li>RAM Teamgroup</li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">Tản Nhiệt PC</span>
                  <div className="subimg">
                  <img alt="Tản nhiệt" className="loaded" data-src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/tannhiet.png" src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/tannhiet.png" data-was-processed="true"/>
                  </div>
                  <ul className="ColumnSubMenu">
                    <li>Tản nhiệt khí</li>
                    <li>Tản nhiệt chất lỏng</li>
                    <li>Tản nhiệt Case</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">MÁY TÍNH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">GAMING GEAR</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">CAMERA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">PHỤ KIỆN</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}
