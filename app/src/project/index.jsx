import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Panel from "react-bootstrap/lib/Panel";
import Pager from "react-bootstrap/lib/Pager";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Badge from "react-bootstrap/lib/Badge";
import Label from "react-bootstrap/lib/Label";
import Task from  "../task";
import styles from  "./style.styl";
import { pluralize } from "../utils";
import {LoggerFactory,Redux} from "darch/lib/utils";

export default class Component extends React.Component {

    state = {
        showTasks: false,
        myVote: 0,
        allVotes: 0
    }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await Redux.shared.store.subscribe(this.getAllVotes);
        await this.setReduxState();
    }

    async getAllVotes(){
        console.log(Redux.shared.store.getState());
        await this.setState({
            allVotes: Redux.shared.store.getState().votes[this.props.id]
        });
    }

    async setReduxState() {
        // Set redux state
        await Redux.shared.store.dispatch({
            type: 'SET-VOTES',
            data: {
                key: this.props.id,
                value: this.props.data.total_votes + this.state.myVote
            }
        });
    }


    // Rendering a list of tasks
    renderTaskList(tasks) {
        let result = [], votes = [];
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
                    <Badge className={styles.clicable} onClick={()=>
                        this.setVotes()
                    }>
                        {pluralize(this.state.allVotes, "vote")}
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
