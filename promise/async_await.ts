async function f() {
    return 1;
}

function fp() {
    return Promise.resolve(1);
}

f().then(data => console.log('async fn', data));

(async() => {
    const data = await fp();
    console.log('async/await', data);
})();

async function fns() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    // wait till the promise resolves (*)
    const result = await promise;
    console.log(result); // "done!"
}
fns();