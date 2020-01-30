import React from "react";

const Content3 = () => {
    return(
        <div>


            <br/>
            <div className="ui container center aligned">
                <div className="ui black stacked segment">
                    <h1>LATEST PRODUCTS FOR SALES</h1> 
                </div>
                <br/><br/>
                
                <div className="two column ui grid">

                <div className="four wide column">
                <div className="ui segment">
                    <div className="ui image">
                    <img src="s1.jpg" />
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui image">
                    <img src="s2.jpg" />
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui image">
                    <img src="s3.jpg" />
                    </div>
                </div>

                </div>


                <div className="twelve wide column">
                    <div className="ui segment">
                        <div className="ui image">
                            <img src="s4.jpg" />
                        </div>
                    </div>
                </div>

            </div>
            </div>


        </div>
    );
}

export default Content3;