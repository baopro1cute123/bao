import React from 'react';
import './admin.css'; // Thay 'tên-tệp-css' bằng tên thật của tệp CSS của bạn
import people from "./img/people.png";

const Pageadmin = () => {
    return (
        <div>
            {/* Đây có thể là các thành phần và cấu trúc giao diện của bạn */}
            <div id="sidebar">
                <section id="sidebar">
                    <a href="#" className="brand">
                        <i className='bx bxs-smile'></i>
                        <span className="text">AdminHub</span>
                    </a>
                    <ul className="side-menu top">
                        <li class="active">
                            <a href="#">
                                <i class='bx bxs-dashboard' ></i>
                                <span class="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-shopping-bag-alt' ></i>
                                <span class="text">My Store</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-doughnut-chart' ></i>
                                <span class="text">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-message-dots' ></i>
                                <span class="text">Message</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Team</span>
                            </a>
                        </li>

                    </ul>
                    <ul className="side-menu">
                        <li>
                            <a href="#">
                                <i class='bx bxs-cog' ></i>
                                <span class="text">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="logout">
                                <i class='bx bxs-log-out-circle' ></i>
                                <span class="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <div id="content">
                <nav>
                    <i class='bx bx-menu' ></i>
                    <a href="#" class="nav-link">Categories</a>
                    <form action="#">
                        <div class="form-input">
                            <input type="search" placeholder="Search..." />
                            <button className="buttonadmin" type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label for="switch-mode" class="switch-mode"></label>
                    <a href="#" class="notification">
                        <i class='bx bxs-bell' ></i>
                        <span class="num">8</span>
                    </a>
                    <a href="#" class="profile">
                        <img src={people} />
                    </a>
                </nav>

                <main>
                    <div className="headd-title">
                        <div class="left">
                            <h1>Dashboard</h1>
                            <ul class="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a class="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                        {/* <a href="#" class="btn-download">
                            <i class='bx bxs-cloud-download' ></i>
                            <span class="text">Download PDF</span>
                        </a> */}
                    </div>

                    <ul className="box-info">
                        <li>
                            <i class='bx bxs-calendar-check' ></i>
                            <span class="text">
                                <h3>1020</h3>
                                <p>New Order</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-group' ></i>
                            <span class="text">
                                <h3>2834</h3>
                                <p>Visitors</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-dollar-circle' ></i>
                            <span class="text">
                                <h3>$2543</h3>
                                <p>Total Sales</p>
                            </span>
                        </li>
                    </ul>

                    <div className="table-data">
                        <div className="order">
                            <div class="order">
                                <div class="headd">
                                    <h3>Recent Orders</h3>
                                    <i class='bx bx-search' ></i>
                                    <i class='bx bx-filter' ></i>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Date Order</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={people} />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status completed">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={people} />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status pending">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={people} />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status process">Process</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={people} />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status pending">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={people} />
                                                <p>John Doe</p>
                                            </td>
                                            <td>01-10-2021</td>
                                            <td><span class="status completed">Completed</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="todo">
                            <div class="headd">
                                <h3>Todos</h3>
                                <i class='bx bx-plus' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <ul class="todo-list">
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pageadmin;
