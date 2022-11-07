const bubble = false;
const capture = true;

const showMessage = (message, id) => {
  getElementById(id).innerText = message;
};

const getElementById = (id) => {
  return document.getElementById(id);
};

getElementById('grand-parent').addEventListener(
  'click',
  () => {
    showMessage('Grand parent clicked', 'message-grand-parent');
  },
  //   bubble
  capture
);

getElementById('parent').addEventListener(
  'click',
  () => {
    showMessage('parent clicked', 'message-parent');
  },
  //   bubble
  capture
);

getElementById('child').addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    showMessage('child clicked', 'message-child');
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
