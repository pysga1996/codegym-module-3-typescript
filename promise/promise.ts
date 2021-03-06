const wait5Secs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 5000);
});

wait5Secs.then(data => console.log(data)).catch(err => console.error(err));

function httpGet(url: string): Promise<any> {
    return new Promise(function(resolve, reject) {
        const request = new XMLHttpRequest();
        request.onload = function() {
            if (this.status === 200) {
                // Success
                resolve(this.response);
            } else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function() {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}
httpGet('https://api.github.com/search/repositories?q=angular').then(
    function(value) {
        console.log('Contents: ' + value);
    },
    function(reason) {
        console.error('Something went wrong', reason);
    }
);