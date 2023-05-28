import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import "../assets/scss/Voucher.scss"

import Button from "elements/Button";
import { Alert } from "react-bootstrap";

export default function FormLogin(props) {
  const history = useHistory();
  const [inputRedeem, setInputRedeem] = useState()
  const GenerateData = () => {
    history.push("Generate");
  };
  const DahsboardPage = () => {
    history.push("Dashboard");
  };

  const GenerateTicket = () => {
    // var data_ticket = {
    //   quantity: 1,
    //   ticket_used: true,
    //   expired: "2023-01-22 08:10:05",
    //   ticket_username: "testdummy5",
    //   createdBy: "admin",
    // };
    Axios.post("https://express.studiopoonya.com/admin/voucher")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error");
      });
    };

  const RedeemCode = () => {
    // var data_ticket = {
    //   quantity: 1,
    //   ticket_used: true,
    //   expired: "2023-01-22 08:10:05",
    //   ticket_username: "testdummy5",
    //   createdBy: "admin",
    // };
    Axios.get(`https://express.studiopoonya.com/payment/number/${inputRedeem}`)
      .then((res) => {
        console.log(res);
        if (res.data.transaction_number == inputRedeem && res.data.payment_method == "adminredeem" && res.data.pay_status == "Pending") {
              history.push('ClickPage')
              // alert("success redeem")
          // Axios.put(`http://express.studiopoonya.com/payment/update/status/${res.data.transaction_number}`)
          //   .then((result) => {
          //     console.log(result);
          //     history.push('ClickPage')
          //   })
          //   .catch((error) => {
          //     console.log("error");
          //   });
        }

      })
      .catch((error) => {
        console.log("error");
      });
  };

  <style></style>

  return (
    <div>
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">Poonya Admin</span>
        </a>
        <ul className="side-menu top">
          <li>
            <a href="./Dashboard">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="./Generate">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Generate Code</span>
            </a>
          </li>
          <li className="active">
            <a href="./EditPrice">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Edit Price</span>
            </a>
          </li>  
        </ul>
        <ul className="side-menu">
          <li >
            <a href="./LoginPage" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i className="bx bx-menu"></i>
          {/* <a href="#" className="nav-link">
            Categories
          </a> */}
          {/* <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form> */}
          {/* <input type="checkbox" id="switch-mode" hidden />
          <label className="switch-mode"></label>
          <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="img/people.png" />
          </a> */}
        </nav>

        <div className="head-title">
          <div className="left">
            <h1>Generate Code</h1>
            <ul className="breadcrumb">
              {/* <li>
                <a href="#">Dashboard</a>
              </li> */}
              <li>
                <i className="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="" href="">
                  Generate Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Redeem Code"
            id="copyText"
            onChange={(e) => setInputRedeem(e.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="copyBtn">
              Copy Text
            </span>
          </div>
          <br />
        </div>
        <form>
          <button
            onClick={() => GenerateTicket()}
            type="button"
            className="btn btn-primary"
          >
            Generate Code
          </button>

          {/* <button
            onClick={() => RedeemCode()}
            type="button"
            className="btn btn-primary"
          >
            Redeem Code
          </button> */}

        </form>
       

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Transaction Number</th>
                    <th>Date Order</th>
                    <th>Customer</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  
                   
                          <tr >
                    <td>
                              <p>helloo</p>
                    </td>
                            <td>asdasd</td>
                    <td>
                              <p>qweqwe</p>
                    </td>
                    <td>
                              <p>xzczxc</p>
                    </td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>
                        
                   
                    
                    

                  

                  {/* <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status process">Process</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            {/* <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                <i className="bx bx-plus"></i>
                <i className="bx bx-filter"></i>
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Todo List</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </li>
              </ul>
            </div> */}
          </div>
      </section>
    </div>
  );
}
