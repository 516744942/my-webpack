
 import Print from './print';
function getComponent() {
  return import('lodash')
    .then(({ default: _ }) => {
      element.onclick = Print.bind(null, 'Hello webpack!');
      const element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      // consol.kif(123)
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
