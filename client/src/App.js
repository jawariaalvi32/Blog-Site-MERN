import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import SingleBlog from "./components/blog/SingleBlog";
import BlogCard from "./components/blog/Blog";
import CreateBlog from "./components/blog/CreateBlog";
import SignUp from "./components/user/SignUp";
import Editable from "./components/MateralTable";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/posts/:id">
            <SingleBlog />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/view">
            <Editable />
          </Route>
          <Route path="/">
            <BlogCard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
