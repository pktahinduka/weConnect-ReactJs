import {HomeCard} from 'components/HomeCard/HomeCard.jsx';
import React, { Component } from 'react';
import bgImage from "assets/img/homeBg.png";
import Button from 'elements/CustomButton/CustomButton.jsx';

import { Grid, Col } from 'react-bootstrap';

class Business extends Component {

    render() {

        return (
            <div className="content">
                <Grid fluid>
                    
                        <Col md={12}>
                            <HomeCard
                                bgImage={bgImage}
                                who="weConnect"
                                shortDesc="Who We Are"
                                name="weConnect"
                                whatWeDo="What We Do"
                                ourRole="weConnect is a platform that allows the world to collaborate and build business brands as a community. It boasts of a rich front end user experience that is built with ReactJS as well as a reliable and secure backend built with Python."
                                vision="Our Vision"
                                ourVision="Collaborating to create a generation of brands that last."
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />
                        </Col>

                </Grid>>
                
            </div>
            
        );
    }
}

export default Business;
