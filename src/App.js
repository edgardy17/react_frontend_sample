import React from 'react';
import logo from './levvel-logo.svg';
import './App.css';
import resources from './data.js';

const {author1, author2, author3, author4} = resources;

// const author1 = JSON.stringify(
//   {
//     "userId":1,
//     "title":"hello word"
//   }
// );


// const getData = async () => {
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'PATCH', body:author1,
//   headers:{'Content-type': 'application/json; charset=UTF-8'}});
//     if(response.ok){
//       const jsonResponse = await response.json();
//       console.log(jsonResponse);
//     }
//     throw new Error('Request failed!');
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// getData();


      //  var data = [];
      //  fetch("https://jsonplaceholder.typicode.com/posts")
      //      .then((res) => res.json())
      //      .then((json) => {
      //          data = json;
      //      })
      //  fetch("https://jsonplaceholder.typicode.com/users")
      //      .then((res) => res.json())
      //      .then((json) => {
      //         const result = [];
      //         Object.assign(result, data, json)
      //         this.setState({
      //             items: result,
      //             DataisLoaded: true
      //         });
      //      })

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
  
   // ComponentDidMount is used to
   // execute the code 
   async componentDidMount() {

      if(this.props.name==="Jessica"){
        await fetch("https://jsonplaceholder.typicode.com/users", {method: 'POST', body:author1, headers: {'Content-type': 'application/json; charset=UTF-8'}})
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              items: [json],
              DataisLoaded: true
          })
       })
      }

      else if(this.props.name==="Alejandro"){
        await fetch("https://jsonplaceholder.typicode.com/users", {method: 'POST', body:author2, headers: {'Content-type': 'application/json; charset=UTF-8'}})
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              items: [json],
              DataisLoaded: true
            })
          })
        }

      else if(this.props.name==="Eric"){
          await fetch("https://jsonplaceholder.typicode.com/users", {method: 'POST', body:author3, headers: {'Content-type': 'application/json; charset=UTF-8'}})
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              items: [json],
              DataisLoaded: true
          })
        })
      }

      else if(this.props.name==="Vanessa"){
          await fetch("https://jsonplaceholder.typicode.com/users", {method: 'POST', body:author4, headers: {'Content-type': 'application/json; charset=UTF-8'}})
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              items: [json],
              DataisLoaded: true
            })
          })
        };
   }
   render() {
       const { DataisLoaded, items } = this.state;
  
       return (
       <div className = "App">
         <header className = "Author">
            {items.map((item) => (
              <React.Fragment id = {item.id}>
                <img src = {item.imgs[0]} />
                <p>
                  <a href={"./" + item.name}>
                    {item.name}
                  </a>
                  <br/>
                  <article id="title">
                  {item.posts[0]}
                  </article>
                </p>
                <br/>
              </React.Fragment>
            ))}
        </header>
       </div>
   );
}
}

export default Display;