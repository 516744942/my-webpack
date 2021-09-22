import _ from 'lodash';
import logo from "./image/logo1.png";
import './style.css';
import Data from './data/data.xml';
import Notes from './data/data.csv';
import Json from './data/data.json';


import toml from './data/data.toml';
import yaml from './data/data.yaml';
import json from './data/data.json5';

console.log(toml); // output `TOML Example`
console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml); // output `YAML Example`
console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json); // output `JSON5 Example`
console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`


function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = logo;
  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  console.log(Json);

  return element;
}

document.body.appendChild(component());
