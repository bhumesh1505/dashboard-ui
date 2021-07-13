import React from 'react';
import "../App.css";
import {Row, Col, Button, Image} from "react-bootstrap";

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
                Morning:{
                    "Monday":"5",
                    "Tuesday":"5",
                    "Wednesday":"5",
                    "Thursday":"5",
                    "Friday":"5",
                    "Saturday":"5",
                    "Sunday":"5"
                },
                Afternoon:{
                    "Monday":"5",
                    "Tuesday":"5",
                    "Wednesday":"5",
                    "Thursday":"5",
                    "Friday":"5",
                    "Saturday":"5",
                    "Sunday":"5"
                },
                AllDay:{
                    "Monday":"10",
                    "Tuesday":"10",
                    "Wednesday":"10",
                    "Thursday":"10",
                    "Friday":"10",
                    "Saturday":"10",
                    "Sunday":"10"
                }
            },
            enterClicked:true,
            stepperIndex:0,
            notes:""
        }
        this.handleDaysImpacted = this.handleDaysImpacted.bind(this);
        this.stopsPerDayEntered = this.stopsPerDayEntered.bind(this);
        this.gotoNextStep=this.gotoNextStep.bind(this);
        this.gotoPreviousStep = this.gotoPreviousStep.bind(this);
        this.onChangeStopsPerDay = this.onChangeStopsPerDay.bind(this);
        this.handleWindowChange = this.handleWindowChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);

    }

    gotoNextStep(){
        let stepperIndexInc = this.state.stepperIndex + 1;
        this.setState({stepperIndex:stepperIndexInc});
    }
    gotoPreviousStep(){
        let stepperIndexDec = this.state.stepperIndex - 1;
        this.setState({stepperIndex:stepperIndexDec});
    }
    handleWindowChange(event,window,day){
        let num = event.target.value;
        if(isNaN(num) || num.length > 3){
            console.log(num + " is not a number. maximum allowed length is 3");
        }else{
            let windowsTemp = this.state.windows;
            windowsTemp[window][day]=event.target.value;
            this.setState({windows:windowsTemp});
            console.log(num + " is a number");
        }
    }
    handleDaysImpacted(event,day){
        let daysImpacted = this.state.daysImpacted;
        daysImpacted[day]= event.target.value;
        this.setState({daysImpacted:daysImpacted})
    }

    onChangeStopsPerDay(event){
            let num = event.target.value;
            if(isNaN(num) || num.length > 3){
                console.log(num + " is not a number. maximum allowed length is 3");
            }else{
                this.setState({stopsPerDay: event.target.value})
                console.log(num + " is a number");
            }
    }

    stopsPerDayEntered(event){
        let code = event.keyCode || event.which;
        // 13 - enter
        console.log("code ", code);
        if(code === 13 && event.target.value !== "" ){
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
    handleNotesChange(){
        let reason = "Holiday";
        let notes = "It's Holiday!"
        let notesTemp = reason.toUpperCase() + ". " + notes.toLocaleUpperCase();
        this.setState({notes:notesTemp});
    }


    componentDidMount() {
        this.handleNotesChange();
    }

    // checkValues(){
    //     console.log("daysImpacted checkValues: ", this.state.daysImpacted)
    //     console.log("stopsPerDay checkValues: ", this.state.stopsPerDay)
    // }
    render() {
        return(
            <div>
                {
                    this.state.stepperIndex === 1 &&
                    <div className={"adjustCapacityContainer"}>
                        Adjust Capacity

                        <div className={"subHeading"}>
                            December 6, 2020 - December 26, 2020 <br/>
                            Current Average Capacity 15 SPO
                        </div>

                        <div className={"stopsPerDayContainer"}>
                            <div className={"adjustCapacityTitle"}>Stops Per Day</div>
                            <input className={"inputBox"} value={this.state.stopsPerDay} onChange={this.onChangeStopsPerDay} onKeyPress={this.stopsPerDayEntered} type={"text"}/>
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
                                                        <input type="checkbox" className={"toggle__input"}
                                                               defaultChecked={true}/>
                                                        <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                          <path
                                                              d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                    </label>
                                                    <span className={"day"}>Saturday</span>
                                                </Col>
                                                <Col xs={4}>
                                                    <input className={"inputBox"} onChange={(event => {
                                                        this.handleDaysImpacted(event, "Saturday")
                                                    })} value={this.state.daysImpacted["Saturday"]} type={"text"}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={8}>
                                                    <label className={"switch"}>
                                                        <input type="checkbox" className={"toggle__input"}
                                                               defaultChecked={true}/>
                                                        <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                              <path
                                                                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                    </label>
                                                    <span className={"day"}>Wednesday</span>
                                                </Col>
                                                <Col xs={4}>
                                                    <input className={"inputBox"}
                                                           value={this.state.daysImpacted["Wednesday"]}
                                                           onChange={(event => {
                                                               this.handleDaysImpacted(event, "Wednesday")
                                                           })} type={"text"}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className={"DaysImpactedRow"}>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={8}>
                                                    <label className={"switch"}>
                                                        <input type="checkbox" className={"toggle__input"}
                                                               defaultChecked={true}/>
                                                        <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                              <path
                                                                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                    </label>
                                                    <span className={"day"}>Sunday</span>
                                                </Col>
                                                <Col xs={4}>
                                                    <input className={"inputBox"}
                                                           value={this.state.daysImpacted["Sunday"]}
                                                           onChange={(event => {
                                                               this.handleDaysImpacted(event, "Sunday")
                                                           })} type={"text"}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={8}>
                                                    <label className={"switch"}>
                                                        <input type="checkbox" className={"toggle__input"}
                                                               defaultChecked={true}/>
                                                        <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                              <path
                                                                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                    </label>
                                                    <span className={"day"}>Thursday</span>
                                                </Col>
                                                <Col xs={4}>
                                                    <input className={"inputBox"}
                                                           value={this.state.daysImpacted["Thursday"]}
                                                           onChange={(event => {
                                                               this.handleDaysImpacted(event, "Thursday")
                                                           })} type={"text"}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className={"DaysImpactedRow"}>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={8}>
                                                    <label className={"switch"}>
                                                        <input type="checkbox" className={"toggle__input"}
                                                               defaultChecked={true}/>
                                                        <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                              <path
                                                                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                    </label>
                                                    <span className={"day"}>Monday</span>
                                                </Col>
                                                <Col xs={4}>
                                                    <input className={"inputBox"}
                                                           value={this.state.daysImpacted["Monday"]}
                                                           onChange={(event => {
                                                               this.handleDaysImpacted(event, "Monday")
                                                           })} type={"text"}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={8}>
                                                    <label className={"switch"}>
                                                        <input type="checkbox" className={"toggle__input"}
                                                               defaultChecked={true}/>
                                                        <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                              <path
                                                                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                    </label>
                                                    <span className={"day"}>Friday</span>
                                                </Col>
                                                <Col xs={4}>
                                                    <input className={"inputBox"}
                                                           value={this.state.daysImpacted["Friday"]}
                                                           onChange={(event => {
                                                               this.handleDaysImpacted(event, "Friday")
                                                           })} type={"text"}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className={"DaysImpactedRow"}>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={8}>
                                                    <label className={"switch"}>
                                                        <input type="checkbox" className={"toggle__input"}
                                                               defaultChecked={true}/>
                                                        <span className={"slider round"}>
                                                        <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                             role="presentation" aria-hidden="true">
                                                              <path
                                                                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                    </label>
                                                    <span className={"day"}>Tuesday</span>
                                                </Col>
                                                <Col xs={4}>
                                                    <input className={"inputBox"}
                                                           value={this.state.daysImpacted["Tuesday"]}
                                                           onChange={(event => {
                                                               this.handleDaysImpacted(event, "Tuesday")
                                                           })} type={"text"}/>
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
                                                <input type="checkbox" className={"toggle__input"}
                                                       defaultChecked={true}/>
                                                <span className={"slider round"}>
                                                <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                     role="presentation" aria-hidden="true">
                                                      <path
                                                          d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                </svg>
                                            </span>
                                            </label>
                                            <span className={"window"}>Morning (8a-12p)</span>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Morning"]["Saturday"]} onChange={(event => { this.handleWindowChange(event,"Morning","Saturday") })} type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Morning"]["Sunday"]} onChange={(event => { this.handleWindowChange(event,"Morning","Sunday") })} type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Morning"]["Monday"]} onChange={(event => { this.handleWindowChange(event,"Morning","Monday") })} type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Morning"]["Tuesday"]} onChange={(event => { this.handleWindowChange(event,"Morning","Tuesday") })} type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Morning"]["Wednesday"]} onChange={(event => { this.handleWindowChange(event,"Morning","Wednesday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Morning"]["Thursday"]} onChange={(event => { this.handleWindowChange(event,"Morning","Thursday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Morning"]["Friday"]} onChange={(event => { this.handleWindowChange(event,"Morning","Friday") })}  type={"text"}/>
                                        </Col>
                                    </Row>
                                    <Row className={"windowsRow"}>
                                        <Col xs={4}>
                                            <label className={"switch"}>
                                                <input type="checkbox" className={"toggle__input"}
                                                       defaultChecked={true}/>
                                                <span className={"slider round"}>
                                                <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                     role="presentation" aria-hidden="true">
                                                      <path
                                                          d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                </svg>
                                            </span>
                                            </label>
                                            <span className={"window"}>Afternoon (12p-4p)</span>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Afternoon"]["Saturday"]} onChange={(event => { this.handleWindowChange(event,"Afternoon","Saturday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Afternoon"]["Sunday"]} onChange={(event => { this.handleWindowChange(event,"Afternoon","Sunday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Afternoon"]["Monday"]} onChange={(event => { this.handleWindowChange(event,"Afternoon","Monday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Afternoon"]["Tuesday"]} onChange={(event => { this.handleWindowChange(event,"Afternoon","Tuesday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Afternoon"]["Wednesday"]} onChange={(event => { this.handleWindowChange(event,"Afternoon","Wednesday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Afternoon"]["Thursday"]} onChange={(event => { this.handleWindowChange(event,"Afternoon","Thursday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["Afternoon"]["Friday"]} onChange={(event => { this.handleWindowChange(event,"Afternoon","Friday") })}  type={"text"}/>
                                        </Col>
                                    </Row>
                                    <Row className={"windowsRow"}>
                                        <Col xs={4}>
                                            <label className={"switch"}>
                                                <input type="checkbox" className={"toggle__input"}
                                                       defaultChecked={true}/>
                                                <span className={"slider round"}>
                                                <svg className="svg" viewBox="0 0 24 24" id="ghq-svg-check"
                                                     role="presentation" aria-hidden="true">
                                                      <path
                                                          d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                </svg>
                                            </span>
                                            </label>
                                            <span className={"window"}>All Day (8a-8p)</span>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["AllDay"]["Saturday"]} onChange={(event => { this.handleWindowChange(event,"AllDay","Saturday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["AllDay"]["Sunday"]} onChange={(event => { this.handleWindowChange(event,"AllDay","Sunday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["AllDay"]["Monday"]} onChange={(event => { this.handleWindowChange(event,"AllDay","Monday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["AllDay"]["Tuesday"]} onChange={(event => { this.handleWindowChange(event,"AllDay","Tuesday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["AllDay"]["Wednesday"]} onChange={(event => { this.handleWindowChange(event,"AllDay","Wednesday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["AllDay"]["Thursday"]} onChange={(event => { this.handleWindowChange(event,"AllDay","Thursday") })}  type={"text"}/>
                                        </Col>
                                        <Col xs={1}>
                                            <input className={"inputBox"} value={this.state.windows["AllDay"]["Friday"]} onChange={(event => { this.handleWindowChange(event,"AllDay","Friday") })}  type={"text"}/>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={"notesContainer"}>
                                    <div className={"notesHeading adjustCapacityTitle"}>
                                        Notes
                                    </div>
                                    <div>
                                        <Row>
                                            <Col className={"profileInfo"}>
                                                <Image src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEUKME7///+El6bw8vQZPVlHZHpmfpHCy9Ojsbzg5ekpSmTR2N44V29XcYayvsd2i5yTpLFbvRYnAAAJcklEQVR4nO2d17arOgxFs+kkofz/154Qmg0uKsuQccddT/vhnOCJLclFMo+//4gedzcApf9B4srrusk+GsqPpj+ypq7zVE9LAdLWWVU+Hx69y2FMwAMGyfusLHwIpooyw9IAQfK+8naDp3OGHvZ0FMhrfPMgVnVjC2kABOQ1MLvi0DEIFj1ILu0LU2WjNRgtSF3pKb4qqtd9IHmjGlJHlc09IHlGcrQcPeUjTAySAGNSkQlRhCCJMGaUC0HSYUx6SmxFAtJDTdylsr4ApC1TY0yquKbCBkk7qnYVzPHFBHkBojhVJWviwgPJrsP4qBgTgbQXdsesjm4pDJDmIuswVZDdFx0ENTtkihoeqSDXD6tVxOFFBHndMKxWvUnzexpIcx/Gg2goJJDhVo6PCMGRAnKTmZuKm3wcJO/upphUqUHy29yVrRhJDORXOKIkEZDf4YiRhEF+iSNCEgb5KY4wSRDkB/yurUEG8nMcocgYABnvbrVL3nMIP0h/d5udKnwzSC/InfPdkJ6eWb0PJE++dyVVyQP5iQmWW27X5QG5druEKafBu0Hqu9saVOHa8HKC/K6BzHKZiRMEZCDF0Nd1/ZfXI/fcOibHOssFgokg9uFA20BhztHEAZIjIohrD/o1wljeFBDEwBo8YUt5Ir/rNLjOIACPFdy/AbEcPdcJBOCxytjeYAM4Kzp6rhOIPhRGNzwmFP3rOoTFI0irtnQKx6fj1Zt+h9njEUS9mKJxfFRrX5lt7wcQtaWTOfTHeIXVJQcQrRW+OYex2j0a66XZINoO8a7fPH2iHF2mC7ZBtB3Czb5QvjizSx7A3308mRzqAwujSywQbYfwc0iU8zqjS0yQ6ztEHX9332KCaGNIYB/Qq1z3yN0oDZBWyeFYJBCkm2sXLhDtpKFwNDMu5TnrZpYGiHbK4Nlwikg5DrYV1g6iPoJmzE5MKd/fOp53EPUaQZaLqH3u+vo2ELWp3wSyWuYGoj9EEIJoV3L9AUS/ZLsJpLNBXmqOu0CW6P5A/dx9IL0FAji/FYKot9EqE0Tvs6QBUe/2CxMEkZAlBNGPhdoAQWyTSmbxUwvUygwQyMmniAPgLt87CODXHuftWJIQgzrfQDC5AfwSgz9MmmG/gWCOqDgZ4JsQeTvZBoJJDhAFEsSDyxUEEUUekk0UEMhjBcEcGsoWVpBU3NcCgkkPkJWrKbdRZvULCMTWhYEdMrayBQRyqHcnSLmAIH7LcWJ8Hch7BsHEdWFpJsZjziCgFBpZ9TPm4e0XBJTTJKt9xjy8RoLI4gimPLP5goCSgWTrEcyzsy8IqmZVMo0H5bJiQToBCOjZ5RcElhjLN3dU7uQMAvoxwQkJZKI1CQzCthJYEigahHuDDi4rFwzCPQ7F1fiDQZgTR5iJwEGYRgIsiECD8BwwMAEfDcIaW8CRBQdhjS1kJQEchDEFhiRKr4KDFPS9FGQNVwEHoW83QjsEHdkfnuIOl6C1NjMItiaCaCWgbdpFJXQ9soh2uoB9aJcCxFdgZwlcrTmvENGlrITBBdpK25Qhd1F2RScq8CKu/gsCL8qN5THjy+Rr5E6joYgPxpdl518QrCf8Kpgjn6C8HLkbb+vt7ZM8wdVvy258khsRfHaS5DalDnlidZT7Erk+SXV5Bj1D3LS29XyhVJuoKHs9Q8S6reK11oUc7vPcr9uswP3SLiDINefXOF5rwCuGzVT6zVkVPfh2wWmHcz4wAwba2cgN1/Tsvleu7//i69CgVyt1GwjOs2+XK3rtbl151Tg3vOeioG40Mz2V+6pQ4xbJHOZj6g0EMxk93tV7fuedvVZpQSPhbwNBGInrymGrwNh1GXmL8F+lAaJ+NU/fzcmvJqvKj7177+1v1GY/GiBKI1Fdy/2XK6upXwaIJpI8B/399W0mH9zzafKaeCF9J0WF+jyCuFusTGzZKhFH8dVLZql2brxgcdVBKb7KG/7UZTmB3XJ6uL/QYT5ScRI74FcHEJ7feopyfGkaeaGlPoCw/BbjZmSBWIvINQNmTxdjWJqwUI8sztR4nYPuIPSTSUnOCZOE3ierqRoJfNSQxDjLEYs8i91eqgFCDSWiFHiuqAN9CwEGCPEISVjvwhS7Mfx6dtX8kC5aqvneGBOEFN2v6RBiYwr3DQOkLhEW6fHFbIwFQnkLiWYmZxE220z/aedPx99C+hiyKR4OzNFhg8S75CJTnxQ1dyugHTLaY10iu9dBpmhQtMz1ABLrkgtHVnRsPUO3OcU25i8cWdGxZbflCBKJqBdMs3aF/dYhNexU9RFcYEmLXYQKghyWdufyldBSU3KpjkKhZclxTXQGCTkL/HZDUIH5+Gkt4SgoCtj7pSYSNJLTK3VVRnmXZxebSMBIzmHABeIdXBebiN9eHYtUZ62ab3BdGkUm+SKJw1bdRXeewaX7qqdAnljg2sVxg3guAk3baofcg9yZ2eZpnHNvSFrEqhB9YPjesmt0pt6Xc8hl7W5L9Q4Xx09ctsrd5VhWeF6nF8SRrZdw49qns//0xTK/AZ8vGr3caTliuzeFNeCJTgafpKlhHd2WP1sy1LqDF798gjKJPLqDr9keoTd43+NyNzC1CI8Xy2lcPtOaVBI5IiAWyQ3e125AcKoXs2Djhy5eVc3KiBxREIPkhjBiLhIjU++4T91IbggjRiCJLSEIwWGddkEaxlVN5KCArPHk8mXVpHk8FHH7JL3n5dPA7C90q7XkeFJucacNmGXeRfswLE71HA79efaGiCN/Ofjmfmtcp8X10tIsqCacV5xfRWjNUiXGYbovWgyFYHcQLak15K9oM5zqmgaeKsHJetbSHfSPzXOiw/rxE9YH4CXaUpsZ0ztemFurP95Jpyvrd29YTpIZr7cEJHqfc7Wl0PFm2+yJR70udaokKFtGPTdm8WdQe24+HmVLlueboWQquBcYYVH2vEzfh8kCks1p90eWsLCyZ8qK7E86Oe+3XYFnBuiWdth20UqZR5SvMoyPg3WNauJipi0LMTQgVq5xUUlZcrPsopPHJ926z8pm7xyFLrH/PxpHSoXKdWgXsLn1scZn1ZDd/2vszN3lt254qkE+qu3yoqLM+ghN3Qz2qcVzUC/ZMFsK/alU6l0OWV/bQz6v6yYbyuN5BaZ4A7Y30vs/PPksS2+qzlvfF7OQmzzcL7W+xa7OIfRuVdtn/tdvdFLnL4OTKcm2W16PmWc4FWWXNSlWM2n3D+uPxuyrcfo74aP+Ac30a82+oLmfAAAAAElFTkSuQmCC"}
                                                     alt="Profile" className={"profileImage"} roundedCircle /> Tina Fray
                                            </Col>
                                            <Col className={"notesTimestamp"}>
                                                Sep 16, 9:00 am
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={"notes"}>
                                        {this.state.notes}
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                }
                {
                    this.state.stepperIndex > 0 &&
                    <Button onClick={this.gotoPreviousStep}>Back</Button>
                }
                <Button onClick={this.gotoNextStep}>Next</Button>
            </div>
        );
    }
};