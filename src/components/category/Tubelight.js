import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";

const Tubelight = () => {
    return(
        <div>

            <Navbar />

            <br/><br/><br/><br/>

            <div className="ui container center aligned">
                <div className="ui black segment">
                    <h2>LED TUBE LIGHTT'S</h2>
                </div>
                <br/>
                <div className="doubling ui four column grid">
                    <div className="column">
                        <div className="ui segment">
                            <div className="ui image">
                                <img src="s2.jpg" />
                            </div>
                            <p>
                                <b>Type  : LED TUBE LIGHT</b> <br/>
                                <b>Model : Z1234 </b><br/>
                                <b>Prize : $12</b>
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div className="ui image">
                                <img src="s2.jpg" />
                            </div>
                            <p>
                                <b>Type  : LED TUBE LIGHT</b> <br/>
                                <b>Model : Z1234 </b><br/>
                                <b>Prize : $12</b>
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div className="ui image">
                                <img src="s2.jpg" />
                            </div>
                            <p>
                                <b>Type  : LED TUBE LIGHT</b> <br/>
                                <b>Model : Z1234 </b><br/>
                                <b>Prize : $12</b>
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div className="ui image">
                                <img src="s2.jpg" />
                            </div>
                                <p>
                                    <b>Type  : LED TUBE LIGHT</b> <br/>
                                    <b>Model : Z1234 </b><br/>
                                    <b>Prize : $12</b>
                                </p>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/><br/><br/>


            <Footer />
        </div>
    );
}

export default Tubelight;