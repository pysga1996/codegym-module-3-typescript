function parseResponse(value: string) {
    try {
        return JSON.parse(value);
    } catch (_) {
        return value;
    }
}
httpGet('https://api.github.com/search/repositories?q=angular')
    .then(parseResponse)
    .then(data => console.log(data))
    .catch(function(reason) {
        console.error('Something went wrong', reason);
    });