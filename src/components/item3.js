import React from 'react';
import $ from 'jquery';
import Controller from './controller.js';


class Item3 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tabData: 1
    };

  }

  handleTab1() {
    this.setState({
      tabData: 1
    });
  }

  handleTab2() {
    this.setState({
      tabData: 2
    });
  }

  handleTab3() {
    this.setState({
      tabData: 3
    });
  }

  handleFocus(event){
    $(event.target).css("background-color", "#447d48");
  }

  handleBlur(event) {
    $(event.target).css("background-color", "#85c389");
  }

  componentDidMount() {

    $("#tab1Btn").focus();

    if($(window).width() < 428){
      $('.contentBackground').css('padding-top', '30px');
      $('.contentBox').css('margin-bottom', '100px');
    }
    else{
      $('.contentBackground').css('padding-top', '100px');
      $('.contentBox').css('margin-bottom', '30px');
    }
  }

  render() {
    return(
      <div>
        <div className="container contentBackground">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-xs-12 col-md-4">
              <div className="numberBoxes">
                <h1>10</h1>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="numberBoxes">
                <h1>11</h1>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="numberBoxes">
                <h1>12</h1>
              </div>
            </div>
          </div>
          <div className="row letterSection">
            <div className="col-xs-12 col-md-8">
              <div className="letterBoxes">
                <h1>G</h1>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="letterBoxes">
                <h1>H</h1>
              </div>
            </div>
          </div>
          <div className="row tabSection">
            <div className="col-12 text-center">
              <button id="tab1Btn" onClick={this.handleTab1.bind(this)} onFocus={this.handleFocus} onBlur={this.handleBlur}>Tab 1</button>
              <button onClick={this.handleTab2.bind(this)} onFocus={this.handleFocus} onBlur={this.handleBlur}>Tab 2</button>
              <button onClick={this.handleTab3.bind(this)} onFocus={this.handleFocus} onBlur={this.handleBlur}>Tab 3</button>
              <div className="contentBox">
                <Controller controller={this.state.tabData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item3;
