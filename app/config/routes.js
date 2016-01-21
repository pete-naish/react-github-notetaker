var React = require('react');
var Main = require('../components/main');
var Home = require('../components/home');
var Profile = require('../components/profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile} />
        <IndexRoute component={Home} />
    </Route>
);