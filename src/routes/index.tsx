import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';

import Modules from '../pages/Modules';
import Lessons from '../pages/Lessons';
import VideoPlayer from '../pages/VideoPlayer';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/modules" component={Modules} isPrivate />
      <Route path="/lessons" component={Lessons} isPrivate />
      <Route path="/player" component={VideoPlayer} isPrivate />
    </Switch>
  );
};

export default Routes;
