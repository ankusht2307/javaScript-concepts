const setDisable = (flag) => {
  flag
    ? document.getElementById('subscribe').setAttribute('disabled', 'disabled')
    : document
        .getElementById('subscribe')
        .removeAttribute('disabled', 'disabled');
};

const makeApiRequest = () => {
  console.log('waiting for response...');
};

const throttle = (cb, delay) => {
  return () => {
    console.log('request made...');
    setDisable(true);
    setTimeout(() => {
      cb();
      console.log('response recieved...');
      setDisable(false);
    }, delay);
  };
};

const subscribe = throttle(makeApiRequest, 1000);
