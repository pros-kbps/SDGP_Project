import React from "react";



function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Project Information</h6>
                        <hr/>
                        <p>
                            Information about the project...
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><link to="/">Home</link></div>
                        <div><link to="/">Matches</link></div>
                        <div><link to="/">prediction</link></div>
                        <div><link to="/">Contact</link></div>
                        <div><link to="/About">About</link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <div><p className="text-white mb-1">col-#06,Information Institute of Technology</p></div>
                        <div><p className="text-white mb-1">+94 773 223344</p></div>
                        <div><p className="text-white mb-1">+94 773 223344</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;