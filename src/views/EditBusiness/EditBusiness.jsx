import React, { Component } from 'react';
import { Grid, Row,
        FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';
import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
    
import Button from 'elements/CustomButton/CustomButton.jsx';
import axios from 'axios';
import NotificationSystem from 'react-notification-system';
import {style} from "variables/Variables.jsx";


class EditBusiness extends Component {

  constructor() {
    super();
    this.state = {
      business: [],
      business_name: '',
      business_category: '',
      business_addr: '',
      business_desc:'',
      created_by:'',
      formData: {
         business_name: '',
         business_category: '',
         business_addr: '',
         business_desc:'',
         created_by:''
      },
      _notificationSystem: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBusinessFormSubmit = this.handleBusinessFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);

  };
  componentDidMount(){
      this.getBusiness();
      this.setState({_notificationSystem: this.refs.notificationSystem})
  }

  getBusiness() {
    const businessId = Number(this.props.location.pathname.slice(14));
    const jwtStr = window.localStorage.getItem('authToken');
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/api/businesses/${businessId}`,
         {
            'headers': {
            'Authorization': 'Bearer ' + jwtStr
            }
         })
    .then((res) => { this.setState({ business: res.data.data });
        })
    .catch((err) => {  });
  };

  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
  handleBusinessFormSubmit(event) {
    event.preventDefault();
    const user_name = window.localStorage.username;
    let data = {
      business_name: this.state.business_name,
      business_category: this.state.business_category,
      business_addr: this.state.business_addr,
      business_desc: this.state.business_desc,
      created_by: user_name,
    };

    const businessId = Number(this.props.location.pathname.slice(14));
    const jwtStr = window.localStorage.getItem('authToken');
    const url = `${process.env.REACT_APP_USERS_SERVICE_URL}/api/businesses/${businessId}`
    axios.put(url, data,
         {
            'headers': {
            'Authorization': 'Bearer ' + jwtStr
            }
         })
    .then((res) => {
      this.setState({
        formData: {business_name: '', business_category: '', business_addr: '', business_desc: '' },
        business_name: '',
        business_category: '',
        business_addr: '',
        business_desc:''
      });
      window.localStorage.setItem('message', res.data.status);
      this.props.history.push('/Businesses')
    })
    .catch((err) => { console.log(err); });

  };
  handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

    render() {

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Edit A Business"
                                category="A business can only be edited by its author."                                
                                content={
                                    <form onSubmit={(event) => this.handleBusinessFormSubmit(event)}>

                                        <FormInputs 
                                            ncols = {["col-md-6", "col-md-6"]}
                                            proprieties = {[
                                                {
                                                 label : "Business name",
                                                 type : "text",
                                                 name : "business_name",
                                                 bsClass : "form-control",
                                                 defaultValue : "Drarter",
                                                 placeholder : this.state.business.business_name,
                                                 value: this.state.formData.business_name,
                                                 onChange: this.handleFormChange
                                                },
                                                {
                                                    label : "Business Address",
                                                    type : "text",
                                                    name : "business_addr",
                                                    bsClass : "form-control",
                                                    placeholder : this.state.business.business_addr,
                                                    defaultValue : "Garden City Mall",
                                                    value: this.state.formData.business_addr,
                                                    onChange: this.handleFormChange
                                                }
                                            ]}
                                        />                                          

                                        <FormInputs 
                                            ncols = {["col-md-12"]}

                                            proprieties = {[
                                                {
                                                 label : "Business Category",
                                                 type : "text",
                                                 name : "business_category",
                                                 bsClass : "form-control",
                                                 placeholder : this.state.business.business_category,
                                                 value: this.state.formData.business_category,
                                                 onChange: this.handleFormChange
                                                }
                                            ]}
                                        /> 

                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>About The Business</ControlLabel>
                                                    <FormControl 
                                                    rows="5" 
                                                    componentClass="textarea" 
                                                    bsClass="form-control"
                                                    name="business_desc" 
                                                    placeholder={this.state.business.business_desc} 
                                                    defaultValue="Dealers in smart home technology."
                                                    value={this.state.formData.business_desc}
                                                    onChange={this.handleFormChange}                                            
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <NotificationSystem ref="notificationSystem" style={style}/>
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                        >
                                           Submit Business
                                        </Button>
                                        
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
                
            </div>
            
        );      
    }
}

export default EditBusiness;
