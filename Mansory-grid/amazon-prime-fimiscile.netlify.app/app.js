// App.js
import React from 'react';
import './main.css';

function main() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="img/logo.svg" alt="logo" />
                </div>

                <div className="header-right">
                    <div className="language">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <span>EN <i className="fa fa-sort-desc" aria-hidden="true"></i></span>
                    </div>
                    <div>
                        <a href="#">Sign In</a>
                    </div>
                </div>
            </header>

            <div className="banner">
                <div className="banner-text">
                    <h2>Welcome to Amazon Prime Video</h2>
                    <p>Enjoy exclusive Amazon Originals as well as popular movies and TV shows for ₦2,300/month. Watch now, cancel anytime.</p>
                    <button>Prime Video Member? Sign In</button>
                    <span className="or">Or</span>
                    <button>Start your Free Trial</button>
                    <span className="membership">Membership renews at &#8358;2,300 a month</span>
                </div>
            </div>

            <div className="facility">
                <div className="items">
                    <div className="img">
                        <img src="img/1.png" alt="Watch anywhere" />
                    </div>
                    <h3>Watch anywhere</h3>
                    <p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.</p>
                </div>

                <div className="items">
                    <div className="img">
                        <img src="img/2.png" alt="X-Ray for more" />
                    </div>
                    <h3>X-Ray for more</h3>
                    <p>Use X-Ray for Movies and TV to identify actors and songs, explore actor bios, view trivia, and more.</p>
                </div>

                <div className="items">
                    <div className="img">
                        <img src="img/2.png" alt="Data saver" />
                    </div>
                    <h3>Data saver</h3>
                    <p>Control data usage while downloading and watching videos on select phones or tablets.</p>
                </div>
            </div>

            <footer>
                <div className="footer">
                    <div className="img">
                        <img src="img/footer_logo.png" alt="Footer Logo" />
                    </div>
                    <a href="#">Terms and Privacy Notice</a>
                    <a href="#">Send us feedback</a>
                    <a href="#">Help</a>
                    <small>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</small>
                </div>
            </footer>
        </div>
    );
}

export default App;
