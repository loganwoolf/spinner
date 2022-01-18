
const spinner = () => {
  
  const frames = ['\r|', '\r/', '\r-', '\r\\'];
  let counter = 0;

  return function go(max) {
    setTimeout(
      () => { // start of callback
        if (counter < max) {
          let frame = frames[counter++ % 4];
          process.stdout.write(`${frame}>  Waiting for ${max - counter}...`);
          go(max);
        }
        if (counter === max) {
          process.stdout.write('\n');
        }
      } // end of callback
      , 100 // setTimeout
    );
  };

};

const wait = spinner(); // wait is an instance of spinner

wait(100);

