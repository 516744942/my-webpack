//
// import '@babel/polyfill';

const add = (x, y) => x + y;
add(1, 2);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(123);
    resolve();
  }, 1000);
});
promise();
