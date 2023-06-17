import { getAllOrders } from '../api/orderData';
import searchBar from '../components/searchBar';
import showCards from '../pages/cards';

const searchEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    e.preventDefault();

    const searchValue = document.querySelector('#search-bar').value;

    if (e.target.id.includes('search-btn')) {
      getAllOrders()
        .then((orders) => searchBar(orders, searchValue))
        .then(showCards);
    }
  });
};

export default searchEvents;
