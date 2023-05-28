import React, { useState } from "react";
import Axios from "axios";

import "assets/scss/Records.scss";
  
export default function TestCode(props) {
  const [totalamount, setTotalAmount] = useState()
  const [listTransaction, setListTransaction] = useState([])
  const [totalTransaction, setTotalTransaction] = useState()
  const [totalTicketUsed, setTotalTicketUsed] = useState()
  const [inputEditPrice, setInputEditPrice] = useState()
  const [inputEditVoucher, setInputEditVoucher] = useState()
  const [currentPrice, setCurrentPrice] = useState([])


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
      // console.log(res.data)
      setTotalTransaction(res.data.length)
    })
    .catch((error) => {
      console.log("error");
    });

  Axios.get("https://express.studiopoonya.com/setting/price")
    .then((res) => {
      // console.log(res);
    //   console.log(res.data)
      setCurrentPrice(res.data)
      // console.log(res.data)
    //   setTotalTransaction(res.data.length)
    })
    .catch((error) => {
      console.log("error");
    });

  

  Axios.get("https://express.studiopoonya.com/payment/status/completed")
    .then((res) => {
      // console.log("status", res);
      var sum = 0;
      res.data.forEach(element => {
        var count;
        count = parseInt(element.totalprice) * element.quantity
        sum += count
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

  const EditPrice = () => {
   
    Axios.get(`https://express.studiopoonya.com/setting/price/update/${inputEditPrice}`)
      .then((res) => {
        console.log(res);
        alert("sukses")
        })
      .catch((error) => {
        console.log("error");
        alert("gagal")
      });
  };

  const EditVoucher = () => {

    var body = {
      transaction_number : inputEditVoucher,
      price: inputEditPrice
    }
   
    Axios.post(`https://express.studiopoonya.com/admin/voucher/custom`, body)
      .then((res) => {
        console.log(res);
        alert("sukses")
        })
      .catch((error) => {
        console.log("error");
        alert("gagal")
      });
  };

  Axios.get("https://express.studiopoonya.com/payment")
  .then((res) => {
    // console.log(res);
    setListTransaction(res.data)
    // console.log(res.data)
    setTotalTransaction(res.data.length)
  })
  .catch((error) => {
    console.log("error");
  });

 



 

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
          <li >
            <a href="./Generate">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Generate Code</span>
            </a>
          </li>
          <li >
            <a href="./EditPrice">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Edit Price</span>
            </a>
          </li>
          <li className="active"> 
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

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Custom Voucher</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Custom Voucher </a>
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
          <h5>Input Voucher Code</h5>
          <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Input Voucher Code"
            id="copyText"
            onChange={(e) => setInputEditVoucher(e.target.value)}
           
          />
          </div>
          <h5>Input Price</h5>
          <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Input Price"
            id="copyText"
            onChange={(e) => setInputEditPrice(e.target.value)}
           
          />
          </div>
          {/* <div className="input-group-append">
            <span className="input-group-text" id="copyBtn">
              Copy Text
            </span>
          </div> */}
      <form>
        <button
            onClick={() => EditVoucher()}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
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
                    <th>Payment Method</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listTransaction.map(item => {
                      if (item.pay_status == "Completed" && item.payment_method == "adminredeem") {
                        return (
                          <tr key={item.transaction_number}>
                    <td>
                              <p>{item.transaction_number}</p>
                    </td>
                            <td>{formatDateOrder(item.createdAt)}</td>
                    <td>
                              <p>{item.payment_method}</p>
                    </td>
                    <td>
                              <p>{item.totalprice}</p>
                    </td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>
                        )
                      }
                      else if (item.pay_status == "Pending" && item.payment_method == "adminredeem") {
                        return (
                          <tr key={item.transaction_number}>
                            <td>
                              <p>{item.transaction_number}</p>
                            </td>
                            <td>{formatDateOrder(item.createdAt)}</td>
                            <td>
                              <p>{item.payment_method}</p>
                    </td>
                    <td>
                              <p>{item.totalprice}</p>
                    </td>
                            <td>
                              <span className="status pending">Pending</span>
                            </td>
                          </tr>
                        )
                      }
                    }
                    )

                  }

                
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
