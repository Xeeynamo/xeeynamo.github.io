import React, { Component } from 'react';
import { Profile } from './Profile';
import { RepositoryList } from './RepositoryList';

interface Props {
    userName: string
}

interface State {

}

export class MasterProfile extends Component<Props, State> {
    render() {
        return (
            <div>
                <Profile userName={this.props.userName} />
                <RepositoryList userName={this.props.userName} />
            </div>
        );
    }
}