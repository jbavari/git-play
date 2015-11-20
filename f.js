function createIt(result) {
  var promise = new Promise((resolve, reject) => {
    // do a thing, possibly async, then…

    if (result) {
      resolve("Stuff worked!");
    } else {
      reject(Error("It broke"));
    }
  });

  return promise;
}

var p = createIt(true);

p.then(e => {
  console.log('hi');
}, f => {
  console.log(f);
});
