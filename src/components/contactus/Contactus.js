import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";

const Contactus = () => {
    return(
        <div>
            <Navbar />

            <br/><br/>
            <div className="ui container">
                <div className="doubling stackable ui one column grid">

                    <div className="column center aligned">
                    <div className="ui items">
                    <div className="item">
                    <div class="content"> 
                    <a class="ui massive black tag label">CONTACT US</a> <br/><br/>
                    <div class="description">
                    <p className="para1">profit4money support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p>  <br/>
                    <p className="para1">The simplest way to convey your query with us is by filling the following form: Just fills your Name, contact number, Gmail id and the suggestion or query you have, click on the send message. As soon we receive your query, we will respond to you within 24 hours.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    

                    <br/> <br/> <br/>



                    </div>
                    </div>









                <div className="doubling stackable ui two column grid">

                    <div className="twelve wide column center aligned">
                        <div className="ui segment">
                    <form class="ui form">
                    <div class="three fields">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="first-name" placeholder="Name" />
                    </div>
                    <div class="field">
                        <label>E-mail Address</label>
                        <input type="email" name="last-name" placeholder="Enter Email Address" />
                    </div>
                    <div class="field">
                        <label>Mobile Number</label>
                        <input type="text" name="last-name" placeholder="Enter Mobile Number" />
                    </div>
                    </div>
                    <div class="field">
                        <label>Message</label>
                        <textarea placeholder="Enter Message"></textarea>
                    </div>
                    <button class="ui black button" type="submit"> Submit </button>
                    </form>
                    <br/><br/>
                    </div>
                    </div>


                    <div className="four wide column center aligned">
                        <div className="ui fluid segment">
                        <div className="item">
                            <i className="home large icon"></i>
                            <h3>Adress is not available</h3>
                        </div> <br/>
                        <div className="item">
                        <i className="phone large icon"></i> <h3>+91 7972867538</h3> <br/> <h3>+91 9959850106</h3>
                        </div> <br/><br/>
                        <div className="item">
                        <i className="mail large  icon"></i> <h3>dazzleAS518@gmail.com</h3> 
                        </div>
                        </div>
                    </div>
            
                </div>
            </div>


        <br/>
    
        <Footer />
        </div>
    );
}

export default Contactus;