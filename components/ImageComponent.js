import React, { useState } from "react";
import axios from "axios";

export const ImageComponent = () => {
  const [image, setImage] = useState(false);
  const [imageRequested, setImageRequested] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

 
  const sendTheRequest = () => {
    const url = `https://pixabay.com/api/?key=19847785-b60cd632b0bdc8673af8affae&q=${searchTerm}&image_type=photo`;
    axios.get(url).then(({data}) => {
      setImage(data.hits[0].previewURL)
    });
  };

  return (
    
    <div>
      {image ? (
          <img class="ui small image" src={image}></img>
      ) : (
        <button
          onClick={() => setImageRequested(true)}
          className="ui positive basic button block"
        >
          Add an image
        </button>
      )}
      {imageRequested && (
        <div>
          <label> describe what the photo should be about? </label>
          <div class="ui  input">
            <input
              type="text"
              placeholder="..."
              onChange={(e) => {
                setSearchTerm(e.currentTarget.value);
              }}
            />
          </div>
          <button
            onClick={() => sendTheRequest(true)}
            className="ui positive basic button block"
          >
            Add an image
          </button>
        </div>
      )}
    </div>
  );
};
