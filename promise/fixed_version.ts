(() => {
    let x = 0;
    async function r5() {
        x += 1;
        console.log(x);
        return 5;
    }
    (async () => {
        const y = await r5();
        x += y;
        console.log(x);
    })();
})();