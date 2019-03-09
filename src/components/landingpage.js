import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin:'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require('./Praveen.JPG')} className="praveen-img" />
                        <div className="banner-text">
                            <h1>Praveen Kannasani</h1>

                            <hr />

                            <p>Expertise in .Net With Azure</p>

                            <div className="social-links">

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>                    
                </Grid>
            </div>
        )
    }
}
export default Landing;