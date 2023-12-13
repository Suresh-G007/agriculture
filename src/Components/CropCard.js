// CropCard.js

import React from 'react';

const CropCard = ({ crop }) => {
  return (
    <div className="crop-card">
      <img src={crop.thumbnails[0]?.image} alt={crop.crop_name} />
      <div className="crop-name">{crop.crop_name}</div>
    </div>
  );
};

export default CropCard;
