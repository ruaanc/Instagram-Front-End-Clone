import React, { Component } from 'react';
import api from '../services/api'

class New extends Component {

    state = {
        author: '', 
        place: '', 
        description: '',
        hashtags: '',
        image: ''
    }

    handleSubmit = async e => {

        const data = new FormData();

        data.append('author', this.state.author)
        data.append('place', this.state.place)
        data.append('description', this.state.description)
        data.append('hashtags', this.state.hashtags)
        data.append('image', this.state.image)

        await api.post('posts', data)
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <section id="register">
                <div className="container">
                    <div className="card bg-light">
                        <article className="card-body mx-auto">
                            <h4 className="card-title mt-3 text-center">Create Post</h4>
                            <p className="text-center">Make your post free</p>
                            <form onSubmit={ this.handleSubmit }>

                                {/*Name Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-user"><img src="https://img.icons8.com/metro/20/000000/email.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input 
                                    className="form-control" 
                                    placeholder="Nickname"
                                    name="author" 
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.author}>
                                    </input> 
                                </div>
                                
                                {/*Place Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/material/20/000000/point-of-interest.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input 
                                    className="form-control" 
                                    placeholder="Place"
                                    name="place" 
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.place}>
                                    </input> 
                                </div>

                                {/*Description Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/metro/20/000000/create-new.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input 
                                    className="form-control" 
                                    placeholder="Description"
                                    name="description" 
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.description}>
                                    </input> 
                                </div>

                                {/*Hashtags Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/metro/20/000000/hashtag-2.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input 
                                    className="form-control" 
                                    placeholder="Hashtags"
                                    name="hashtags" 
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.hashtags}>
                                    </input> 
                                </div>

                                {/*Image Link Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/metro/20/000000/link.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input 
                                    className="form-control" 
                                    placeholder="Image Link"
                                    name="image" 
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.image}>
                                    </input> 
                                </div>

                                {/* Button Post */}
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"><b>Post</b></button>
                                </div>
                                
                            </form>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}

export default New;