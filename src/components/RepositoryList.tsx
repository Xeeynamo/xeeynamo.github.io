import React, { Component, ChangeEvent } from 'react';
import { Repository } from './Repository';
import { octokit } from '../services/Octokit'
import { Select, MenuItem, Hidden, Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import config from '../config.json'
import './RepositoryList.css'
import repositories from '../repositories.json'

interface Props {
    userName: string
}

interface State {
    repositoryCount: number;
    repositories: any;
    includeForks: boolean;
    sortOption: string;
    orderOption: string;
}

export class RepositoryList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            repositoryCount: 0,
            repositories: undefined,
            includeForks: config.includeForks,
            sortOption: config.sortOption,
            orderOption: config.orderOption
        };

        this.handleIncludeForkChange = this.handleIncludeForkChange.bind(this);
        this.handleSortOptionChange = this.handleSortOptionChange.bind(this);
        this.handleOrderOptionChange = this.handleOrderOptionChange.bind(this);
        this.fetchRepositories(this.props.userName);
    }

    private async fetchRepositories(userName: string) {
        const response = await octokit.repos.listForUser({
            username: userName,
            per_page: 100
        });

        this.setState({
            repositoryCount: response.data.length,
            repositories: response.data
        });
    }

    private handleIncludeForkChange(event: ChangeEvent<HTMLInputElement>, checked: boolean) {
        this.setState({
            includeForks: checked
        });
    }

    private handleSortOptionChange(event: ChangeEvent<{ name?: string; value: unknown }>) {
        this.setState({
            sortOption: event.target.value as string
        });
    }

    private handleOrderOptionChange(event: ChangeEvent<{ name?: string; value: unknown }>) {
        this.setState({
            orderOption: event.target.value as string
        });
    }

    private getFilterRepositories(includeForks: boolean): any {
        return function (x: any) {
            return includeForks || !x.fork;
        };
    }

    private getSortRepositories(): any {
        switch (this.state.sortOption) {
            case "creation-date":
                return function (a: any, b: any): number {
                    return a.created_at >= b.created_at ? 1 : -1;
                };
            case "last-update":
                return function (a: any, b: any): number {
                    return a.updated_at >= b.updated_at ? 1 : -1;
                };
            case "last-push":
                return function (a: any, b: any): number {
                    return a.pushed_at >= b.pushed_at ? 1 : -1;
                };
            case "forks-count":
                return function (a: any, b: any): number {
                    return a.forks_count >= b.forks_count ? 1 : -1;
                };
            case "watchers-count":
                return function (a: any, b: any): number {
                    return a.watchers_count >= b.watchers_count ? 1 : -1;
                };
            default:
                return function (a: any, b: any): number {
                    return 1;
                };
        }
    }

    private getSortAscDescRepositories(): any {
        var orderBy = 1;
        switch (this.state.orderOption) {
            case "asc":
                orderBy = 1;
                break;
            case "desc":
                orderBy = -1;
                break;
        }

        let sortFunction = this.getSortRepositories();
        return function (a: any, b: any) {
            return sortFunction(a, b) * orderBy;
        };
    }

    private getRepositories() {
        if (!this.state.repositories)
            return [];

        let includeForks = this.state.includeForks;

        return this.state.repositories
            .filter(this.getFilterRepositories(includeForks))
            .sort(this.getSortAscDescRepositories());
    }

    private getRepositoryCount() {
        return this.getRepositories().length;
    }

    private getRepositoryConfig(name: string) {
        return repositories.find(function (x: any) {
            return x.name.toUpperCase() === name.toUpperCase()
        });
    }

    private getRepositoryFullName(defaultName: string, config: any) {
        if (config == null || config.fullName == null)
            return defaultName;
        return config.fullName;
    }

    private getRepositoryImage(config: any) {
        if (config == null || config.image == null)
            return "/image/repo/default.png";
        return config.image;
    }

    private renderRepositories(height: number) {
        if (!this.state.repositories)
            return (<div>Loading...</div>);

        return this.getRepositories().map((x: any) => {
            const repositoryConfig = this.getRepositoryConfig(x.name);

            return (
                <GridListTile key={x.name} cols={1}>
                    <Repository
                        height={height}
                        name={this.getRepositoryFullName(x.name, repositoryConfig)}
                        image={this.getRepositoryImage(repositoryConfig)}
                        description={x.description}
                        repoUrl={x.html_url}
                        homepage={x.homepage}
                        createdAt={x.created_at}
                        pushedAt={x.pushed_at}
                        updatedAt={x.updated_at}
                        forksCount={x.forks_count}
                        watchersCount={x.watchers_count}
                        language={x.language}
                        license={x.license}
                        defaultBranch={x.defaultBranch}
                    />
                </GridListTile>
            )
        });
    }

    private renderIncludeSwitch() {
        return (
            <FormControlLabel control={
                <Switch
                    checked={this.state.includeForks}
                    onChange={this.handleIncludeForkChange} />
            } label="Forks" />
        );
    }

    private renderSortMethod() {
        return (
            <Select
                value={this.state.sortOption}
                onChange={this.handleSortOptionChange}
                displayEmpty>
                <MenuItem value={"default"}>Default</MenuItem>
                <MenuItem value={"last-update"}>Last update</MenuItem>
                <MenuItem value={"last-push"}>Last push</MenuItem>
                <MenuItem value={"creation-date"}>Creation date</MenuItem>
                <MenuItem value={"forks-count"}>Forks count</MenuItem>
                <MenuItem value={"watchers-count"}>Watchers count</MenuItem>
            </Select>
        );
    }

    private renderOrderMethod() {
        return (
            <Select
                value={this.state.orderOption}
                onChange={this.handleOrderOptionChange}
                displayEmpty>
                <MenuItem value={"asc"}>Ascend</MenuItem>
                <MenuItem value={"desc"}>Descend</MenuItem>
            </Select>
        );
    }

    private renderOptions() {
        return (
            <div className="repository-filter">
                {this.renderIncludeSwitch()}
                {this.renderSortMethod()}
                {this.renderOrderMethod()}
            </div>
        );
    }

    render() {
        const spacing = 12;
        return (
            <div>
                {this.renderOptions()}
                <div className="repository-filter">
                    <Typography>
                        Repository count: {this.getRepositoryCount()}
                    </Typography>
                </div>
                <Hidden smUp>
                    <GridList cellHeight="auto" cols={1}>
                        {this.renderRepositories(218)}
                    </GridList>
                </Hidden>
                <Hidden xsDown mdUp>
                    <GridList cellHeight="auto" cols={1} spacing={spacing}>
                        {this.renderRepositories(350)}
                    </GridList>
                </Hidden>
                <Hidden smDown lgUp>
                    <GridList cellHeight="auto" cols={2} spacing={spacing}>
                        {this.renderRepositories(255)}
                    </GridList>
                </Hidden>
                <Hidden mdDown xlUp>
                    <GridList cellHeight="auto" cols={2} spacing={spacing}>
                        {this.renderRepositories(360)}
                    </GridList>
                </Hidden>
                <Hidden lgDown>
                    <GridList cellHeight="auto" cols={3} spacing={spacing}>
                        {this.renderRepositories(350)}
                    </GridList>
                </Hidden>
            </div>
        );
    }
}