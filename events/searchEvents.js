import { getAllOrders } from '../api/orderData';
import searchBar from '../components/searchBar';
import showCards from '../pages/cards';

const searchEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    e.preventDefault();

    const searchValue = document.querySelector('#search-bar').value;

    if (e.target.id.includes('search-btn')) {
      getAllOrders(user.uid)
        .then((entries) => searchBar(entries, searchValue))
        .then(showCards);
    }
  });
};

export default searchEvents;
