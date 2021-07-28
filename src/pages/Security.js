import React from "react";
import "./Security.css";

const Security = () => {
  return (
    <div className="container content">
      <h1 className="h3 mb-3">Security Settings</h1>

      <div className="tab-content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Password</h5>

            <form>
              <div className="form-group">
                <label htmlFor="inputPasswordCurrent">Current password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordCurrent"
                />
                <small>
                  <a href="/">Forgot your password?</a>
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNew">New password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordNew"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNew2">Verify password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordNew2"
                />
              </div>
              <p></p>
              <button type="submit">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
