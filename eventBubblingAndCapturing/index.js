const bubble = false;
const capture = true;

const getElementById = (id) => {
  return document.getElementById(id);
};

getElementById('grand-parent').addEventListener(
  'click',
  () => {
    console.log('Grand parent clicked');
  },
  //   bubble
  capture
);

getElementById('parent').addEventListener(
  'click',
  () => {
    console.log('parent clicked');
  },
  //   bubble
  capture
);

getElementById('child').addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log('child clicked');
  },
  //   bubble
  capture
);

/**
 * Event bubbling: event will occur starting from child to parent.
 * Event Capturing or trickling: events will occur from parent toward child element.
 *
 * When bubble flag is passed which just means `false` or even if we pass nothing the
 * events will bubble and vice-a-versa.
 *
 * If we want we stop any events from bubbling or capturing, we can simply do so by
 * adding `e.stopPropagation()` inside callback of eventListener.
 */
