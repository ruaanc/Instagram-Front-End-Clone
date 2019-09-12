import React, { Component } from 'react';
import api from '../services/api'

import './Feed.css';

class Feed extends Component {

    state = {
        feed: [],
    }
   
   async componentDidMount() {
        const response = await api.get('posts');

        this.setState({ feed: response.data.data.reverse() });
        
   } 

    render() {
        return (
            <section id="post-list">
               { this.state.feed.map(post => (
                   <article key={post.id}>
                   <header>
                       <div className="user-info">
                           <span>{ post.author }</span>
                           <span className="place">{ post.place }</span>
                       </div>
                       <img src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt=""></img>  
                   </header>
                   <img src={post.image} alt=""></img>
                   <footer>
                           <div className="actions">
                               <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png" alt=""></img>
                               <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=""></img>    
                               <img src="https://img.icons8.com/material-rounded/24/000000/filled-sent.png" alt=""></img>
                           </div>
                           <strong> { post.like } curtidas</strong>
                           <p>
                               { post.description }
                               <span>{ post.hashtags }</span>
                           </p>
                       </footer>
                    </article>
               ))}                 
            </section>
        );
    }
}

export default Feed;