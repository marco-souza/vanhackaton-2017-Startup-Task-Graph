import React from "react";
import Badge from "react-bootstrap/lib/Badge";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";

export default class Component extends React.Component {

    state = {
        myVote: 0
    }

    constructor(props) {
        super(props);
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
