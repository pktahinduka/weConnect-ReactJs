import React, { Component } from 'react';

export class HomeCard extends Component{

    render(){
        return (
            <div className="card card-user">
                <div className="image" style={{ height:'300px' }}>
                    <img src={this.props.bgImage} alt="..."/>
                </div>
                <div className="content">
                    <div className="author">
                         <a href="#pablo">
                            <h4 className="title text-middle" style={{ marginLeft:'30px', marginRight:'30px'  }}>
                                <h4><b>{this.props.who}</b></h4>
                                <small>{this.props.shortDesc}</small> 
                                <br />
                                {this.props.name}
                                
                                <br /><br />
                                <small>{this.props.whatWeDo}</small> 
                                <br />
                                {this.props.ourRole}

                                <br /><br />
                                <small>{this.props.vision}</small> 
                                <br />
                                {this.props.ourVision}
                                
                            </h4>
                        </a>
                    </div>
                </div>
                <hr />

                <div className="text-center">
                    {this.props.socials}
                </div>
            </div>
        );
    }
}

export default HomeCard;
