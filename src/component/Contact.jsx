import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Liên hệ với chúng tôi</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="./assets/sneakers-about.jpg"
              alt="contact"
              height="450px"
              width="450px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Nguyen Van A"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@gmail.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Messenger
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-dark">Send messenge</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
