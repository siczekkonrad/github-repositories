import React, {Component} from 'react'
import Loader from '../../components/Loader/Loader.component';

class Repo extends Component {
    state = {
        repo : {},
        dataLoaded: false
    }

    
    componentDidMount = () => {
        const REPO_NAME = this.props.match.params.repo;
        const REPO_URL = `https://api.github.com/repos/siczekkonrad/${REPO_NAME}`;
    
        fetch(REPO_URL)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    repo : json,
                    dataLoaded : true
                })
            })
    }

    render() {
        const { repo, dataLoaded } = this.state;
        return (
          <>
            {!dataLoaded ? 
              <Loader />
             : 
              <>
                <header>{repo.name}</header>
                <div className="repo-details">
                  <span>Ratings : {repo.stargazers_count}</span>
                  <span>Subscribers : {repo.subscribers_count}</span>
                </div>
                <div className="owner-details">
                  <img
                    src={repo.owner.avatar_url}
                    alt={repo.owner.login}
                  />
                  <div>
                    <h1>{repo.owner.login}</h1>
                  </div>
                </div>
              </>
            }
          </>
        );
    }
}

export default Repo