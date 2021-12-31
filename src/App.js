import React, { useState } from "react";
import "./App.css";
import Logo from "./Components/Image/logo.png";
import swal from "sweetalert";

function App() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const submitFunction = (e) => {
    e.preventDefault();

    if (input === "") {
      swal("Please filed the Company Name");
    } else if (select === "") {
      swal("Please filed the Industry Name");
    } else {
      swal("congratulations!", "Your Form is Submited", "success");
      setTimeout(() => {
        swal(
          "Your Details!",
          `Company Name is : ${input} Industry Name is : ${select}`,
          "success"
          
        );
      }, 2000);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="form">
            <form action="" onSubmit={submitFunction}>
              <div className="top_Logo">
                <div className="firstLine"></div>
                <div className="secoundLine"></div>
                <div className="threeLine"></div>
              </div>
              <div className="text_heading">
                <h1>It's delight to have you onboard</h1>
              </div>
              <div className="pTag">
                <p>
                  Help us know you better. <br /> (This is how we optimize Wobot as per
                  your business needs)
                </p>
              </div>

              <div className="input_Section">
                <div className="icon_input">
                  <label htmlFor="">Company name</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    name="input"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <i class="fas fa-address-book"></i>
                </div>

                <div className="icon_input">
                  <label htmlFor="">Industry</label>
                  <select
                    name="select"
                    id=""
                    onChange={(e) => setSelect(e.target.value)}
                  >
                    <option>Industry Select</option>
                    <option value="Industry 1">Industry 1</option>
                    <option value="Industry 2">Industry 2</option>
                    <option value="Industry 3">Industry 3</option>
                    <option value="Industry 4">Industry 4</option>
                    <option value="Industry 5">Industry 5</option>
                  </select>
                  <i class="fas fa-building"></i>
                </div>
              </div>
              <div className="company_size">
                <p>Company size</p>
                <span>1 - 20</span>
                <span>21 - 50</span>
                <span className="active">51 - 200</span>
                <span>201 - 500</span>
                <span> 500+</span>
              </div>
              <div className="submit">
                <input type="submit" value="Get Started" />
              </div>

              <div className="trim_and_condition">
                <p>Terms of use | Privacy policy </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
