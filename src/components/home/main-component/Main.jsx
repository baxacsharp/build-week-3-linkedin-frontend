import React from 'react';
import { Col } from 'react-bootstrap';
import ProfileStrength from './dumb.components/ProfileStrength';
import Dashboard from './dumb.components/Dashboard';
import Activity from './dumb.components/Activity';
import Interests from './dumb.components/Interests';
import Skills from './dumb.components/Skills';
import Education from './experiences/Education';
import PersonalDetails from './personal-details/ProfileDetails';
// import Dashboard from 'components/home/main-component/Dashboard';

const Main = ({ user, fetchUser }) => {
  // console.log('exp in main', experiences);
  // console.log(user, 'in main');
  return (
    <Col md={8}>
      <PersonalDetails user={user} fetchUser={fetchUser} />
      <ProfileStrength />
      <Dashboard />
      <Education user={user} />
      <Activity />
      <Interests />
      <Skills />
    </Col>
  );
};

export default Main;
