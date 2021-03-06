import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/app.component';
import RoomsListContainer from './rooms/containers/roomsList.container.jsx';
import FurnitureListContainer from './furniture/containers/furnitureList.container';
import PublicProjectListContainer from './public_view/containers/publicProjectList.container';
//import requireAuth from './signup_signin/containers/requireAuthentification.container';
import LandingPage from './landing_page/containers/landingPage.container';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="welcome" component={LandingPage}></Route>
    <Route path="room(/:name)" component={RoomsListContainer}></Route>
    <Route path="furniture(/:name)" component={FurnitureListContainer}></Route>
    <Route path="public" component={PublicProjectListContainer}></Route>
  </Route>
);
