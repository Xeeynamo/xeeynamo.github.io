import React, { Component } from 'react';
import { Repository } from './Repository';
import { octokit } from '../services/Octokit'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

interface Props {
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
            return (
                <GridListTile key={x.name} cols={1 || 1}>
                    <Repository
                        name={x.name}
                    />
                </GridListTile>
            )
        });

        this.setState({
            repositories: repositories
        });
    }

    render() {
        return (
            <div>
                <GridList cellHeight={160} cols={3}>
                    { this.state.repositories }
                </GridList>
            </div>
        );
    }
}