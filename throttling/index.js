const setDisable = (flag) => {
  flag
    ? document.getElementById('subscribe').setAttribute('disabled', 'disabled')
    : document
        .getElementById('subscribe')
        .removeAttribute('disabled', 'disabled');
};

const showStatus = (message) => {
  if (!message) return;
  document.getElementById('status').innerText = message;
};

const makeApiRequest = () => {
  showStatus('waiting for response...');
};

const throttle = (cb, delay) => {
  return () => {
    showStatus('request made...');
    setDisable(true);
    setTimeout(() => {
      cb();
      showStatus('response recieved...');
      setDisable(false);
    }, delay);
  };
};

const subscribe = throttle(makeApiRequest, 1000);
