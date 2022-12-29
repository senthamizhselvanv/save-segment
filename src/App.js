import React from "react";
import "./App.css";

function addSchema() {
  console.log("Add schema");
}

function App() {
  return (
    <>
      <div className="container demo">
        <div className="text-center">
          <button
            type="button"
            className="btn btn-outline-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Save segment
          </button>
        </div>
        <div
          className="modal left fade"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header header-bgcolor">
                <label
                  className="labl"
                  data-dismiss="modal"
                  style={{ cursor: "pointer" }}
                >
                  <iconify-icon icon="material-symbols:arrow-back-ios" />
                  <span className="mx-3">Saving Segment</span>
                </label>
              </div>
              <div className="modal-body">
                <div className="nav flex-sm-column flex-row">
                  <div>
                    <span className="body-css">
                      Enter the Name of the Segment
                    </span>
                  </div>
                  <div className="mt-3">
                    <input
                      type={"text"}
                      name="segment"
                      placeholder="Name of the segment"
                      className="form-control placeholder-font"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="body-css">
                      To save your segment, you need to add the schemas to build
                      the query
                    </span>
                  </div>
                  <div className="mt-3 txt-last">
                    <span className="traits">
                      <iconify-icon
                        style={{ color: "green" }}
                        icon="material-symbols:circle"
                      />
                      &nbsp;- User Traits &nbsp;&nbsp;&nbsp;
                      <iconify-icon
                        style={{ color: "red" }}
                        icon="material-symbols:circle"
                      />
                      &nbsp;- Group Traits
                    </span>
                  </div>
                  <div className="mt-3 row dropdown">
                    <div className="col-1">
                      <iconify-icon
                        style={{ color: "#999999" }}
                        icon="ic:sharp-circle"
                      />
                    </div>
                    <div className="col-11">
                      <select
                        className="form-control placeholder-font"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Add schema to segment</option>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                        <option value="gender">Gender</option>
                        <option value="age">Age</option>
                        <option value="account_name">Account Name</option>
                        <option value="city">City</option>
                        <option value="state">State</option>
                      </select>
                    </div>
                  </div>
                  <div className="placeholder-font ">
                    <span
                      className="px-4 mx-2 dropdown addschema"
                      style={{ cursor: "pointer" }}
                      onClick={() => addSchema()}
                    >
                      <iconify-icon icon="material-symbols:add" />
                      <span className="addschema">&nbsp;Add new schema</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal-footer footer-bgcolor">
                <button
                  style={{ backgroundColor: "#478778", color: "white" }}
                  type="button"
                  className="btn mr-auto"
                  data-dismiss="modal"
                >
                  Save the Segment
                </button>
                <button
                  style={{
                    backgroundColor: "#FFFFF0",
                    color: "#FF2400",
                    fontWeight: "bold",
                  }}
                  type="button"
                  className="btn mr-auto"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
