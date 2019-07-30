import React, { Component } from 'react';
import { octokit } from '../services/Octokit'
import { Profile } from './Profile';
import { RepositoryList } from './RepositoryList';

interface Props {
    userName: string
}

interface User {
    name: string
    id: number
    imageUrl: string
    homeUrl: string
    fullName: string
}

interface State {
    user?: User
}

export class MasterProfile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            user: undefined
        }

        this.fetchUser();
    }

    private async fetchUser() {
        const response = await octokit.users.getByUsername({
            username: this.props.userName
        })

        this.setState({
            user: {
                name: response.data.login,
                id: response.data.id,
                imageUrl: response.data.avatar_url,
                homeUrl: response.data.html_url,
                fullName: response.data.name
            }
        })

        return response.data
    }

    private renderUser() {
        if (this.state.user === undefined)
            return

        return (
            <Profile
                name={this.state.user.name}
                imageUrl={this.state.user.imageUrl}
                homeUrl={this.state.user.homeUrl}
                fullName={this.state.user.fullName}
            />
        )
    }

    render() {
        return (
            <div>
                {this.renderUser()}
                <RepositoryList userName={this.props.userName} />
            </div>
        );
    }
}