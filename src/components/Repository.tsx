import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './Repository.css';

interface Props {
    name: string
    description: string
    repoUrl: string
    homepage: string
    createdAt: string
    updatedAt: string
    pushedAt: string
    forksCount: number
    watchersCount: number
    language: string
    license: string
    defaultBranch: string
}

interface State {

}

export class Repository extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    getLastUpdate() {
        return this.props.updatedAt > this.props.pushedAt ?
            this.props.updatedAt : this.props.pushedAt;
    }

    getHomePage() {
        if (this.props.homepage != null && this.props.homepage.length > 0)
            return this.props.homepage;

        return this.props.repoUrl;
    }

    render() {
        return (
            <div>
                <a className="repository-name" href={this.getHomePage()} target="_blank">
                    {this.props.name}
                </a>
                <div>
                    {this.props.description}
                </div>
                <br/>
                <div>
                    <span><Icon>star_border</Icon> {this.props.watchersCount}</span>
                    <span> | </span>

                    <span><Icon>file_copy</Icon>  {this.props.forksCount}</span>
                </div>
                <div>
                    <Icon>access_time</Icon> {this.getLastUpdate()}
                </div>
            </div>
        );
    }
}
