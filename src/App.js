import {Switch, Route, Redirect} from 'react-router-dom'
import RacingHome from './components/RacingHome'
import TrackPath from './components/TrackPath'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={RacingHome} />
    <Route exact path="/track-path" component={TrackPath} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
