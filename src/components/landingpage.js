import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


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
                           
                        </div>
                    </Cell>                    
                </Grid>
                <Grid className="landing-grid2">
                    <Cell col={3}></Cell>
                    <Cell col={6} align="center">
                        <div>
                      
                            I'm Praveen Kannasani. I work as Full Stack .Net Developer using Azure. My passion for
                            programming and problem solving made me to choose this field. When not at work I like to cook new food recipes, 
                            play games, watch movies. 

                         

                            <hr/>
                             <div className="social-links" align="center">
                                <a href="https://www.linkedin.com/in/praveen-kannasani/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                            </div>
                           
                        </div>
                       
                    </Cell>
                    <Cell col={3}>                        
                    </Cell>
                </Grid> 
               
            </div>
        )
    }
}
export default Landing;