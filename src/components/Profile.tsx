import React, { Component } from 'react';
import { octokit } from '../services/Octokit'
import './Profile.css'

interface Props {
    name: string;
    id: number;
    imageUrl: string;
    homeUrl: string;
    fullName: string;
}

interface State {

}

export class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="profile">
                <div>
                    <img src={this.props.imageUrl} width={100} alt="logo" />
                </div>
                <div>
                    <a href={this.props.homeUrl}>{this.props.name}</a>
                    <div>{this.props.fullName}</div>
                </div>
            </div>
        );
    }
}