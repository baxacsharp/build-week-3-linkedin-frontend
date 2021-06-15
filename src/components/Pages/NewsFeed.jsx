import React, { Component } from 'react';
import { ardisToken } from 'data/utilities';
import { Container, Row, Col } from 'react-bootstrap';
import CreatePost from 'components/news-feed-comp/CreatePost';
import PostList from 'components/news-feed-comp/PostList';
import Side from 'components/home/side-col/Side';

export default class NewsFeed extends Component {
  state = {
    isLoading: true,
    posts: [],
    userLogged: null,
  };

  getPosts = async () => {
    this.setState({ isLoading: true });
    try {
      const resp = await fetch(
        ' http://localhost:5000/posts/'



      )
      const posts = await resp.json();
      console.log(posts[0]);
      this.setState({ posts });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  getUser = async () => {
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/me`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWEyNzZmZDIyODAwMTUzZmRiYjEiLCJpYXQiOjE2MTc2OTczMTksImV4cCI6MTYxODkwNjkxOX0.bSzAALu5Ose7Gdie6QifObaHxeHflzff7nHtUlrYWfI',
        },
      }
    );
    const userLogged = await resp.json();
    this.setState({ userLogged });
  };

  componentDidMount = () => {
    this.getPosts();
    this.getUser();
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.posts !== this.state.posts) {

  //   }
  // };

  render() {
    // console.log(
    //   this.state.posts.filter(
    //     (post) => post.user && post.user.name.toLowerCase() === 'slavko'
    //   )
    // );
    // console.log(this.state.userLogged);
    return (
      <>
        <Container className='mt-4 px-4'>
          <Row>
            <Col md={8} className='mt-3'>
              <CreatePost
                userLogged={this.state.userLogged}
                getPosts={this.getPosts}
              />
              <PostList
                posts={this.state.posts}
                userLogged={this.state.userLogged}
                getPosts={this.getPosts}
                isLoading={this.state.isLoading}
              />
            </Col>
            <Side user={this.state.userLogged} />
          </Row>
        </Container>
      </>
    );
  }
}
