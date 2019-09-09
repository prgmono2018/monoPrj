import React, { Component } from 'react';
import '../css/common.css';


export default class Footer extends Component {
    constructor (props) {
        super(props);
              //this.createTable = this.createTable.bind(this);
    }
 
    render () {
     

        return (
            <footer id="footer">
                        <div className="holder">
                            <div className="footer-info">
                                <div className="site-rights">
                                    <strong className="logo"><a href="http://www.photonstorm.com/">Photon Storm HTML5 Game Developers</a></strong>
                                    <span className="copyright">© 2019 Photon Storm Ltd.</span>
                                    <p>All rights reserved.</p>
                                    <p><a href="https://phaser.io/community/privacy-policy" style={{color: 'white'}}>Privacy &amp; Cookie Policy</a></p>
                                </div>
                                <div className="footer-links">
                                    <p>
                                        <a href="https://phaser.io/download/stable">Get Phaser 3.18.1</a><br/>
                                    <a href="https://phaser.io/docs">API Docs</a><br/>
                                    <a href="https://phaser.io/community/donate">Donate to the Project</a></p>
                                </div>
                            </div>
                            <ul className="social-links">
                                <li><a href="https://phaser.discourse.group/">Forums</a></li>
                                <li className="twitter"><a href="https://twitter.com/phaser_">@phaser_</a></li>
                                <li className="github"><a href="https://github.com/photonstorm/phaser">GitHub</a></li>
                            </ul>
                        </div>
        </footer>





        );
    }
}
