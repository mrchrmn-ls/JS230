function randomizer(...callbacks) {
  let counter = 0;
  let maxSeconds = callbacks.length * 2;

  let counterInterval = setInterval(() => {
    console.log(counter += 1);
    if (counter === maxSeconds) clearInterval(counterInterval);
  }, 1000);

  callbacks.forEach(callback => setTimeout(callback, Math.ceil(Math.random() * maxSeconds * 1000)));
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);