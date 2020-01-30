import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";

const Aboutus = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/>
            <div className="ui container">
                <div className="doubling stackable ui one column grid">

                    <div className="column center aligned">
                    <div className="ui items">
                    <div className="item">
                    <div class="content"> 
                    <a class="ui massive black tag label">ABOUT US</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p>  <br/>
                    <p className="para1">The simplest way to convey your query with us is by filling the following form: Just fills your Name, contact number, Gmail id and the suggestion or query you have, click on the send message. As soon we receive your query, we will respond to you within 24 hours.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    

                    <br/> <br/> <br/>



                    </div>
                    </div>
                
            </div>


            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="column">
                        <div className="ui image">
                            <img src="s1.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="item">
                            <h1>Shreyoshi Neman</h1>
                            <p>Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p> <br/>
                            <p>Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p> <br/>
                            <p>Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p> <br/>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/>

            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="column">
                        <div className="ui image">
                            <img src="s3.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="item">
                            <h1>Ashish Chintalathadem</h1>
                            <p>Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p> <br/>
                            <p>Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p> <br/>
                            <p>Dazzle_AS support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p> <br/>
                        </div>
                    </div>
                </div>
            </div>



        <br/>
    
        <Footer />
        </div>
    );
}

export default Aboutus;