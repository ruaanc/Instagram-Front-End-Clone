import React, { Component } from 'react';

import './Feed.css';

class Feed extends Component {
   

    render() {
        return (
            <section id="post-list">
                                <article>
                                    <header>
                                        <div className="user-info">
                                            <span>Ruan Carlos</span>
                                            <span className="place">Condado</span>
                                        </div>
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt=""></img>  
                                    </header>
                                    <img src="http://www.cecon.pb.gov.br/media/filer_public_thumbnails/filer_public/39/81/3981b15e-536b-4024-bca7-d1ce972a28f7/img_5027.jpg__1680x1050_q85_crop_subsampling-2_upscale.jpg" alt=""></img>
                                    <footer>
                                            <div className="actions">
                                                <img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png" alt=""></img>
                                                <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=""></img>    
                                                <img src="https://img.icons8.com/material-rounded/24/000000/filled-sent.png" alt=""></img>
                                            </div>
                                            <strong>curtidas</strong>
                                            <p>
                                                
                                                <span>#sucesso</span>
                                            </p>
                                        </footer>
                                </article>
            </section>
        );
    }
}

export default Feed;