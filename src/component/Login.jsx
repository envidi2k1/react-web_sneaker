import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";


function Login() {
  return (
    <div className="wrap-login">
    <MDBContainer fluid className="container-login">
      <MDBRow className="container-row">
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
            <NavLink to="/" className="h1 fw-bold mb-0">
              <img
                src="./assets/logo.png"
                alt="logo"
                width="85px"
                height="85px"
              />
              <span className="logo-text">ENVIDI</span>  
              <img
                src="./assets/logo1.png"
                alt="logo"
                width="70px"
                height="70px"
              />
            </NavLink>
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Tài khoản"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Mật khẩu"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <button type="button" class="btn btn-dark mb-4 px-5 mx-5 w-100">
              Đăng nhập
            </button>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a class="text-muted" href="#!">
                Quên mật khẩu?
              </a>
            </p>
            <p className="ms-5">
              Không có tài khoản?{" "}
              <NavLink to="/registration" class="link-info">
                Đăng ký
              </NavLink>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="./assets/login-img.png"
            alt="Login image"
            height="300px"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default Login;
