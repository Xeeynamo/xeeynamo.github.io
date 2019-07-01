import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './Repository.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

import { openLink, gaClick, gaSourceClick, gaHomepageClick, gaBehaviourClickButton, gaBehaviourClickCard } from '../services/Utilities';
import { ApplauseButton } from './ApplauseButton';

interface Props {
    height: number
    name: string
    image: string
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
        this.onSourceButtonClick = this.onSourceButtonClick.bind(this);
        this.onHomepageButtonClick = this.onHomepageButtonClick.bind(this);
        this.onApplauseButtonClick = this.onApplauseButtonClick.bind(this);
        this.onCardClick = this.onCardClick.bind(this);
    }

    private style = {
        height: `${this.props.height}px`,
    };

    private hasHomePage(): boolean {
        return this.props.homepage != null && this.props.homepage.length > 0;
    }

    private getHomepageUrl(): string {
        return this.hasHomePage() ? this.props.homepage : this.props.repoUrl;
    }

    private getSourceUrl(): string {
        return this.props.repoUrl;
    }

    private gotoHomepage() {
        gaHomepageClick(this.props.name);
        openLink(this.getHomepageUrl());
    }

    private gotoSource() {
        gaSourceClick(this.props.name);
        openLink(this.getSourceUrl());
    }

    private onSourceButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        gaBehaviourClickButton(this.props.name);
        this.gotoSource();
    }

    private onHomepageButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        gaBehaviourClickButton(this.props.name);
        this.gotoHomepage();
    }

    private onApplauseButtonClick(event: React.MouseEvent<HTMLElement>) {
        gaClick('heart', this.props.name);
    }

    private onCardClick(event: React.MouseEvent<HTMLButtonElement>) {
        gaBehaviourClickCard(this.props.name);
        if (this.hasHomePage())
            this.gotoHomepage();
        else
            this.gotoSource();
    }

    private getLastUpdate() {
        return this.props.updatedAt > this.props.pushedAt ?
            this.props.updatedAt : this.props.pushedAt;
    }

    private renderContent() {
        return (
            <div>
                <a className="repository-name" href={this.getHomepageUrl()} target="_blank" rel="noopener noreferrer">
                    {this.props.name}
                </a>
                <div>
                    {this.props.description}
                </div>
                <br />
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

    private renderWebsiteButton() {
        if (!this.hasHomePage())
            return;

        return (
            <Button size="small" color="primary" onClick={this.onHomepageButtonClick}>
                <a className="hidden" href={this.getHomepageUrl()}>Homepage</a>
                Homepage
            </Button>
        );
    }

    private renderApplauseButton() {
        return (
            <div onClick={this.onApplauseButtonClick}>
                <ApplauseButton url={this.props.repoUrl}>
                    <svg viewBox="0 0 60 60">
                        <g className="flat">
                            <FontAwesomeIcon icon={fasHeart} />
                        </g>
                        <g className="outline">
                            <FontAwesomeIcon icon={farHeart} />
                        </g>
                    </svg>
                </ApplauseButton>
            </div>
        );
    }

    private renderSourceButton() {
        return (
            <Button size="small" color="primary" onClick={this.onSourceButtonClick}>
                <a className="hidden" href={this.getSourceUrl()}>Source</a>
                Source
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardActionArea onClick={this.onCardClick}>
                    <CardMedia
                        className="repository-media"
                        style={this.style}
                        image={this.props.image}
                        title={this.props.description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.renderApplauseButton()}
                    {this.renderWebsiteButton()}
                    {this.renderSourceButton()}
                </CardActions>
            </Card>
        );
    }
}
