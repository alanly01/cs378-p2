import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import React, {useState} from 'react';


// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const menuHeader = [
{
  id: 1,
  title: 'The Fresh Choice at UT!',
  logo: 'bevo.png',
  resturant: 'logo-Name.png',
  description: 'Delicious, From-Scratch Recipes Close at Hand',
}
];


function App() {
  const [counts, setCounts] = useState({});
  const [total, totalCounts] = useState(0);

  // Function to increment count for a specific menu item
  const incrementCount = (id) => {
    setCounts(prevCounts => {
      const updatedCounts = {...prevCounts};
      updatedCounts[id] = (updatedCounts[id] || 0) + 1;
      calculateTotal(updatedCounts);
      return updatedCounts;
    });
  };

  // Function to decrement count for a specific menu item
  const decrementCount = (id) => {
    setCounts(prevCounts => {
      const updatedCounts = {...prevCounts};
      if (updatedCounts[id] && updatedCounts[id] > 0) {
        updatedCounts[id] -= 1;
      }
      calculateTotal(updatedCounts);
      return updatedCounts;
    });
  };

  // Function to clear count for all menu items
  const clearAllCounts = () => {
    setCounts({});
    totalCounts(0);
  };

  const calculateTotal = (updatedCounts) => {
    let totalPrice = 0;
    menuItems.forEach(item => {
      totalPrice += (updatedCounts[item.id] || 0) * item.price;
    });
    totalCounts(totalPrice.toFixed(2));
  };

  const showAlert = () => {
    if (Object.keys(counts).length === 0) {
      alert("No items in cart");
    } else {
      let cartItems = [];
      menuItems.forEach(item => {
        if (counts[item.id]) {
          cartItems.push({
            title: item.title,
            quantity: counts[item.id]
          });
        }
      });
  
      if (cartItems.length > 0) {
        let items = "Order Placed \n";
        cartItems.forEach(cartItem => {
          items += cartItem.quantity + " " +cartItem.title+"\n";
        });
        alert(items);
      }
    }
  };
  

  return (
    <div>
      <MenuHeader
        title={menuHeader[0].title}
        logo={menuHeader[0].logo}
        resturant={menuHeader[0].resturant}
        description={menuHeader[0].description}
      />

<div className="menu">
    {menuItems.map(item => (
        <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
            count={counts[item.id] || 0}
            incrementCount={() => incrementCount(item.id)}
            decrementCount={() => decrementCount(item.id)}
        />
    ))}
</div>

      <div className="cart">
        <p>Subtotal: ${total.toFixed(2)}</p>
        <button onClick={showAlert}>Order</button>
        <button onClick={clearAllCounts}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
