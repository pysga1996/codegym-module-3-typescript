function main() {
  console.log("START");
  if (true) {
    var lang = "vi";
    let target = "en-us";
    console.log("inside block");
    console.log(target);
  }
  console.log(lang);
  // console.log(target); // let-variable is in inner scope, outer scope cannot see
}
main();
