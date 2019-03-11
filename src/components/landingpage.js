import React, { Component } from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require('./Praveen.jpg')} className="praveen-img" />
                        <div className="banner-text">
                            <h1>Praveen Kannasani</h1>
                            <p>Enthusiastic Programmer</p>
                            {/*<div className="social-links">
                                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i classname="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>
                            </div> */ }
                        </div>
                    </Cell>                    
                </Grid>             

            </div>
        )
    }
}
export default Landing;