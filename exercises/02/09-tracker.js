/* eslint-disable max-lines-per-function */
document.addEventListener("DOMContentLoaded", () => {
  const divRed = document.querySelector('#red');
  const divBlue = document.querySelector('#blue');
  const divOrange = document.querySelector('#orange');
  const divGreen = document.querySelector('#green');

  const tracker = (() => {
    const events = [];

    return {
      elements() {
        return events.map(event => event.target);
      },

      list() {
        return events.slice();
      },

      add(event) {
        events.push(event);
      },

      clear() {
        events.length = 0;
        return 0;
      }
    };
  })();

  function track(callback) {
    console.log(callback);
    function isEventTracked(events, event) {
      return events.includes(event);
    }

    return anything => {
      if (!isEventTracked(tracker.list(), anything)) {
        tracker.add(anything);
      }

      callback(anything);
    };
  }

  divRed.addEventListener('click', track(() => {
    // console.log(event);
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track);

  divOrange.addEventListener('click', track(something => {
    console.log(something);
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
});