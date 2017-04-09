import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Panel from "react-bootstrap/lib/Panel";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Badge from "react-bootstrap/lib/Badge";
import Label from "react-bootstrap/lib/Label";
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import styles from  "./style.styl";

export default class Component extends React.Component {

    state = {
        myVote: 0
    }

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <ListGroupItem key={this.props.data.id}
                className="text-left"
                header={`${this.props.data.userinfo.name} says:`}
            >
                {this.props.data.comment}
                &nbsp; 
                <Badge>
                    <small>{`${this.props.data.total_votes + this.state.myVote} votes`}</small>
                </Badge>
            </ListGroupItem>
        );
    }
 }
