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
                                        <i className="fa fa-user"></i>
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="Nickname" type="text"></input> 
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