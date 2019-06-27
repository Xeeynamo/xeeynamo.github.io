export function isDebugMode(): boolean {
        return process.env.NODE_ENV !== "production";
}