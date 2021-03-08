import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap';
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Dan Tuppen',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: '',
        subTitle: '',
        text: '',
      },
      contacabout: {
        title: 'About me',
      },
      contact: {
        title: 'Contact',
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <NavBar className="border-bottom">
            <NavBar.Brand>Daniel Tuppen</NavBar.Brand>
          </NavBar>

        </Container>
      </Router>
    );
  }

}

export default App;
