import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Form, FormControl, InputGroup, Button, Glyphicon, Image } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <header className="well">
                    <div className="container">
                        <h1>Hotel Management</h1>
                    </div>
                </header>
                <GeneralLinks />
                <main className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </main>
                <footer className="container">
                    <small>By Jerry Li, Isaac Chen, Eric Berner, Jared Praino</small>
                </footer>
            </div>
        );
    }
}


class GeneralLinks extends React.Component {
  render() {
    return (
      <nav>
        <ul className="list-unstyled">
          <li><Link to="/t1" activeClassName="activeLink">Hire</Link></li>
          <li><Link to="/t2" activeClassName="activeLink">Fire</Link></li>
          <li><Link to="/t3" activeClassName="activeLink">View1</Link></li>
          <li><Link to="/t4" activeClassName="activeLink">View2</Link></li>
          <li><Link to="/t5" activeClassName="activeLink">View3</Link></li>
        </ul>
      </nav>      
    );
  }
}

export default App;