import {BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProctectedRoute} from './helpers/routes';
import { home, demo1, demo2 } from './pages';
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import FooterContainer from "./containers/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/demo1" exact component={demo1} />
        <Route path="/demo2" exact component={demo2} />
        <Route component={PageNotFound} />
    </Switch>
    {/* <IsUserRedirect user ={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
      <Signin />
    </IsUserRedirect>
    <IsUserRedirect user ={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
      <Signup />
    </IsUserRedirect>
    <ProctectedRoute user = {user} exact path={ROUTES.BROWSE}>
      <Browse />
    </ProctectedRoute>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
      <Home />
    </IsUserRedirect> */}
    <FooterContainer />
  </BrowserRouter>
  );
}

export default App;
