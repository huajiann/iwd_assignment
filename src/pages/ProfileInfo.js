import React from "react";
import "./Security.css";
import ProfImg from "../assets/images/prof_test.jpeg";

const ProfileInfo = () => {
  return (
    <div className="container content">
      <h1 className="h3 mb-3">Profile Information</h1>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label htmlFor="inputUsername">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputUsername"
                    placeholder="huajiann_"
                  />
                </div>
                <div className="form-group row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      placeholder="Hua Jian"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      placeholder="Chan"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputUsername">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhoneNumber"
                    placeholder="+6012-345 6789"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputUsername">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="abc@kdu-online.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputUsername">Linkedln</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLinkedln"
                    placeholder="Linkedln Username"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <img
                    alt="Andrew Jones"
                    src={ProfImg}
                    className="rounded-circle img-responsive mt-2"
                    width="200"
                    height="200"
                  />
                  <div className="mt-2">
                    <button>
                      <small>Upload</small>
                    </button>
                    <p></p>
                  </div>
                  <small>
                    For best results, use an image at least 128px by 128px in
                    .jpg format
                  </small>
                </div>
              </div>
            </div>
            <p></p>
            <button type="submit">Save changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
