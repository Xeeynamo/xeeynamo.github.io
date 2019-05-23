import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Profile from './Profile';

describe('Profile component', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Profile userName="test" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('use the correct user name', async () => {
        const component = renderer.create(
            <Profile userName="test"/>
        );

        expect(component.root.props.userName).toBe('test');
    });
})
