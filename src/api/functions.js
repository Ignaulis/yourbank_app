export const hash = (hash) => {
    window.location.hash = hash;
    window.location.reload()
}