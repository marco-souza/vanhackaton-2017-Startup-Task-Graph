import React from "react";
// Darch Framework
import Container from "darch/lib/container";
// import Grid from "darch/lib/grid";
import Text from "darch/lib/text";
// Bootstrap ReactJS
import PageHeader from "react-bootstrap/lib/PageHeader";

import Project from "../project";
import { dataset } from "../../config";
import classNames from "classnames";
import styles from  "./style.styl";

export default class Component extends React.Component {

    state = {
        projects: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    // Rendering the list of projects
    renderProjects() {
        let result = [], c = 0;

        for (let item of dataset.projects) {
            result.push(
                <Project data={item} key={c} id={c}/>
            );
            c++;
        }
        return result;
    }

    render() {
        return (
            <div>
                <Container>
                    <PageHeader>List of Projects</PageHeader>
                    {this.renderProjects()}
                </Container>
            </div>
        );
    }
 }
