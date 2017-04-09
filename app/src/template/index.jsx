import React from "react";
// Darch Framework
import Container from "darch/lib/container";
// Bootstrap ReactJS
import PageHeader from "react-bootstrap/lib/PageHeader";

import Project from "../project";
import { dataset } from "../../config";
import "./style.styl";

export default class Component extends React.Component {


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
