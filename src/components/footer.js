import React from 'react';
import $ from 'jquery';


class Footer extends React.Component {

  componentDidMount(){
    if($(window).width() < 428){
      $('.footerSection').addClass('fixed-bottom');
    }
    else{
      $('.footerSection').removeClass('fixed-bottom');
    }
  }

  render() {
    return(
      <div>
        <div className="container footerSection">
          <div className="row">
            <div className="col-12">
              <footer>
                <p>&copy; 2018 - Lorem ipsum</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
