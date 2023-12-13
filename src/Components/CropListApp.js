// CropListApp.js

import React, { useEffect, useState } from 'react';
import CropList from './CropList';
import CropCard from './CropCard';
import '../Styles/CropList.css'; // Import the CSS file for styling

const CropListApp = () => {
  const [cropData, setCropData] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [cardCrops, setCardCrops] = useState([]);
  const [showCardContainer, setShowCardContainer] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json')
      .then((response) => response.json())
      .then((data) => {
        setCropData(data.data);
        console.log(data); // Log the data to the console
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const addToCard = (crop) => {
    setCardCrops((prevCrops) => [...prevCrops, crop]);
  };

  const toggleCardContainer = () => {
    setShowCardContainer((prevShowCardContainer) => !prevShowCardContainer);
  };

  return (
    <div className="crop-list-app">
      <div className="header-list">Crop List Header</div>
      <input
        type="text"
        placeholder="Search Crop..."
        value={filterText}
        className="search"
        onChange={handleFilterChange}
        src='./'
      />
      <button className="add-card" onClick={toggleCardContainer}>
        {showCardContainer ? 'Hide Card' : 'Show Card'}
      </button>
      {showCardContainer && (
        <div>
          <h1>Cart</h1>
          <div className="card-container">
            {cardCrops.map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        </div>
      )}
      <CropList data={cropData} filterText={filterText} addToCard={addToCard} />
      <div className="footer">Crop List Footer</div>
    </div>
  );
};

export default CropListApp;
