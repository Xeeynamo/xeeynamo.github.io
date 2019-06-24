import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './Repository.css';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    createStyles({
        media: {
            height: 140,
        },
    }),
);

interface Props {
    height: number
    name: string
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
        this.onSourceClick = this.onSourceClick.bind(this);
        this.onCardClick = this.onCardClick.bind(this);
    }

    private style = {
        height: `${this.props.height}px`,
    };

    onSourceClick(event: React.MouseEvent<HTMLButtonElement>) {
        window.open(this.props.repoUrl, "_blank");
    }

    onCardClick(event: React.MouseEvent<HTMLButtonElement>) {
        window.open(this.getHomePage(), "_blank");
    }

    getLastUpdate() {
        return this.props.updatedAt > this.props.pushedAt ?
            this.props.updatedAt : this.props.pushedAt;
    }

    getHomePage() {
        if (this.props.homepage != null && this.props.homepage.length > 0)
            return this.props.homepage;

        return this.props.repoUrl;
    }

    renderContent() {
        return (
            <div>
                <a className="repository-name" href={this.getHomePage()} target="_blank" rel="noopener noreferrer">
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

    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        className="repository-media"
                        style={this.style}
                        image="https://file.qiitadon.com/media_attachments/files/001/158/388/original/674c903ebb6b2755.png"
                        title="Contemplative Reptile"
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
                    <Button size="small" color="primary" onClick={this.onSourceClick}>
                        Source
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
