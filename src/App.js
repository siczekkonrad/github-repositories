import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Home from './routes/Home/Home.component';
import Repos from './routes/Repos/Repos.component';
import Repo from './routes/Repo/Repo.component'
import Informations from './routes/Informations/Informations.component'
import NotFound from './routes/NotFound/NotFound.component'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  state = {
    repositories: []
  }

  componentDidMount = () => {
    fetch(`https://api.github.com/users/siczekkonrad/repos`)
      .then(response => response.json())
      .then(res => {
        this.setState(prevState => ({
          repositories: [...prevState.repositories, ...res]
        }))
      })
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/info' component={Informations}/>
              <Route path='/repos' component={() => <Repos repositories={this.state.repositories}/>} />
              <Route path='/repo/:repo' component={Repo} />
              <Route path="*" component={NotFound} />
            </Switch>
          <Footer />
        </Router>
      </Fragment>
    )
  }
}
export default App;
