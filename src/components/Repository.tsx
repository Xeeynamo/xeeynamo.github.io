import React, { Component } from 'react';

export interface Props {
    name: string
}

export interface State {

}

export class Repository extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.name }
            </div>
        );
    }
}
