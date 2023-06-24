import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <header>
    <div id="navbar"></div>
  </header>
  <main>
    <div id="home-page"></div>
    <div id="hip-hop"></div>

    <div class="modal fade" id="order-modal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          
          <div class="modal-body">
            <div id="order-form-container"></div>
          </div>
        </div>
      </div>
    </div>

            
    <div class="modal fade" id="item-modal" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="itemModalLabel">Item Form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="item-form-container"></div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="payment-modal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="paymentModalLabel">Payment Form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="payment-form-container"></div>
          </div>
        </div>
      </div>
    </div>

  </main>
  `;
  renderToDom('#app', domString);
};

export default domBuilder;

// forms will render to their specific div containers
// order cards will render to homePage
// revenue page will render to homePage
// item details will render to its own container
