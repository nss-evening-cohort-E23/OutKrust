import renderToDom from '../../utils/renderToDom';

const renderNavbar = (user) => {
  const navbarString = `
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">OutKrust</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id="nav-home" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-new-order" href="#" data-bs-toggle="modal" data-bs-target="#order-modal">New Order</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Options
          </a>
          <ul id="dropdown-menu" class="dropdown-menu">
            <li><a class="dropdown-item" id="nav-menu" href="#">Menu</a></li>
            <li><a class="dropdown-item" id="nav-orders" href="#">Order History</a></li>
            <li><a class="dropdown-item" id="nav-revenue" href="#">Revenue</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-user" href="#">${user.displayName}</a>
        </li>
      </ul>
      <div class="d-flex gap-20">
        <form class="d-flex" role="search">

          <input class="form-control me-2" type="search" id="search-bar" placeholder="Search Order" aria-label="Search">

        </form>
        <div id="logout-form-container"></div>
      </div>
    </div>
  </div>
</nav>`;

  renderToDom('#navbar', navbarString);
};

export default renderNavbar;
