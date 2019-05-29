import React, { Component } from 'react';
import { octokit } from '../services/Octokit'

export interface Props {
    userName: string
}

interface State {
    name: string;
    id: number;
    imageUrl: string;
    homeUrl: string;
    fullName: string;
}

class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "foo",
            id: 0,
            imageUrl: "",
            homeUrl: "",
            fullName: "",
        };

        this.fetchUser(this.props.userName);
    }

    async fetchUser(userName: string) {
        const response = await octokit.users.getByUsername({
            username: userName
        })

        this.setState({
            name: response.data.login,
            id: response.data.id,
            imageUrl: response.data.avatar_url,
            homeUrl: response.data.html_url,
            fullName: response.data.name
        })
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.imageUrl} width={100} />
                </div>
                <div>
                    <a href={this.state.homeUrl}>{this.state.name}</a>
                    <div>{this.state.fullName}</div>
                </div>
            </div>
        );
    }
}

export default Profile;