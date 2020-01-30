import React from "react";

const Footer = () => {
    return(
        <div>
               
      
            <div className="ui fluid container center aligned footer1"><br/><br/>
            <div class="doubling stackable ui form center aligned">
            <div class="three fields center aligned">
                <div class="field">
                <h4> Get news and insights from the Dazzle<sup>AS</sup> <br/>
                 world with our newsletters </h4>
                </div>
                <div class="field">
                <input type="text" placeholder="yourname@email.com"/>
                </div>
                <div class="field">
                <button className="ui basic red button"> Submit </button>
                </div>
            </div>
            </div><br/>
            </div> 

            <br/><br/>


           
            <div className="ui container">
            <div className="doubling stackable ui equal width Column grid">
                <div className="column">
                <h1> DAZZLE<sup>AS</sup> </h1>
                <div class="ui link list">
                <p>Dazzle is amongst the most favored and trusted companies offering online forex trading in india.</p>
                </div>
                </div>

                <div className="column">
                    <h3>LIGHTING</h3>
                    <div class="ui link list">
                    <a class="item">Home</a>
                    <a class="item">Shop By Category</a>
                    <a class="item">About us</a>
                    <a class="item">Contact us</a>
                    <a class="item">Help</a>
                    </div>
                </div>

                <div className="column">
                    <h3>SHOP BY CATEGORY </h3>
                    <div class="ui link list">
                    <a class="item">LED Bulb</a>
                    <a class="item">LED Tube Light</a>
                    <a class="item">LED Panel Light</a>
                    <a class="item">LED Flood Light</a>
                    </div>
                </div>

                <div className="column">
                <h3>HELPLINE </h3>
                <div class="ui link list">
                Shreyoshi Neman<a class="item">+91 7972867538</a>
                Ashish Chintalathadem<a class="item">+91 9959850106</a>
                </div>
                </div>

                <div className="column">
                <h3>CONNECT</h3>
                <div class="ui link list">
                <a ><i className="large circular black facebook icon"></i></a>
                <a ><i className="large circular black whatsapp icon"></i></a>
                <a ><i className="large circular black mail icon"></i></a>
                <a ><i className="large circular black twitter icon"></i></a>
                <a ><i className="large circular black linkedin icon"></i></a>
                <a ><i className="large circular black instagram icon"></i></a>
                </div>
                </div>

                <a href="#"><i className="big arrow alternate circle up outline icon icon1"></i></a>

            </div>

        </div>


        <br/><br/>
       
        
        

        <div className="doubling stackable ui fluid container footer1"> <br/>
           <div className="ui grid center aligned">
                <h4> @2020Dazzle_AS.CopyrightbyZAIDKHAN </h4>
           </div><br/>
        </div>




        </div>
    );
}

export default Footer;