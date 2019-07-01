import React from 'react';
import moxios from 'moxios'
import { configure, shallow, mount, render, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ApplauseButton } from './ApplauseButton';
import { delay } from 'q';

describe('Applause button component', () => {
    const sleepTime = 50;
    const sleepTimeForStateUpdate = 50;
    const sleepTimeForPostCall = 50;
    const sleepTimeForBufferTime = 50;
    const myBufferTime = 20;

    beforeAll(() => {
        configure({ adapter: new Adapter() });

        moxios.install();
        moxios.stubRequest("https://api.applause-button.com/get-claps", {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin": "*"
            },
            response: "44"
        });
        moxios.stubRequest("https://api.applause-button.com/update-claps", {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin": "*"
            },
            response: "44"
        });
    });

    afterAll(() => {
        moxios.uninstall();
    });

    describe("initialisation", () => {
        it("clap count is empty during loading", async () => {
            const wrapper = mount(<ApplauseButton />);
            expect(wrapper.find(".count").text()).toEqual("");
        });

        it("updates the clap count with the server-returned value", async () => {
            const wrapper = mount(<ApplauseButton />);
            await delay(sleepTime);
            expect(wrapper.find(".count").text()).toEqual("44");
        });

        it("initialises in loading state", () => {
            const wrapper = mount(<ApplauseButton />);
            expect(wrapper.find(".applause-button").hasClass("loading")).toBeTruthy();
        });

        it("removes loading state when clap count retrieved", async () => {
            const wrapper = shallow(<ApplauseButton />);
            await delay(sleepTime);
            expect(wrapper.find(".applause-button").hasClass("loading")).toBeFalsy();
        });

        it("is not in clapped state", () => {
            const wrapper = mount(<ApplauseButton />);
            expect(wrapper.find(".style-root").hasClass("clapped")).toBeFalsy();
        });

        it("does not have max amount of claps reached", () => {
            const wrapper = mount(<ApplauseButton />);
            expect(wrapper.find(".style-root").hasClass("clap-limit-exceeded")).toBeFalsy();
        });
    })

    describe("clicked", () => {
        const getApplauseButton = (wrapper: ShallowWrapper<any, any>) =>
            wrapper.find('.applause-button');

        const clickTheButton = (wrapper: ShallowWrapper<any, any>) =>
            getApplauseButton(wrapper).simulate('mousedown', {
                button: 0
            });

        it("updates clapped state", async () => {
            const wrapper = shallow(<ApplauseButton />);
            clickTheButton(wrapper);
            await delay(sleepTimeForStateUpdate);
            expect(wrapper.hasClass("clapped")).toBeTruthy();
        });

        it("send the updated clap count to the server", async () => {
            const wrapper = shallow(<ApplauseButton bufferTimer={myBufferTime} />);
            clickTheButton(wrapper);
            await delay(sleepTimeForPostCall);

            const request = moxios.requests.mostRecent();
            expect(request.config.url).toBe("https://api.applause-button.com/update-claps");
            expect(request.config.method).toBe("post");
            expect(request.config.data).toEqual('"1,3.3.0"');
        });

        it("ensure that only a single clap is registered if not in multiclap mode", async () => {
            const wrapper = shallow(<ApplauseButton multiClap={false} bufferTimer={myBufferTime}/>);
            clickTheButton(wrapper);
            clickTheButton(wrapper);
            await delay(sleepTimeForBufferTime);

            const request = moxios.requests.mostRecent();
            expect(request.config.url).toBe("https://api.applause-button.com/update-claps");
            expect(request.config.method).toBe("post");
            expect(request.config.data).toEqual('"1,3.3.0"');
        });

        it("ensure the max clap count is not exceeded when multiclapping", async () => {
            const wrapper = shallow(<ApplauseButton bufferTimer={myBufferTime} />);
            for (let i = 0; i < 15; i++)
                clickTheButton(wrapper);

            await delay(sleepTimeForBufferTime);

            const request = moxios.requests.mostRecent();
            expect(request.config.url).toBe("https://api.applause-button.com/update-claps");
            expect(request.config.method).toBe("post");
            expect(request.config.data).toEqual('"10,3.3.0"');
        });

        it("Ensure to set clap-limit-exceeded class when max clap count is reached", async () => {
            const wrapper = shallow(<ApplauseButton />);
            for (let i = 0; i < 15; i++)
                clickTheButton(wrapper);

            await delay(sleepTimeForStateUpdate);

            expect(wrapper.find(".applause-button").hasClass("clap-limit-exceeded")).toBeTruthy();
        })
    })
})
