
import _ from 'lodash';
import numRef from './ref.json';
export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}
export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}


// function getComponent() {
//   return import('lodash')
//     .then(({ default: _ }) => {
//       element.onclick = Print.bind(null, 'Hello webpack!');
//       const element = document.createElement('div');
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//       // consol.kif(123)
//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
