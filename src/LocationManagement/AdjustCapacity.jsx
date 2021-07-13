import React from 'react';
import "../App.css";
import {Row,Col} from "react-bootstrap";

export default class AdjustCapacity extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            stopsPerDay:"",
            daysImpacted:{
                "Monday":"",
                "Tuesday":"",
                "Wednesday":"",
                "Thursday":"",
                "Friday":"",
                "Saturday":"",
                "Sunday":""
            },
            windows:{
                "Morning":{},
                "Afternoon":{},
                "AllDay":{}
            },
            enterClicked:false
        }
        this.handleDaysImpacted = this.handleDaysImpacted.bind(this);
        this.stopsPerDayEntered = this.stopsPerDayEntered.bind(this);
    }

    handleDaysImpacted(event,day){
        let daysImpacted = this.state.daysImpacted;
        daysImpacted[day]= event.target.value;
        this.setState({daysImpacted:daysImpacted})
    }

    stopsPerDayEntered(event){
        let code = event.keyCode || event.which;
        // 13 - enter
        if(code === 13 && event.target.value !== "") {
            let daysImpactedTemp = {};
            daysImpactedTemp["Monday"] = event.target.value;
            daysImpactedTemp["Tuesday"] = event.target.value;
            daysImpactedTemp["Wednesday"] = event.target.value;
            daysImpactedTemp["Thursday"] = event.target.value;
            daysImpactedTemp["Friday"] = event.target.value;
            daysImpactedTemp["Saturday"] = event.target.value;
            daysImpactedTemp["Sunday"] = event.target.value;
            this.setState({daysImpacted: daysImpactedTemp,enterClicked:true});
        }
    }
    // checkValues(){
    //     console.log("daysImpacted checkValues: ", this.state.daysImpacted)
    //     console.log("stopsPerDay checkValues: ", this.state.stopsPerDay)
    // }
    render() {
        return(
            <div>
                <div className={"adjustCapacityContainer"}>
                    Adjust Capacity
                    {/*<button onClick={this.checkValues.bind(this)}>*/}
                    {/*    check values*/}
                    {/*</button>*/}
                    <div className={"stopsPerDayContainer"}>
                        <div className={"adjustCapacityTitle"}>Stops Per Day </div>
                        <input className={"inputBox"} value={this.state.stopsPerDay} onChange={(event)=>{this.setState({stopsPerDay:event.target.value})}} onKeyPress={this.stopsPerDayEntered} type={"text"}/>
                    </div>

                    {
                        this.state.stopsPerDay !== "" && this.state.enterClicked === true &&
                        <div>
                            <div className={"daysImpactedContainer"}>
                                <div className={"DaysImpactedHeading adjustCapacityTitle"}>
                                    Days Impacted:
                                </div>
                                <Row className={"DaysImpactedRow"}>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={8}>
                                                <label className={"switch"}>
                                                <input type="checkbox" className={"toggle__input"} defaultChecked={true}/>
                                                    <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                          <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <span className={"day"}>Saturday</span>
                                            </Col>
                                            <Col xs={4}>
                                                <input className={"inputBox"} onChange={ (event => {this.handleDaysImpacted(event,"Saturday")}) } value={this.state.daysImpacted["Saturday"]} type={"text"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={8}>
                                                <label className={"switch"}>
                                                    <input type="checkbox" className={"toggle__input"} defaultChecked={true} />
                                                    <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <span className={"day"}>Wednesday</span>
                                            </Col>
                                            <Col xs={4}>
                                                <input className={"inputBox"} value={this.state.daysImpacted["Wednesday"]} onChange={ (event => {this.handleDaysImpacted(event,"Wednesday")}) } type={"text"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row >

                                <Row className={"DaysImpactedRow"}>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={8}>
                                                <label className={"switch"}>
                                                    <input type="checkbox" className={"toggle__input"} defaultChecked={true}/>
                                                    <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <span className={"day"}>Sunday</span>
                                            </Col>
                                            <Col xs={4}>
                                                <input className={"inputBox"} value={this.state.daysImpacted["Sunday"]} onChange={ (event => {this.handleDaysImpacted(event,"Sunday")}) } type={"text"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={8}>
                                                <label className={"switch"}>
                                                    <input type="checkbox" className={"toggle__input"} defaultChecked={true} />
                                                    <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <span className={"day"}>Thursday</span>
                                            </Col>
                                            <Col xs={4}>
                                                <input className={"inputBox"} value={this.state.daysImpacted["Thursday"]} onChange={ (event => {this.handleDaysImpacted(event,"Thursday")}) }  type={"text"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className={"DaysImpactedRow"}>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={8}>
                                                <label className={"switch"}>
                                                    <input type="checkbox" className={"toggle__input"} defaultChecked={true}/>
                                                    <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <span className={"day"}>Monday</span>
                                            </Col>
                                            <Col xs={4}>
                                                <input className={"inputBox"} value={this.state.daysImpacted["Monday"]} onChange={ (event => {this.handleDaysImpacted(event,"Monday")}) }  type={"text"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={8}>
                                                <label className={"switch"}>
                                                    <input type="checkbox" className={"toggle__input"} defaultChecked={true} />
                                                    <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <span className={"day"}>Friday</span>
                                            </Col>
                                            <Col xs={4}>
                                                <input className={"inputBox"} value={this.state.daysImpacted["Friday"]} onChange={ (event => {this.handleDaysImpacted(event,"Friday")}) }  type={"text"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className={"DaysImpactedRow"}>
                                    <Col xs={6}>
                                        <Row>
                                            <Col xs={8}>
                                                <label className={"switch"}>
                                                    <input type="checkbox" className={"toggle__input"} defaultChecked={true}/>
                                                    <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <span className={"day"}>Tuesday</span>
                                            </Col>
                                            <Col xs={4}>
                                                <input className={"inputBox"} value={this.state.daysImpacted["Tuesday"]} onChange={ (event => {this.handleDaysImpacted(event,"Tuesday")}) }  type={"text"}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className={"windowsContainer"}>
                                <Row>
                                    <Col xs={4}>
                                        <div className={"DaysImpactedHeading adjustCapacityTitle"}>
                                            Windows
                                        </div>
                                    </Col>
                                    <Col xs={1} className={"windowDay"}>
                                        Sat
                                    </Col>
                                    <Col xs={1} className={"windowDay"}>
                                        Sun
                                    </Col>
                                    <Col xs={1} className={"windowDay"}>
                                        Mon
                                    </Col>
                                    <Col xs={1} className={"windowDay"}>
                                        Tue
                                    </Col>
                                    <Col xs={1} className={"windowDay"}>
                                        Wed
                                    </Col>
                                    <Col xs={1} className={"windowDay"}>
                                        Thu
                                    </Col>
                                    <Col xs={1} className={"windowDay"}>
                                        Fri
                                    </Col>
                                </Row>
                                <Row className={"windowsRow"}>
                                    <Col xs={4}>
                                        <label className={"switch"}>
                                            <input type="checkbox" className={"toggle__input"} defaultChecked={true}/>
                                            <span className={"slider round"}>
                                                <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                      <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <span className={"window"}>Morning (8a-12p)</span>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                </Row>
                                <Row className={"windowsRow"}>
                                    <Col xs={4}>
                                        <label className={"switch"}>
                                            <input type="checkbox" className={"toggle__input"} defaultChecked={true}/>
                                            <span className={"slider round"}>
                                                <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                      <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <span className={"window"}>Afternoon (12p-4p)</span>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                </Row>
                                <Row className={"windowsRow"}>
                                    <Col xs={4}>
                                        <label className={"switch"}>
                                            <input type="checkbox" className={"toggle__input"} defaultChecked={true}/>
                                            <span className={"slider round"}>
                                                <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                      <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <span className={"window"}>All Day (8a-8p)</span>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                    <Col xs={1}>
                                        <input className={"inputBox"} type={"text"}/>
                                    </Col>
                                </Row>
                            </div>
                            <div className={"notesHeading adjustCapacityTitle"}>
                                Notes
                            </div>
                        </div>
                    }

                </div>
            </div>
        );
    }
};