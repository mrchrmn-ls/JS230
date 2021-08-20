function callback({ target, currentTarget }) {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
}

function delegateEvent(parent, selector, eventType, callback) {
  if (!(parent && parent instanceof Element)) return undefined;

  parent.addEventListener(eventType, event => {
    if ([...parent.querySelectorAll(selector)].includes(event.target)) callback(event);
  });

  return true;
}


document.addEventListener("DOMContentLoaded", () => {
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  // delegateEvent(element1, 'p', 'click', callback);
  // delegateEvent(element2, 'p', 'click', callback);
  // delegateEvent(element2, 'h1', 'click', callback);
  // delegateEvent(element3, 'h1', 'click', callback);
  // delegateEvent(element3, 'aside p', 'click', callback);

  const newP = document.createElement('P');
  const newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);
  element2.appendChild(newP);
  delegateEvent(element2, 'p', 'click', callback);
});