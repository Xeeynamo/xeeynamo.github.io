import React, { Component, ChangeEvent } from 'react';
import { Repository } from './Repository';
import { octokit } from '../services/Octokit'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
    userName: string
}

interface State {
    repositoryCount: number;
    repositories: any;
    includeForks: boolean;
}

export class RepositoryList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            repositoryCount: 0,
            repositories: undefined,
            includeForks: false
        };

        this.handleIncludeForkChange = this.handleIncludeForkChange.bind(this);
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

    handleIncludeForkChange(
        event: ChangeEvent<HTMLInputElement>, checked: boolean) {
        this.setState({
            includeForks: checked
        });
    }

    getRepositories() {
        if (this.state.repositories == undefined)
            return [];

        let includeForks = this.state.includeForks;

        return this.state.repositories.filter(function(x : any) {
            return includeForks || !x.fork;
        });
    }

    getRepositoryCount() {
        return this.getRepositories().length;
    }

    renderRepositories() {
        if (this.state.repositories == undefined)
            return null;

        return this.getRepositories().map(function (x: any) {
            return (
                <GridListTile key={x.name} cols={1 || 1}>
                    <Repository
                        name={x.name}
                    />
                </GridListTile>
            )
        });
    }

    renderIncludeSwitch() {
        return (
            <FormControlLabel control={
                <Switch
                    checked={ this.state.includeForks }
                    onChange={ this.handleIncludeForkChange } />
            } label="Forks" />
        );
    }

    render() {
        return (
            <div>
                <FormControl>
                    { this.renderIncludeSwitch() }
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