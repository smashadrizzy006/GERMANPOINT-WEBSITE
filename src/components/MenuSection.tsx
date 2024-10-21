import React, { useState } from 'react';
import { CartItem } from '../App';

const menuCategories = [
  {
    name: "German Specialties",
    items: [
      { name: 'German Sausage Platter', price: 1200, description: 'Assorted German sausages', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Wiener Schnitzel', price: 1300, description: 'Served with your Choice of Fries, Potato or Green Salad & tartar sauce', image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Hunter Style Schnitzel', price: 1300, description: 'Topped with mushroom sauce. Served with your Choice of fries or mashed potato', image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Breakfast",
    items: [
      { name: 'Breakfast', price: 900, description: 'Bacon, Eggs, Sausages, Beans & Toast', image: 'https://images.unsplash.com/photo-1533920379810-6bedac961555?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Soups",
    items: [
      { name: 'Tomato Soup', price: 600, description: 'Classic tomato soup', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Beef Goulash', price: 900, description: 'Served with baguette slices', image: 'https://images.unsplash.com/photo-1633436374961-09b92742047b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Light Meals & Snacks",
    items: [
      { name: 'Chips', price: 350, description: 'Classic French fries', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Roast Potatoes', price: 500, description: 'Crispy roasted potatoes', image: 'https://images.unsplash.com/photo-1592837101613-35f33e978e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Fried Veg Samosa (large)', price: 100, description: 'Vegetable-filled pastry', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Sausage Beef / Pork', price: 100, description: 'Choice of beef or pork sausage', image: 'https://images.unsplash.com/photo-1588347785102-2944ba63d0c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Hotdog Beef or Pork', price: 500, description: 'Classic hotdog with choice of meat', image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Chicken Nuggets with Chips', price: 600, description: 'Crispy chicken nuggets served with fries', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Chicken",
    items: [
      { name: 'Grilled Chicken', price: 1200, description: 'Served with sautéed onions and tomatoes', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Quarter Chicken', price: 650, description: 'Grilled quarter chicken', image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Half Chicken', price: 950, description: 'Grilled half chicken', image: 'https://images.unsplash.com/photo-1598515214146-dab39da1243d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Chicken Burger with Cheese', price: 850, description: 'Garnished with sautéed onions and tomatoes', image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Beef",
    items: [
      { name: 'Grilled Steaks', price: 1500, description: '300-400 g, cooked to your order', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'T-Bone', price: 1500, description: 'Classic T-bone steak', image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Rump', price: 1350, description: 'Flavorful rump steak', image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Pepper Steak', price: 1500, description: 'Steak with peppercorn sauce', image: 'https://images.unsplash.com/photo-1607116176195-b81b1f41f536?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Beef Burger with Cheese', price: 800, description: 'Garnished with sauté onions and tomato', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Fish",
    items: [
      { name: 'Fish and Chips', price: 1300, description: 'Traditional British Fish & Chips', image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Grilled Prawns', price: 1700, description: 'Plain, Pili Pili or Garlic', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Calamari', price: 950, description: 'Grilled or deep fried', image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Grilled Tilapia Fillet', price: 1350, description: 'Lemon or spicy', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Fish Fingers', price: 800, description: 'Served with your Choice of parsley potatoes, rice, fries or salad', image: 'https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Salads",
    items: [
      { name: 'Greek Salad', price: 800, description: 'With Feta Cheese', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Chicken Salad', price: 800, description: 'Fresh salad with grilled chicken', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Lamb",
    items: [
      { name: 'Lamb Chops', price: 1150, description: 'Served with your Choice of roast or mashed potatoes, vegetables & gravy', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Pork",
    items: [
      { name: 'Pork Chops', price: 1250, description: 'Served with your Choice of mashed or roast potatoes, veg & gravy', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
  {
    name: "Pasta",
    items: [
      { name: 'Spaghetti Bolognaise', price: 750, description: 'With Parmesan cheese', image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Spaghetti Diablo', price: 650, description: 'With olive oil, garlic, fresh chilies & Parmesan cheese', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ]
  },
];

interface MenuSectionProps {
  addToCart: (item: CartItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  return (
    <section id="menu" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-600">Our Menu</h2>
        <div className="flex flex-wrap justify-center mb-8 overflow-x-auto">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 m-2 rounded-full ${
                activeCategory === category.name
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-red-600 hover:bg-red-100'
              } transition duration-300`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories
            .find((category) => category.name === activeCategory)
            ?.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-red-600 font-bold">{item.price} Ksh</p>
                  <button
                    onClick={() => addToCart({ name: item.name, price: item.price, quantity: 1 })}
                    className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;