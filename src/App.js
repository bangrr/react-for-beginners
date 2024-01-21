import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ToDoList from "./routes/ToDoList";
import CoinTracker from "./routes/CoinTracker";
import MovieList from "./routes/MovieList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/coin"}>
          <CoinTracker />
        </Route>
        <Route path={"/movie/:id"}>
          <Detail />
        </Route>
        <Route path={"/movie"}>
          <MovieList />
        </Route>
        <Route path={"/todo"}>
          <ToDoList />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
