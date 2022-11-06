const search = () => {
  let searchText = document.getElementById('search').value;
  console.log('searching...', searchText);
};

const debounce = (cb, delay) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};

const callDebounce = debounce(search, 500);
