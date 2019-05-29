import React, { Component } from 'react';
import Profile from './Profile';
import { RepositoryList } from './RepositoryList';

export interface Props {
    userName: string
}

export interface State {

}

class MasterProfile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Profile userName={ this.props.userName }/>
                <RepositoryList userName={ this.props.userName }/>
            </div>
        );
    }
}

export default MasterProfile;