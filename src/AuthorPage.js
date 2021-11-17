import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Container, Row} from "shards-react";

const AuthorPage = (props) => {
    var posts = props.posts;
    const postList = posts.map((post)=>{
        return(
            <div>
            <Container className = "post">
                <h1 className="title">{post}</h1>
            </Container>
            <Row className="separator"> </Row>
            </div>
        )
    })
    return(postList)
}
 export default AuthorPage;