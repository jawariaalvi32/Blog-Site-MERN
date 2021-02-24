import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/Add";
import Users from "./components/Users";
// import Header from "./components/Header";
import Header from "./components/header/Header";
import SingleUser from "./components/SingleUser";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
// import SinglePost from "./components/SinglePost";
import SingleBlog from "./components/blog/SingleBlog";
import BlogCard from "./components/blog/Blog";
import CreateBlog from "./components/blog/CreateBlog";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <CreateBlog/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Add />
          </Route>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* <Route path="/posts">
            <Posts />
          </Route> */}
          <Route path="/single-user/:id">
            <SingleUser />
          </Route>
          <Route path="/posts/:id">
            <SingleBlog />
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
