import SinglePost from './SinglePost';
import { v4 as uuidv4 } from 'uuid';
import { Row, Spinner } from 'react-bootstrap';

const PostList = ({ posts, userLogged, getPosts, isLoading }) => {
  // console.log(userLogged);
  if (isLoading)
    return (
      <Row className='justify-content-center mt-3'>
        <Spinner animation='grow' />
      </Row>
    );
  return (
    <Row className='mt-3'>
      {posts
        .slice()
        .reverse()
        .slice(0, 20)
        .map((post) => (
          <SinglePost
            getPosts={getPosts}
            key={uuidv4()}
            post={post}
            userLogged={userLogged}
          />
        ))}
    </Row>
  );
};

export default PostList;
