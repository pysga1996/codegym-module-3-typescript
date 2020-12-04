var wait5Secs = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(5);
    }, 5000);
});
wait5Secs.then(function (data) { return console.log(data); }).catch(function (err) { return console.error(err); });
function httpGet(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                resolve(this.response);
            }
            else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}
httpGet('https://api.github.com/search/repositories?q=angular').then(function (value) {
    console.log('Contents: ' + value);
}, function (reason) {
    console.error('Something went wrong', reason);
});
