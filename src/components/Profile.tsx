import React, { Component } from 'react';

export interface Props {
    userName: string
}

export interface State {

}

class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>{ this.props.userName }</div>
        );
    }
}

export default Profile;