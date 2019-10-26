import React from 'react';
import './Profile.css'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardMedia, Link, Divider } from '@material-ui/core';
import { openLink, ga } from '../services/Utilities';
import Octicon, { Heart } from '@primer/octicons-react'
import Sponsors from './Sponsors'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "700px",
            textAlign: "center"
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
            textAlign: "left"
        },
        cover: {
            width: 230,
            height: 230,
            backgroundSize: "contain"
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);

export function Profile(props: {
    name: string
    imageUrl: string
    homeUrl: string
    fullName: string
}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={props.imageUrl}
                title={props.fullName}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <div>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                ga.homepageClick("GitHub profile");
                                ga.behaviour("Full name", "GitHub profile")
                                openLink(props.homeUrl)
                            }}
                        >
                            <Typography component="h5" variant="h5">
                                {props.fullName}
                            </Typography>
                        </Link>
                    </div>
                    <div>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                ga.homepageClick("GitHub profile");
                                ga.behaviour("User name", "GitHub profile")
                                openLink(props.homeUrl)
                            }}
                        >
                            <Typography className="profile-username" variant="subtitle1" color="textSecondary">
                                {props.name}
                            </Typography>
                        </Link>
                    </div>
                    <Divider variant="middle" />
                    <div>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                ga.homepageClick("GitHub Sponsors");
                                ga.behaviour("Sponsor title", "GitHub Sponsors")
                                openLink(`https://github.com/sponsors/${props.name}`)
                            }}
                            >
                            <Typography className="profile-sponsor" variant="subtitle1">
                                <Octicon
                                    className="heart-icon"
                                    icon={Heart}
                                    size="medium"
                                    ariaLabel="GitHub Sponsors"
                                />
                                <span className="profile-sponsor"> Sponsors</span>
                            </Typography>
                        </Link>
                        <div className="sponsor-list">
                            <Sponsors/>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}
