import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Pager from "react-bootstrap/lib/Pager";
import Badge from "react-bootstrap/lib/Badge";
import Task from  "../task";
import styles from  "./style.styl";
import { pluralize } from "../../commons/utils";

export default class Component extends React.Component {

    state = {
        showTasks: false
    }

    constructor(props) {
        super(props);
    }


    // Rendering a list of tasks
    renderTaskList(tasks) {
        let result = [];
        for (let item of tasks) {
            result.push(
                <Col xs={12} md={6} key={item.id}>
                    <Task data={item} />
                </Col>
            );
        }
        return result;
    }

    render() {

        return (
            <Jumbotron
                className={styles.project}
                key={this.props.data.title}
            >
                <h2>
                    {this.props.data.title}&nbsp;
                    <Badge>
                        {pluralize(this.props.data.total_votes, "vote")}
                    </Badge>
                </h2>
                <h6>{this.props.data.intro}</h6>

                <div className={styles.body}>
                    {this.props.data.body}
                </div>

                {
                    (this.state.showTasks)?
                    <Grid>
                        <Row >
                            {this.renderTaskList(this.props.data.tasks)}
                        </Row>
                    </Grid>: ""
                    }
                    <div>
                        <Pager>
                            {
                                (this.state.showTasks)?
                                <Pager.Item href="#" onClick={()=>this.setState({showTasks: false})}>
                                    Hide tasks
                                </Pager.Item> :
                                <Pager.Item href="#" onClick={()=>this.setState({showTasks: true})}>
                                    {pluralize(this.props.data.tasks.length, "task")}
                                </Pager.Item>

                            }
                        </Pager>
                    </div>
            </Jumbotron>
        );
    }
 }
