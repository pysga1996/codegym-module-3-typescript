async function getUser(username: string) {
    try {
        const response = await fetch(
            `https://api.github.com/search/users?q=${username}`
        );
        return await response.json();
    } catch (e) {
        throw e;
    }
}
getUser('bob')
    .then(res => console.log(res))
    .catch(err => console.warn(err));