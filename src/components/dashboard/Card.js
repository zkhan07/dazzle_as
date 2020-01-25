import React from "react";

const Card = () => {
    return(
        <div>

            <br/><br/>
            <div className="ui fluid container center aligned">
                <div className="ui divider"></div>
                <h2>OUR BEST DEALS</h2>
                <img src="s2.jpg" className="cardimg" />
                <a><button className="ui basic black button">View All Deals</button></a>
                <div className="ui divider"></div>

                {/* slide part */}
                <h1 className="cardh1">DAZZLE<sup>AS</sup> LIGHTING COMPANY</h1>
                <p className="cardp1">ZAID KHAN & SHREE ROY</p>
            </div>

        </div>
    );
}

export default Card;