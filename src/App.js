import React from 'react';
import logo from './levvel-logo.svg';
import './App.css';
import resources from './data.js';
import { Route, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'; 
import AuthorPage from './AuthorPage.js';
import { NavItem } from 'shards-react';

const {author1, author2, author3, author4} = resources;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            lol
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">

            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Display extends React.Component { 
   constructor(props) {
       super(props);
  
       this.state = {
           items: [],
           DataisLoaded: false
       };
   }
  
   async componentDidMount() {
     
        if (this.props.name==="Jessica"){
          var authorInfo= author1;
        }
        else if (this.props.name==="Alejandro"){
          var authorInfo=author2;
        }
        else if (this.props.name==="Eric"){
          var authorInfo=author3;
        }
        else{
          var authorInfo=author4;
        }

        await fetch("https://jsonplaceholder.typicode.com/users", {method: 'POST', body:authorInfo, headers: {'Content-type': 'application/json; charset=UTF-8'}})
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              items: [json],
              DataisLoaded: true
          })
       })
   }
   render() {
       const { DataisLoaded, items } = this.state;
  
       return (
          <Router>
            <div className = "App">
              <header className = "Author">
                  {items.map((item) => (
                    <React.Fragment id = {item.id}>
                      <img src = {item.imgs[0]} />
                      <p>
                        <nav><Link to ={'/'+item.name}>{item.name}</Link></nav>
                        <br/>
                        <article id="title">
                          {item.posts[0]}
                          <h6>
                          {item.desc[0]}
                          </h6>
                        </article>
                      </p>
                      <br/>
                      <Switch>
                        <Route path={'/'+item.name}>
                          <h2 id ='other'> Other posts by {item.name}</h2>
                          <AuthorPage posts = {item.posts.splice(1, 2)} />
                        </Route>
                      </Switch>
                    </React.Fragment>
                  ))}
              </header>
            </div>
          </Router>
   );
}
}

export default Display;