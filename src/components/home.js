import React from 'react';


class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="container contentBackground">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-xs-12 col-md-4">
              <div className="numberBoxes">
                <h1>1</h1>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="numberBoxes">
                <h1>2</h1>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="numberBoxes">
                <h1>3</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <div className="letterBoxes">
                <h1>A</h1>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="letterBoxes">
                <h1>B</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
