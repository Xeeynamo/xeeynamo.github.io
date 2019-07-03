import ReactGA from 'react-ga';

export const isDebugMode = (): boolean => {
    return process.env.NODE_ENV !== "production";
}

export const debugLog = (text: string): void => {
    console.log(`%c ${text}`, 'background: #111; color: #fa8');
}

export const openLink = (url: string): void => {
    window.open(url, "_blank");
}

export const ga = {
    event: (category: string, action: string, label: string): void => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    },

    click: (action: string, label: string): void => {
        ga.event("Navigation", action, label);
    },

    behaviour: (action: string, label: string): void => {
        ga.event("Behaviour", action, label);
    },

    homepageClick: (label: string): void => {
        ga.click("Homepage", label);
    },

    sourceClick: (label: string): void => {
        ga.click("Source", label);
    },

    behaviourClickButton: (label: string): void => {
        ga.behaviour("button", label);
    },

    behaviourClickCard: (label: string): void => {
        ga.behaviour("card", label);
    },
}
