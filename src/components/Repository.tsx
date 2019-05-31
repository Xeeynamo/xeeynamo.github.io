import React, { Component } from 'react';
import './Repository.css';

interface Props {
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
}

interface State {

}

export class Repository extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="repository-name">
                    {this.props.name}
                </div>
                <div>
                    {this.props.description}
                </div>
            </div >
        );
    }
}
