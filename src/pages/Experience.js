import React from "react";
import "./Security.css";

const Experience = () => {
  return (
    <div className="container content">
      <h1 className="h3 mb-3">Experience</h1>

      <div className="tab-content">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="inputWorkplace">Workplace</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputWorkplace"
                  placeholder="Intern-Net Ltd."
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPosition">Position</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPosition"
                  placeholder="Software Engineer Lead"
                />
              </div>
              <div className="form-group row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputStart">Start</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMonth"
                    placeholder="May 2022"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEnd">End</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputYear"
                    placeholder="Current"
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

export default Experience;
