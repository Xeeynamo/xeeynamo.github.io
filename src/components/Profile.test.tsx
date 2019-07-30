import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import moxios from 'moxios'
import { Profile } from './Profile';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Profile component', function () {
    beforeAll(() => {
        configure({ adapter: new Adapter() });

        moxios.install();
    });

    afterAll(() => {
        moxios.uninstall();
    });

    const getProfile = (props: {
        name?: string,
        imageUrl?: string,
        homeUrl?: string,
        fullName?: string
    }) => (
            <Profile
                name={props.name || "RepoTest"}
                imageUrl={props.imageUrl || "imageUrl"}
                homeUrl={props.homeUrl || "homeUrl"}
                fullName={props.fullName || "fullName"}
            />
        )

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(getProfile({}), div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('use the correct user name', async () => {
        const expected = "SomeRandomUserName";
        const wrapper = shallow(getProfile({ name: expected }));

        expect(wrapper.find(".profile-username").text()).toEqual(expected);
    });

    it('fetch the correct user details', async () => {
        moxios.stubRequest('https://api.github.com/users/test', {
            status: 200,
            response: {
                name: "myName"
            }
        });

        const response = await axios.get('https://api.github.com/users/test');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe("myName");
    });
})
