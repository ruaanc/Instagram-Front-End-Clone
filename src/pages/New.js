import React, { Component } from 'react';

class New extends Component {
    render() {
        return (
            <section id="register">
                <div className="container">
                    <div className="card bg-light">
                        <article className="card-body mx-auto">
                            <h4 className="card-title mt-3 text-center">Create Post</h4>
                            <p className="text-center">Make your post free</p>
                            <form>

                                {/*Name Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-user"><img src="https://img.icons8.com/metro/20/000000/email.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="Nickname" type="text"></input> 
                                </div>
                                
                                {/*Place Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/material/20/000000/point-of-interest.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="Place" type="text"></input> 
                                </div>

                                {/*Description Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/metro/20/000000/create-new.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="Description" type="text"></input> 
                                </div>

                                {/*Hashtags Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/metro/20/000000/hashtag-2.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="Hashtags" type="text"></input> 
                                </div>

                                {/*Image Link Field*/}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fa fa-place"><img src="https://img.icons8.com/metro/20/000000/link.png" alt=""></img></i>
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="Image Link" type="text"></input> 
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