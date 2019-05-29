import React, { Component } from 'react';
import { Repository } from './Repository';
import { octokit } from '../services/Octokit'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';

interface Props {
    userName: string
}

interface State {
    repositoryCount: number;
    repositories: any;
}

export class RepositoryList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            repositoryCount: 0,
            repositories: undefined
        };

        this.fetchRepositories(this.props.userName);
    }

    async fetchRepositories(userName: string) {
        const response = await octokit.repos.listForUser({
            username: userName
        });

        this.setState({
            repositoryCount: response.data.length,
            repositories: response.data
        });
    }

    getRepositoryCount() {
        if (this.state.repositories == undefined)
            return 0;

        return this.state.repositories.length;
    }

    renderRepositories() {
        if (this.state.repositories == undefined)
            return null;

        return this.state.repositories.map(function (x: any) {
            return (
                <GridListTile key={x.name} cols={1 || 1}>
                    <Repository
                        name={x.name}
                    />
                </GridListTile>
            )
        });
    }

    render() {
        return (
            <div>
                <FormControl>

                </FormControl>
                <div>
                    Repository count: { this.getRepositoryCount() }
                </div>
                <GridList cellHeight={160} cols={3}>
                    { this.renderRepositories() }
                </GridList>
            </div>
        );
    }
}