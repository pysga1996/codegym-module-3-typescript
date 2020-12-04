function parseResponse(value) {
    try {
        return JSON.parse(value);
    }
    catch (_) {
        return value;
    }
}
httpGet('https://api.github.com/search/repositories?q=angular')
    .then(parseResponse)
    .then(function (data) { return console.log(data); })
    .catch(function (reason) {
    console.error('Something went wrong', reason);
});
