import React from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
const Sidebar = () => {
    return (
        <><div className="container-fluid bg-secondary min-vh-100">
            <div className="row">
                <div className="col-2 bg-white vh-100">
                    <div className="bg-white sidebar p-2">
                        <div className="m-2">
                            <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
                            <span className="brand-name fs-4">Yousaf</span>
                        </div>
                    </div>
                    <hr className="text-dark" />
                    <div className="list-group list-group-flush">
                        <a className="list-group-item my-2">
                            <i className="bi bi-speedometer2 fs-5 me-3"></i>
                            <span className="fs-5">Dashboarh</span>
                        </a>
                        <a className="list-group-item py-3">
                            <i className="bi bi-house fs-5 me-3"></i>
                            <span className="fs-5">Home</span>
                        </a>
                        <a className="list-group-item py-2">
                            <i className="bi bi-table fs-5 me-3"></i>
                            <span className="fs-5">Products</span>
                        </a>
                        <a className="list-group-item py-2">
                            <i className="bi bi-clipboard-data fs-5 me-3"></i>
                            <span className="fs-5">Reports</span>
                        </a>
                        <a className="list-group-item py-2">
                            <i className="bi bi-people fs-5 me-3"></i>
                            <span className="fs-5">Customers</span>
                        </a>
                        <a className="list-group-item py-2">
                            <i className="bi bi-power fs-5 me-3"></i>
                            <span className="fs-5"> Logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar