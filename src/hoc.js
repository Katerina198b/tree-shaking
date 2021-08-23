function wrapperPure(color) {
  return function (element) {
    const node = document.cloneNode(element);
    node.style = {background: color};
    return node;
  }
}

function mutableWrapper(color) {
  return function (element) {
    element.style = {background: color}
    const node = document.cloneNode(element);
    return node;
  }
}

const el = document.getElementById('toggle');
export const togglePure = wrapperPure('red')(document.getElementById('toggle'));
export const toggle = mutableWrapper('red')(el);