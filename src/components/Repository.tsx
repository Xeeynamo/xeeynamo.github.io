import React, { Component } from 'react';
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

import { openLink, ga } from '../services/Utilities';
import { ApplauseButton } from './ApplauseButton';
import './Repository.css';

interface Props {
    height: number
    name: string
    image: string
    description: string
    repoUrl: string
    homepage?: string
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
        return !!this.props.homepage && this.props.homepage.length > 0;
    }

    private getHomepageUrl(): string {
        return this.hasHomePage() ? (this.props.homepage || this.props.repoUrl) : this.props.repoUrl;
    }

    private getSourceUrl(): string {
        return this.props.repoUrl;
    }

    private gotoHomepage() {
        ga.homepageClick(this.props.name);
        openLink(this.getHomepageUrl());
    }

    private gotoSource() {
        ga.sourceClick(this.props.name);
        openLink(this.getSourceUrl());
    }

    private onSourceButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        ga.behaviourClickButton(this.props.name);
        this.gotoSource();
    }

    private onHomepageButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        ga.behaviourClickButton(this.props.name);
        this.gotoHomepage();
    }

    private onApplauseButtonClick(event: React.MouseEvent<HTMLElement>) {
        ga.click('heart', this.props.name);
    }

    private onCardClick(event: React.MouseEvent<HTMLButtonElement>) {
        ga.behaviourClickCard(this.props.name);
        if (this.hasHomePage())
            this.gotoHomepage();
        else
            this.gotoSource();
    }

    private getLastUpdate() {
        return this.props.updatedAt > this.props.pushedAt ?
            this.props.updatedAt : this.props.pushedAt;
    }

    private renderWebsiteButton() {
        if (!this.hasHomePage())
            return;

        return (
            <Button className="repository-button-homepage" size="small" color="primary" onClick={this.onHomepageButtonClick}>
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
            <Button className="repository-button-source" size="small" color="primary" onClick={this.onSourceButtonClick}>
                <a className="hidden" href={this.getSourceUrl()}>Source</a>
                Source
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardActionArea className="repository-header" onClick={this.onCardClick}>
                    <CardMedia
                        className="repository-media"
                        style={this.style}
                        image={this.props.image}
                        title={this.props.description}
                    />
                    <CardContent>
                        <Typography className="repository-name" gutterBottom variant="h5" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography className="repository-description" variant="body2" color="textSecondary" component="p">
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
