import React from "react";
import "./BottomHeader.css";
export default function BottomHeader() {
    return (
      <div className="BottomHeader position-relative ">
        <nav className="navbar navbar-expand-md navbar-light bg-light ">
          <ul className="navbar-nav justify-content-between ">
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
                    <li>Đồng hồ thông minh Garmin</li>
                    <li>Đồng hồ thông minh SamSung</li>
                    <li>Đồng hồ thông minh Apple</li>
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
                    <li>Vòng Đeo Tay Garmin</li>
                    <li>Vòng Đeo Tay SamSung</li>
                    <li>Vòng Đeo Tay MisFit</li>
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
                  <img alt="Tai nghe" src="https://techzones.vn/Data/Sites/1/media/cover-menu/am-thanh/tainghe.png" data-was-processed="true" />
                  <ul className="ColumnSubMenu">
                    <li>Tai nghe In-ear</li>
                    <li>Tai nghe Full-Size</li>
                    <li>Tai nghe Bluetooth</li>
                    <li>Tai nghe On-ear</li>
                    <li>Tai nghe Ear-pud</li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">Loa</span>
                  <div className="subimg">
                  <img alt="Loa" src="https://techzones.vn/Data/Sites/1/media/cover-menu/am-thanh/loaat.png" data-was-processed="true"/>
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
                  <img alt="Máy nghe nhạc" src="https://techzones.vn/Data/Sites/1/media/cover-menu/am-thanh/maynghenhac.png" data-was-processed="true"/>
                  </div>
                </li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">LINH KIỆN PC</a>
              <ul className="DropDown">
                <li className="Column">
                  <span className="ColumnTitle">Mainboard</span>
                  <img alt="Bo mạc chủ , mainboard" src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/mainboard.png" data-was-processed="true"/>
                  <ul className="ColumnSubMenu">
                    <li>Mainboard Gigabyte</li>
                    <li>Mainboard Asus</li>
                    <li>Mainboard MSI</li>
                  </ul>
                </li>
                <li className="Column">
                  <span className="ColumnTitle">RAM</span>
                  <div className="subimg">
                  <img alt="Ram máy tính" data-src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/ram.png" src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/ram.png" data-was-processed="true"/>
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
                  <img alt="Tản nhiệt" data-src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/tannhiet.png" src="https://techzones.vn/Data/Sites/1/media/cover-menu/may-tinh/tannhiet.png" data-was-processed="true"/>
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
