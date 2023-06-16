// need to import promise functions here //

const formEvents = () => {
  // PAYMENT FORM EVENT LISTENER //
  document.querySelector('#paymentFormDiv').addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = {
      paymentMethod: document.querySelector('#payType').value,
      tipAmount: document.querySelector('#tip').value,
    };
    // promise goes here //
  });
};

export default formEvents;
