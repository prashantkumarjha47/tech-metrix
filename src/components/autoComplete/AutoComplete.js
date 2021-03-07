import React, { useState, useContext, memo } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";

import { getTime } from "utils/formatter";
import { Context } from "store/context";
import { setHistory } from "store/actions";
import { classnames } from "utils/helper";
import "./AutoComplete.scss";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function AutoComplete() {
  const [address, setAddress] = useState("");
  const { dispatch } = useContext(Context);
  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        const location = {
          address,
          ...latLng,
          time: getTime(),
        };
        dispatch(setHistory(location));
      })
      .catch((error) => console.error("Error", error));
  };

  const handleCloseClick = () => {
    setAddress("");
  };

  const handleError = (status, clearSuggestions) => {
    clearSuggestions();
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      onError={handleError}
      debounce={600}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="search__search-bar-container">
          <div className="search__search-input-container">
            <input
              {...getInputProps({
                placeholder: "Search Places...",
                className: "search__search-input",
              })}
            />
            {address.length > 0 && (
              <button
                className="search__clear-button"
                onClick={handleCloseClick}
              >
                x
              </button>
            )}
          </div>
          {suggestions.length > 0 && (
            <div className="search__autocomplete-container">
              {suggestions.map((suggestion, index) => {
                const className = classnames("search__suggestion-item", {
                  "search__suggestion-item--active": suggestion.active,
                });
                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, { className })}
                  >
                    <strong>{suggestion.formattedSuggestion.mainText}</strong>{" "}
                    <small>
                      {suggestion.formattedSuggestion.secondaryText}
                    </small>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
  libraries: ["places"],
})(memo(AutoComplete));
