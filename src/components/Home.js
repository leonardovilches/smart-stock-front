import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container, Card } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
            <Card inverse style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}>
                <Button color="link"><Link to="/categorias">Categorias</Link></Button>        
            </Card> 
        </Container>
      </div>
    );
  }
}

export default Home;