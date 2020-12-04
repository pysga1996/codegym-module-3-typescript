console.log("do-while loop");
const keys = "abcdef";
let idx = 0;
do {
    console.log(keys[idx]);
    ++idx;
} while (idx < keys.length);