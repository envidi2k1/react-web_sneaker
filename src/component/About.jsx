import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4">Giới thiệu</h1>
            <p className="lead mb-4">
              Chào mừng đến với trang web bán giày sneaker của chúng tôi! Chúng
              tôi tự hào là một trong những cửa hàng chuyên cung cấp giày
              sneaker hàng đầu trên thị trường. Với mục tiêu mang đến cho khách
              hàng những sản phẩm giày sneaker chất lượng cao và phong cách độc
              đáo, chúng tôi đã không ngừng nỗ lực để cập nhật những mẫu giày
              mới nhất và đáp ứng nhu cầu của khách hàng. Tại cửa hàng của chúng
              tôi, bạn sẽ được trải nghiệm một không gian mua sắm thú vị với đa
              dạng mẫu giày sneaker từ những thương hiệu nổi tiếng như Nike,
              Adidas, Puma, Converse, Vans và nhiều thương hiệu khác. Với sự đa
              dạng về kiểu dáng, màu sắc, kích cỡ và chất liệu, chúng tôi tin
              rằng bạn sẽ tìm được đôi giày sneaker ưng ý cho mình. Đội ngũ nhân
              viên của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn trong việc
              chọn lựa sản phẩm phù hợp và đáp ứng nhu cầu của bạn. Chúng tôi
              cam kết đem đến cho bạn sự hài lòng và niềm vui khi sở hữu một đôi
              giày sneaker mới. Cảm ơn bạn đã ghé thăm trang web của chúng tôi
              và mong muốn sẽ có cơ hội phục vụ bạn trong tương lai.
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">Liên hệ</NavLink>
          </div>
          <div className="col-md-6 d- justify-content-center">
            <img src="./assets/img-about.png"
            alt="about us" height="500px" width="650px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
