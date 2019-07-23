import React from 'react';
import moxios from 'moxios'
import { configure, shallow, mount, render, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ApplauseButton } from './ApplauseButton';
import { delay } from 'q';

describe('Applause button component', () => {
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
        moxios.stubRequest("https://api.applause-button.com/get-claps?url=/custom-url", {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin": "*"
            },
            response: "123"
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

            moxios.wait(() => {
                expect(wrapper.find(".count").text()).toEqual("44");
            })
        });

        it("initialises in loading state", () => {
            const wrapper = mount(<ApplauseButton />);
            expect(wrapper.find(".applause-button").hasClass("loading")).toBeTruthy();
        });

        it("removes loading state when clap count retrieved", async () => {
            const wrapper = shallow(<ApplauseButton />);

            moxios.wait(() => {
                expect(wrapper.find(".applause-button").hasClass("loading")).toBeFalsy();
            })
        });

        it("is not in clapped state", () => {
            const wrapper = mount(<ApplauseButton />);
            expect(wrapper.find(".style-root").hasClass("clapped")).toBeFalsy();
        });

        it("does not have max amount of claps reached", () => {
            const wrapper = mount(<ApplauseButton />);
            expect(wrapper.find(".style-root").hasClass("clap-limit-exceeded")).toBeFalsy();
        });

        it("get claps from custom url", async () => {
            const wrapper = mount(<ApplauseButton url='/custom-url' />);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.config.url).toBe("https://api.applause-button.com/get-claps?url=/custom-url");
                expect(request.config.method).toBe("get");

                expect(wrapper.find(".count").text()).toEqual("123");
            })
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
            await delay(50);

            expect(wrapper.hasClass("clapped")).toBeTruthy();
        });

        it("send the updated clap count to the server", async () => {
            const wrapper = shallow(<ApplauseButton bufferTimer={myBufferTime} />);
            clickTheButton(wrapper);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.config.url).toBe("https://api.applause-button.com/update-claps");
                expect(request.config.method).toBe("post");
                expect(request.config.data).toEqual('"1,3.3.0"');
            })
        });

        it("ensure that only a single clap is registered if not in multiclap mode", async () => {
            const wrapper = shallow(<ApplauseButton multiClap={false} bufferTimer={myBufferTime} />);
            clickTheButton(wrapper);
            clickTheButton(wrapper);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.config.url).toBe("https://api.applause-button.com/update-claps");
                expect(request.config.method).toBe("post");
                expect(request.config.data).toEqual('"1,3.3.0"');
            })
        });

        it("ensure the max clap count is not exceeded when multiclapping", async () => {
            const wrapper = shallow(<ApplauseButton bufferTimer={myBufferTime} />);
            for (let i = 0; i < 15; i++)
                clickTheButton(wrapper);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.config.url).toBe("https://api.applause-button.com/update-claps");
                expect(request.config.method).toBe("post");
                expect(request.config.data).toEqual('"10,3.3.0"');
            })
        });

        it("Ensure to set clap-limit-exceeded class when max clap count is reached", async () => {
            const wrapper = shallow(<ApplauseButton />);
            for (let i = 0; i < 15; i++)
                clickTheButton(wrapper);

            moxios.wait(() => {
                expect(wrapper.find(".applause-button").hasClass("clap-limit-exceeded")).toBeTruthy();
            })
        })
    })
})
