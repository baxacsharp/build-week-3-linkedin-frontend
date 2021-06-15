import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Main from '../home/main-component/Main';
import Side from '../home/side-col/Side';
// import { ardisToken } from 'data/utilities';

export default class Home extends Component {
  state = {
    user: {},
    isLoading: true,
    // userLogged: null,
    // experiences: [],
  };

  fetchUser = async (personToFetch) => {
    this.setState({ isLoading: true });
    const resp = await fetch(
      `http://localhost:5000/profile/${personToFetch}`

    );

    const data = await resp.json();
    this.setState({ user: data });
    this.setState({ isLoading: false });
  };

  componentDidMount = () => {
    this.fetchUser(this.props.match.params.id);
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (prevProp.match.params !== this.props.match.params) {
      this.fetchUser(this.props.match.params.id);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Main fetchUser={this.fetchUser} user={this.state.user} />
          <Side user={this.state.user} />
        </Row>
      </Container>
    );
  }
}
