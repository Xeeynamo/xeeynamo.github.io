import React, { Component } from 'react';
import './Profile.css'

interface Props {
    name: string;
    id: number;
    imageUrl: string;
    homeUrl: string;
    fullName: string;
}

export function Profile(props: Props) {
    return (
        <div className="profile">
            <div>
                <img src={props.imageUrl} width={100} alt="logo" />
            </div>
            <div>
                <a href={props.homeUrl}>{props.name}</a>
                <div>{props.fullName}</div>
            </div>
        </div>
    )
}
