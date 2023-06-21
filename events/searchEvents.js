import { getAllOrders } from '../api/orderData';
import searchBar from '../components/shared/searchBar';
import showOrderCards from '../pages/cards';

const searchEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    const searchValue = document.querySelector('#search-bar').value;

    if (e.target.id.includes('search-btn')) {
      getAllOrders()
        .then((orders) => searchBar(orders, searchValue))
        .then(showOrderCards);
    }
  });
};

export default searchEvents;
