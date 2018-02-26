import React, { Component } from 'react';
import { Grid, Row, Col, Table} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Card from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import axios from 'axios';

class Businesses extends Component {

  constructor(){
    super();
    this.state = {
      businesses: []
    };
    
  };

  componentDidMount() {
    this.getBusinesses();
  };

  getBusinesses() {
    const jwtStr = window.localStorage.getItem('authToken');
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/api/businesses`,
         {
            'headers': {
            'Authorization': 'Bearer ' + jwtStr
            }
         })
    .then((res) => { this.setState({ businesses: res.data.data.businesses });
        })
    .catch((err) => {  });
  };

    render() {
        const table_head = ['Business Name', 'Business Category', 'Business Address']
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                    <div className="butn" style={{ marginLeft: '15px', marginBottom: '15px' }}>
                        <Link to='/addBusiness'><Button
                            bsStyle="info"
                            fill
                            type="submit"
                        >
                        Add Your Business
                        </Button>
                        </Link>

                        <Link to='/Businesses'><Button style={{ marginLeft: '58%' }}
                            bsStyle="info"
                            type="submit"
                        >
                        All Businesses
                        </Button>
                        </Link>

                        <Link to='/myBusinesses'><Button style={{ marginLeft: '15px' }}
                            bsStyle="info"
                            type="submit"
                        >
                        My Businesses
                        </Button>
                        </Link>
                        </div>

                        <Col md={12}>
                            <Card
                                plain
                                title="weConnect Businesses"
                                category="Check out the brands in all categories"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table hover>
                                        <thead>
                                        <tr>
                                        <th>{table_head[0]}</th>
                                        <th>{table_head[1]}</th>
                                        <th>{table_head[2]}</th>
                                        </tr>
                                        </thead>
                                        <tbody>                                    
                                          { this.state.businesses.map( //eslint-disable-next-line
                                             (busin) => { 
                                            if(busin.business_name !== '' && 
                                               busin.business_category !== '' &&
                                               busin.business_addr !== '') 
                                                { 

                                                    return (
                                                    
                                                  <tr key={busin.id}>

                                                      <td><Link to={`/Business/${busin.id}`}>{busin.business_name}</Link></td>
                                                      <td>{busin.business_category}</td>
                                                      <td>{busin.business_addr}</td>

                                                  </tr>
                                                     )}
                                                  })
                                              }
                                        </tbody>     
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Businesses;
