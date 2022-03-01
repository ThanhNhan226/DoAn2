import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.jpeg";
import "../styles/Trangchu.css";

function Trangchu() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> TRUNG TÂM THƯƠNG MẠI ĐẦU TIÊN TẠI BỒNG SƠN </h1>
        <p> DIAMOND SQUARE – Trung tâm thương mại đẳng cấp thu hút khách trong nước và quốc tế với vị thế độc tôn được hội tụ bởi tọa độ vàng giao thương, kiến trúc tinh tế, không gian trải nghiệm thời thượng và tầm nhìn kinh doanh chiến lược.

Được mệnh danh là “thiên đường mua sắm, giải trí” lớn nhất và đầu tiên của khu vực, Diamond Square mang đến không gian phố thị sầm uất với nhiều tiện ích đẳng cấp, phong phú, đáp ứng đa dạng mọi nhu cầu mua sắm, vui chơi, giải trí, thư giãn, học tập, y tế của mọi gia đình và khách du lịch bốn phương.
        </p>
        <Link to="/tongquan">
          <button> Xem Thêm </button>
        </Link>
      </div>
    </div>
  );
}

export default Trangchu;