import NavBar from './MyComponents/navbar/NavBar.js'
import Home from './MyComponents/home/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './MyComponents/create/Create.js';
import BlogDetails from './MyComponents/blogDetails/BlogDetails.js';
import NotFound from './MyComponents/notFound/NotFound.js';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
