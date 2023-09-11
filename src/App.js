import { Route, Switch } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import NewMeetup from "./Pages/NewMeetup";
import AllMeetupsPage from "./Pages/AllMeetUps";
import MainMenu from "./Components/Layout/MainMenu";

function App() {
  return (
    <div>
      <MainMenu />
      <Switch>
        <Route path='/newmeetup' exact>
          <NewMeetup/>
        </Route>
        <Route path='/allmeetups' exact>
          <AllMeetupsPage/>
        </Route>
        <Route path='/favoritemeetups' exact>
          <Favorites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
