import {add} from 'lodash'
export function logThree () {
  console.log(3);
}
export function logFour() {
  console.log(add(2,2));
}

/*#__PURE__*/
logFour();

