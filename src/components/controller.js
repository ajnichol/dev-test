import React from 'react';
import Tab1 from './tab1.js';
import Tab2 from './tab2.js';
import Tab3 from './tab3.js';

class Controller extends React.Component {

  render() {
    switch (this.props.controller) {
      case 1:
        return <Tab1 />;
      case 2:
        return <Tab2 />;
      case 3:
        return <Tab3 />;
    }
  }
}

export default Controller;
