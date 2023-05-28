import React, { useState } from "react";
import Axios from "axios";

import "assets/scss/Records.scss";
  
export default function Record(props) {
  const [totalamount, setTotalAmount] = useState()
  const [listTransaction, setListTransaction] = useState([])
  const [totalTransaction, setTotalTransaction] = useState()
  const [totalTicketUsed, setTotalTicketUsed] = useState()
  const [totalBookingUsed, setTotalBookingUsed] = useState()
  const [totalVoucherUsed, setTotalVoucherUsed] = useState()

  function convertToRupiah(angka) {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }

  function formatDateOrder(date) {
    var newdate = new Date(date)
    var getdate = newdate.getDate()
    var getmonth = newdate.getMonth()
    var bulan
    var tgl
    if(getdate < 10){
      tgl = '0'+ getdate
    }
    else{
      tgl = getdate
    }
    if(getmonth + 1 < 10){
      bulan = '0'+ (getmonth+1)
    }
    else{
      bulan = getmonth + 1
    }
    var getyear = newdate.getFullYear()
    return `${getdate}/${bulan}/${getyear}`
    // return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }

  Axios.get("https://express.studiopoonya.com/payment")
    .then((res) => {
      // console.log(res);
      setListTransaction(res.data)
      console.log(res.data)
      setTotalTransaction(res.data.length)
    })
    .catch((error) => {
      console.log("error");
    });


    Axios.get("https://express.studiopoonya.com/payment")
    .then((res) => {
      var count = 0;
      res.data.forEach(element2 => {
        if(element2.payment_method == "Booking Photo"){
         count++
        }
      })
      // console.log(res);
      setTotalTicketUsed(count)
    //   console.log(res.data)
      
    })
    .catch((error) => {
      console.log("error");
    });


    Axios.get("https://express.studiopoonya.com/payment")
    .then((res) => {
      var count = 0;
      res.data.forEach(element2 => {
        if(element2.payment_method == "adminredeem" && element2.pay_status == 'Completed'){
        count++
        }
      })
      // console.log(res);
      setTotalVoucherUsed(count)
    //   console.log(res.data)
      
    })
    .catch((error) => {
      console.log("error");
    });

  

  Axios.get("https://express.studiopoonya.com/payment/status/completed")
    .then((res) => {
      // console.log("status", res);
      var sum = 0;
      res.data.forEach(element => {
        if(element.pay_status == "Completed" && element.payment_method != "adminredeem"  )
        {

            var count;
            count = parseInt(element.totalprice) * element.quantity
            sum += count
        }
      });
      // console.log(sum)
      var conv = convertToRupiah(sum)
      setTotalAmount(conv)
    })
    .catch((error) => {
      console.log("error");
    });

  const PaymentAll = () => {
    Axios.get("https://express.studiopoonya.com/payment")
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
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">Poonya Admin</span>
        </a>  
        <ul className="side-menu top">
          <li className="active">
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
          <li>
            <a href="./EditPrice">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Edit Price</span>
            </a>
          </li>
          <li>
            <a href="./EditVoucher">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Custom Voucher</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="./LoginPage" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          {/* <i className="bx bx-menu"></i>
          <a href="#" className="nav-link">
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
          <label for="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="img/people.png" />
          </a> */}
        </nav>

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                {/* <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li> */}
              </ul>
            </div>
            {/* <a href="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </a> */}
          </div>
          <ul className="box-info">
          <a href="Dashboard">
            <li>
              <i className="bx bxs-calendar-check"></i>
              <span className="text">
                <h3>{totalTransaction}</h3>
                <p>Total Transaction</p>
              </span>
            </li>
            </a>
            <a href="Dashboard_Ticket">
            <li>
              <i className="bx bxs-group"></i>
              <span className="text">
              <h3>{totalVoucherUsed}</h3>
                <p>Voucher Used</p>
              </span>
            </li>
            </a>
            <a href="Dashboard_Ticket">
            <li>
              <i className="bx bxs-group"></i>
              <span className="text">
              <h3>{totalTicketUsed}</h3>
                <p>Booking Used</p>
              </span>
            </li>
            </a>
            <a href="Dashboard_Sales">
            <li>
              <i className="bx bxs-dollar-circle"></i>
              <span className="text">
              <h3 style={{fontSize:20}}>{totalamount}</h3>
                <p>Total Sales</p>
              </span>
            </li>
            </a>
          </ul>

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
                    <th>No</th>
                    <th>Transaction Number</th>
                    <th>User</th>
                    <th>Payment Method</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                     listTransaction.map((item, index)=> {
                      if (item.pay_status == "Completed" && item.payment_method === "Booking Photo") {
                        return (
                          <tr key={item.transaction_number}>
                    <td>
                              <p>{index}</p>
                    </td>
                    <td>
                              <p>{item.transaction_number}</p>
                    </td>
                    <td>
                              <p>{item.username}</p>
                            </td>
                            <td>
                              <p>{item.payment_method}</p>
                            </td>
                            <td>{formatDateOrder(item.createdAt)}</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>
                        )
                      }
                      else if(item.pay_status == "Pending" && item.payment_method == "Booking Photo")  {
                        return (
                          <tr key={item.transaction_number}>
                            <td>
                              <p>{index+1}</p>
                            </td>
                            <td>
                              <p>{item.transaction_number}</p>
                            </td>
                            <td>
                              <p>{item.username}</p>
                            </td>
                            <td>
                              <p>{item.payment_method}</p>
                            </td>
                            <td>{formatDateOrder(item.createdAt)}</td>
                            <td>
                              <span className="status pending">Pending</span>
                            </td>
                          </tr>
                        )
                      }
                    }
                    )

                  }

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
        </main>
      </section>

      <style></style>

      <script src="assets/js/dashboard.js"></script>
    </div>
  );
}
