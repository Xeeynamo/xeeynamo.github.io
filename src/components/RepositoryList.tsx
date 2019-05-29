import React, { Component } from 'react';
import { Repository } from './Repository';
import { octokit } from '../services/Octokit'

export interface Props {
    userName: string
}

interface State {
    repositories: JSX.Element[] | undefined;
}

export class RepositoryList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            repositories: undefined
        };

        this.fetchRepositories(this.props.userName);
    }

    async fetchRepositories(userName: string) {
        const response = await octokit.repos.listForUser({
            username: userName
        });

        let repositories = response.data.map(function (x: any) {
            return (<Repository
                name={x.name}
                />)
        });

        this.setState({
            repositories: repositories
        });
    }

    render() {
        return (
            <div>
                { this.state.repositories }
            </div>
        );
    }
}