import React from "react";

const Content1 = () => {
    return(
        <div>

           
      
            <br/><br/><br/><br/>


            <div className="ui container center aligned">
                <div className="ui black stacked segment">
                    <h1>OUR PRODUCTS</h1>
                </div>

                 <br/>
                <div className="doubling stackable ui two column grid">
                    <div className="column center aligned">
                       <div className="ui segment">
                            <div className="ui image">
                                <img src="s3.jpg" />
                            </div>
                            <h3>FLOOR LAMPS</h3>
                           <a href="#"><button className="ui black button">View Details</button></a> 
                        </div>
                    </div>
                    <div className="column center aligned">
                        <div className="ui segment">
                            <div className="ui image">
                                <img src="s1.jpg" />
                            </div>
                            <h3>WALL LIGHTS</h3>
                            <a href="#"><button className="ui black button">View Details</button></a>
                        </div>
                    </div>

                </div>
            </div>

            <br/><br/><br/>

            {/* <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="column center aligned">
                       <div className="ui segment">
                            <div className="ui image">
                                <img src="brexit.jpg" />
                            </div>
                            <h1>ADIDAS OUTLET</h1>
                            <button className="ui yellow button">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="column center aligned">
                        <div className="ui segment">
                            <div className="ui image">
                                <img src="alone.jpg" />
                            </div>
                            <h1>ADIDAS FOOTWEAR</h1>
                            <button className="ui yellow button">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div> */}


            <br/><br/><br/>

            <div className="ui container center aligned">
                <div className="ui black stacked segment">
                    <h1>NEW ARRIVALS</h1>
                </div>
                 <br/>
                <div className="doubling stackable ui four column grid">
                    <div className="column center aligned">
                       <div className="ui segment">
                            <div className="ui image">
                                <img src="s3.jpg" />
                            </div>
                            <h4>Table Lamp</h4>
                        </div>
                    </div>
                    <div className="column center aligned">
                       <div className="ui segment">
                            <div className="ui image">
                                <img src="s1.jpg" />
                            </div>
                            <h4>Chandeliers</h4>
                        </div>
                    </div>
                    <div className="column center aligned">
                       <div className="ui segment">
                            <div className="ui image">
                                <img src="s3.jpg" />
                            </div>
                            <h4>Wall sconces</h4>
                        </div>
                    </div>
                    <div className="column center aligned">
                       <div className="ui segment">
                            <div className="ui image">
                                <img src="s1.jpg" />
                            </div>
                            <h4>Hanging Lights</h4>
                        </div>
                    </div>
                </div>
            </div>



            <br/><br/>
            <div className="ui divider"></div>
            <br/><br/>





        </div>
    );
}

export default Content1;