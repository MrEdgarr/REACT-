import React, { Component } from 'react';
import { NavLink} from "react-router-dom";

class Slider extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container px-5">
                        <a className="navbar-brand" href="/">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                {/* <li className="nav-item"><a className="nav-link" href="/product">Product</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li> */}
                                <li className="nav-item"> <NavLink className="nav-link" to="/">Home</NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to="/product">Product</NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to="/contact">Contact</NavLink></li>

                                {/* Link chuyen doi khong can load lai trang */}
                                {/* <li className="nav-item"> <Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/product">Product</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/contact">Contact</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                        <div className="container px-5">
                            <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                            <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                            <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle" />
                    <div className="bg-circle-2 bg-circle" />
                    <div className="bg-circle-3 bg-circle" />
                    <div className="bg-circle-4 bg-circle" />
                </header>
            </div>
            
        );
    }
}

export default Slider;