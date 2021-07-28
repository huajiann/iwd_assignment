import React from "react";
import "./Security.css";

const Education = () => {
  return (
    <div className="container content">
      <h1 className="h3 mb-3">Education</h1>

      <div className="tab-content">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="inputEducation">Course</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  placeholder="Bachelor of Software Enginnering"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEducation">Institute</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEducation"
                  placeholder="UOW MALAYSIA KDU"
                />
              </div>
              <div className="form-group row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputMonth">Month</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMonth"
                    placeholder="March"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputYear">Year</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputYear"
                    placeholder="2022"
                  />
                </div>
              </div>
              <p></p>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <button className="btn_add" type="submit">
                      Add
                    </button>
                  </div>
                  <div className="col-sm">
                    <button type="submit">Save changes</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
