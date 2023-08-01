export function getUniqueKey() {
    return Math.random().toString(16).slice(2) + Date.now();
}