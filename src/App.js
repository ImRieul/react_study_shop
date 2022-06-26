import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container
      </Navbar>
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} />  */}
            <img src='http://wdmusic.co.kr/web/product/big/201907/c7139db6ecf2555caa02c9d232cdb086.jpg'></img>
            <h4>Name</h4>
            <p>Content</p>
          </div>
          <div className="col-md-4">
            <img src='http://wdmusic.co.kr/web/product/big/202112/618c424ead6aba54ee9fc2a885878f68.jpg'></img>
            <h4>Name</h4>
            <p>Content</p>
          </div>
          <div className="col-md-4">
            <img src='http://wdmusic.co.kr/web/product/medium/202204/efca95132f9c03a7b5bba3161455041a.jpg'></img>
            <h4>Name</h4>
            <p>Content</p>
          </div>
        </div>
      </div> 

    </div>
  );
}

export default App;
