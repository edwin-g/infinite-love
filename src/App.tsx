// React
import React, { Component, Suspense, lazy } from "react";
// Router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Material UI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// Pages
const Home = lazy(() => import('./pages/Home'));
const Heart = lazy(() => import('./pages/Heart'));
const Flowers = lazy(() => import('./pages/Flowers'));
const Sentences = lazy(() => import('./pages/Sentences'));
const Playlists = lazy(() => import('./pages/Playlists'));
// Components
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Container>
            <Box my={2}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/heart" component={Heart}/>
                  <Route path="/flowers" component={Flowers}/>
                  <Route path="/sentences" component={Sentences}/>
                  <Route path="/playlists" component={Playlists}/>
                  <Route path="/" component={Home}/>
                </Switch>
              </Suspense>
            </Box>
          </Container>
        </main>
      </Router>
    );
  }
}

export default App;
