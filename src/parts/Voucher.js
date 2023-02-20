import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import "assets/scss/Voucher.scss";
import Button from "elements/Button";

export default function FormLogin(props) {
  const history = useHistory();
  const GenerateData = () => {
    history.push("Generate");
  };
  const DahsboardPage = () => {
    history.push("Dashboard");
  };

  const GenerateTicket = () => {
    var data_ticket = {
      quantity: 1,
      ticket_used: true,
      expired: "2023-01-22 08:10:05",
      ticket_username: "testdummy5",
      createdBy: "admin",
    };
    Axios.post("https://express.studiopoonya.com/ticket", data_ticket)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div>
      <section id="sidebar">
        <a href="#" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">AdminHub</span>
        </a>
        <ul class="side-menu top">
          <li>
            <a href="./Dashboard">
              <i class="bx bxs-dashboard"></i>
              <span class="text">Dashboard</span>
            </a>
          </li>
          <li class="active">
            <a href="./Generate">
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Generate Code</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="./LoginPage" class="logout">
              <i class="bx bxs-log-out-circle"></i>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i class="bx bx-menu"></i>
          <a href="#" class="nav-link">
            Categories
          </a>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label for="switch-mode" class="switch-mode"></label>
          <a href="#" class="notification">
            <i class="bx bxs-bell"></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src="img/people.png" />
          </a>
        </nav>

        <div class="head-title">
          <div class="left">
            <h1>Generate Code</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>
                <a class="active" href="">
                  Generate Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Redeem Code"
            id="copyText"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="copyBtn">
              Copy Text
            </span>
          </div>
          <br />
        </div>
        <form>
          <button
            onClick={() => GenerateTicket()}
            type="button"
            class="btn btn-primary"
          >
            Generate Code
          </button>
        </form>
      </section>
    </div>
  );
}
