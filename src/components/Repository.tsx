import React, { Component } from 'react';

interface Props {
    name: string
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
                { this.props.name }
            </div>
        );
    }
}
