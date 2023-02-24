import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Theo dõi chúng tôi trên:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                AIR JORDAN VIỆT NAM
              </h6>
              <p>
                Công ty phân phối giày thể thao nổi tiếng với thương hiệu Air
                Jordan tại Việt Nam.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Nike
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Adidas
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  MLB
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  New Blance
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Chính sách</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Chính sách giao hàng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Chính sách đổi trả
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Chính sách bảo hành
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Chính sách bảo mật
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-3" />
                Hà Nội, Việt Nam
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                envidi30701@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                01 234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" />
                01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Sneakers VietNam © 2021 Nike, Inc.
        <a className="text-reset text-decoration-none" href="/">
          All Rights Reserved
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
