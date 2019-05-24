import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import axios from 'axios'
import moxios from 'moxios'
import Profile from './Profile';

describe('Profile component', function() {
    beforeAll(() => {
        moxios.install();
    });

    afterAll(() => {
        moxios.uninstall();
    });

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

    it('fetch the correct user details', async () => {
        moxios.stubRequest('https://api.github.com/users/test', {
            status: 200,
            responseText: {
                name: "myName"
            }
        });

        const response = await axios.get('https://api.github.com/users/test');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe("myName");
    });
})
