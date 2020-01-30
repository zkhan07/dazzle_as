import React from "react";

const Card = () => {
    return(
        <div>

            <br/><br/>
            <div className="ui fluid container center aligned">
                <div className="ui divider"></div>
                <div className="ui black stacked segment">
                    <h2>OUR BEST DEALS</h2>
                </div>
                <img src="s2.jpg" className="cardimg" />
                <a><button className="ui big black button">View All Deals</button></a>
                    <br/><br/>
            


                {/* slide part */}
                <h1 className="cardh1">DAZZLE<sup>AS</sup></h1>
                <p className="cardp1">Better Way To Light Up Your Home</p>
            </div>

        </div>
    );
}

export default Card;