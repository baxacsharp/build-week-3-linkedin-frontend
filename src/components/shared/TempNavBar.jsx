import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  NavDropdown,
  Container,
} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

class TempNavBar extends Component {
  render() {
    return (
      <Navbar bg='light' expand='lg' className='mb-3'>
        <Container>
          <Link to='/' className='navbar-brand pb-2 font-weight-bold'>
            Fakedin
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              {/* <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Me</Nav.Link> */}
              <Link
                className={`p-0 m-2 nav-link ${
                  this.props.location.pathname === '/' ? 'active' : ''
                }`}
                to='/'
              >
                Home
              </Link>
              <Link
                className={`p-0 m-2 nav-link ${
                  this.props.location.pathname === '/profile/me' ? 'active' : ''
                }`}
                to='/profile/me'
              >
                Me
              </Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(TempNavBar);
