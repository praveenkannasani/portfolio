import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid"> 
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background:'url(https://github.githubassets.com/images/modules/open_graph/github-mark.png) center / cover'  }}>Converter</CardTitle>
                    <CardText>Converts Document to base64 and many more</CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Download</Button>
                    </CardActions>
                    </Card>
                </div>
            )
        }
        if (this.state.activeTab === 1) {
            return (
                <div>
                    <h4>Working on this..</h4>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Wpf</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>

                    </Grid>
            </div>
        )
    }
}
export default Projects;