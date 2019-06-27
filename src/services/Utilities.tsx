import ReactGA from 'react-ga';

export function isDebugMode(): boolean {
        return process.env.NODE_ENV !== "production";
}

export function debugLog(text: string) {
    console.log(`%c ${text}`, 'background: #111; color: #fa8');
}

export function openLink(url: string) {
    if (isDebugMode())
        debugLog(`Mocked openLink("${url}")`, )
    else
        window.open(url, "_blank");
}

export function gaEvent(category: string, action: string, label: string): void {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
}

export function gaClick(action: string, label: string): void {
    gaEvent("Navigation", action, label);
}

export function gaBehaviour(action: string, label: string): void {
    gaEvent("Behaviour", action, label);
}

export function gaHomepageClick(label: string): void {
    gaClick("Homepage", label);
}

export function gaSourceClick(label: string): void {
    gaClick("Source", label);
}

export function gaBehaviourClickButton(label: string): void {
    gaBehaviour("button", label);
}

export function gaBehaviourClickCard(label: string): void {
    gaBehaviour("card", label);
}