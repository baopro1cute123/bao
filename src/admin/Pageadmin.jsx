import React from "react"
import Homeadmin from "./Homeadmin"
import Sidebar from "./Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Pageadmin = () => {
    return (
        <>
            <div className="container-fluid bg-secondary min-vh-100">
                <div className="row">
                    <div className="col-2 bg-white vh-100">
                        <Sidebar />
                    </div>
                    <div className="col"></div>
                    <Homeadmin />
                </div>
            </div>


        </>
    )
}

export default Pageadmin