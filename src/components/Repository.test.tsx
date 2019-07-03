import React from 'react';
import ReactGA from 'react-ga';
import { configure, shallow, mount, render, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Repository } from './Repository';

describe('Repository component', () => {

    beforeAll(() => {
        configure({ adapter: new Adapter() });
    })

    afterAll(() => {
    })

    const getRepository = (props: {
        name?: string,
        image?: string,
        description?: string,
        repoUrl?: string,
        homepage?: string,
        createdAt?: string,
        updatedAt?: string,
        pushedAt?: string,
        forksCount?: number,
        watchersCount?: number,
        language?: string,
        license?: string,
        defaultBranch?: string
    }) => {
        return (
            <Repository
                height={0}
                name={props.name || "RepoTest"}
                image={props.image || "images/foo"}
                description={props.description || "description"}
                repoUrl={props.repoUrl || "repoUrl"}
                homepage={props.homepage}
                createdAt={props.createdAt || "createdAt"}
                updatedAt={props.updatedAt || "updatedAt"}
                pushedAt={props.pushedAt || "pushedAt"}
                forksCount={props.forksCount || 123}
                watchersCount={props.watchersCount || 456}
                language={props.language || "language"}
                license={props.license || "license"}
                defaultBranch={props.defaultBranch || "defaultBranch"}
            />
        )
    }

    describe('Initialization', (
    ) => {
        it('Show repository name', () => {
            const expected = "SomeRandomName";
            const wrapper = shallow(getRepository({ name: expected }));

            expect(wrapper.find(".repository-name").text()).toEqual(expected);
        })

        it('Show repository description', () => {
            const expected = "SomeRandomDescription";
            const wrapper = shallow(getRepository({ description: expected }));

            expect(wrapper.find(".repository-description").text()).toEqual(expected);
        })

        it('Homepage button is not visible if no homepage is specified', () => {
            const wrapper = shallow(getRepository({}));

            expect(wrapper.find(".repository-button-homepage").length).toEqual(0);
        });

        it('Homepage button is visible if the homepage is specified', () => {
            const wrapper = shallow(getRepository({ homepage: "SomeRandomHomepage" }));

            expect(wrapper.find(".repository-button-homepage").length).toEqual(1);
        });
    })

    describe('User interaction', () => {
        it('Go to homepage when "Homepage" button is clicked', () => {
            const expected = "SomeRandomHomepage";

            const fnMocked = jest.fn().mockReturnValue(() => null);
            window.open = fnMocked;
            const wrapper = shallow(getRepository({ homepage: expected }));
            let button = wrapper.find(".repository-button-homepage");

            button.simulate("click");

            expect(fnMocked.mock.calls.length).toBe(1);
            expect(fnMocked.mock.calls[0][0]).toBe(expected);
            expect(fnMocked.mock.calls[0][1]).toBe("_blank");
        });

        it('Go to source when "Source" button is clicked', () => {
            const expected = "SomeRandomRepoUrl";

            const fnMocked = jest.fn().mockReturnValue(() => null);
            window.open = fnMocked;
            const wrapper = shallow(getRepository({ repoUrl: expected }));
            let button = wrapper.find(".repository-button-source");

            button.simulate("click");

            expect(fnMocked.mock.calls.length).toBe(1);
            expect(fnMocked.mock.calls[0][0]).toBe(expected);
            expect(fnMocked.mock.calls[0][1]).toBe("_blank");
        });

        it('Go to homepage when the homepage is specified and the card is clicked', () => {
            const expected = "ThisIsAnHomepage";

            const fnMocked = jest.fn().mockReturnValue(() => null);
            window.open = fnMocked;
            const wrapper = shallow(getRepository({ homepage: expected, repoUrl: "NoPlz" }));
            let button = wrapper.find(".repository-header");

            button.simulate("click");

            expect(fnMocked.mock.calls.length).toBe(1);
            expect(fnMocked.mock.calls[0][0]).toBe(expected);
            expect(fnMocked.mock.calls[0][1]).toBe("_blank");
        });

        it('Go to source when the homepage is not specified and the card is clicked', () => {
            const expected = "SourceCodeUrl";

            const fnMocked = jest.fn().mockReturnValue(() => null);
            window.open = fnMocked;
            const wrapper = shallow(getRepository({ repoUrl: "SourceCodeUrl" }));
            let button = wrapper.find(".repository-header");

            button.simulate("click");

            expect(fnMocked.mock.calls.length).toBe(1);
            expect(fnMocked.mock.calls[0][0]).toBe(expected);
            expect(fnMocked.mock.calls[0][1]).toBe("_blank");
        });
    })
})
