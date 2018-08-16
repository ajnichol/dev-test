import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import Nav from './components/nav.js';
import Home from './components/home.js';
import Item1 from './components/item1.js';
import Item2 from './components/item2.js';
import Item3 from './components/item3.js';
import Footer from './components/footer.js';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Item-1' component={Item1} />
            <Route path='/Item-2' component={Item2} />
            <Route path='/Item-3' component={Item3} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
