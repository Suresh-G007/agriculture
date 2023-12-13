// CropList.js

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../Styles/CropList.css';


const CropList = ({ data, filterText, addToCard }) => {
  const [modalImage, setModalImage] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const cropsPerPage = 12; // Updated to show 12 items per page

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeDetails = () => {
    setModalImage(null);
    setSelectedCrop(null);
  };

  const openDetails = (crop) => {
    setSelectedCrop(crop);
  };

  const filteredData = data && Array.isArray(data) ? data.filter((crop) =>
    crop.crop_name.toLowerCase().includes(filterText.toLowerCase())
  ) : [];

  const pageCount = Math.ceil(filteredData.length / cropsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayedCrops = filteredData
    .slice(pageNumber * cropsPerPage, (pageNumber + 1) * cropsPerPage);

  return (
    <div className="crop-list-container">
      <h1 className='crop-header'>Crop List</h1>
      <div className="crop-cards-container">
        {displayedCrops.map((crop) => (
          <div key={crop.id} className="crop-card">
            <img src={crop.thumbnails[0]?.image} alt={crop.crop_name} onClick={() => openDetails(crop)} />
            <div className="crop-name">{crop.crop_name}</div>
            <button onClick={() => addToCard(crop)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeDetails}>&times;</span>
            <img src={modalImage} alt="Crop Image" />
          </div>
        </div>
      )}

  
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default CropList;
