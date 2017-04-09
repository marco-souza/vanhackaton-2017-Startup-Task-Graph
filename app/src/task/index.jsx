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
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import Comments from  "../comments";
import styles from  "./style.styl";
import { pluralize } from "../../commons/utils";

export default class Component extends React.Component {

    state = {
        showComments: false,
        myVote: 0
    }

    constructor(props) {
        super(props);
    }

    renderComments() {
        let result = [];
        for(let i of this.props.data.comments){
            result.push(
                <Comments data={i} key={i.id}/>
            )
        }
        return (
            <ListGroup>
                {result}
            </ListGroup>
        );
    }

    render() {
        return (
            <Panel bsStyle="info"
                header={
                    `Task ${this.props.data.id} - ${this.props.data.title}`
                }
            >
                <br/>
                {/* Body */}
                <p><small>{this.props.data.body}</small></p>

                {/* Show Comments */}
                <Pager>
                    <Pager.Item href="#" onClick={()=>{this.setState({showComments: !this.state.showComments})}}>
                        {
                            (!this.state.showComments) ?
                            `${pluralize(this.props.data.total_votes + this.state.myVote, "vote")}/${pluralize(this.props.data.comments.length, "comment")}` :
                            "Hide Comments"
                        }
                    </Pager.Item>

                </Pager>

                {/* Publish Date */}
                <div className={styles.publishDate}>
                    <spam>{this.props.data.publish_date}</spam>
                </div>

                {
                    // Comments
                    (this.state.showComments) ?
                    <div>
                        <br/>
                        <br/>
                        {this.renderComments()}
                    </div>
                    : ""
                }
            </Panel>
        );
    }
 }
