// CropDetails.js

import React from 'react';

const CropDetails = ({ crop, closeModal }) => {
  return (
    <div className="crop-details-container">
      <h2>Crop Details</h2>
      <div>
        <img src={crop.thumbnails[0]?.image} alt={crop.crop_name} />
        <div>{crop.crop_name}</div>
        {/* Add other details you want to display */}
      </div>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default CropDetails;
