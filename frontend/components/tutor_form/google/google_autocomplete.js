export const initAutocomplete = () => {
  return new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')), {types: ['geocode', 'establishment']});
};

export const geolocate = (autocomplete) => {
  return (autocomplete) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  };
};

export const addAptNumToAddress = (address, apt_num) => {
  address_components = address.split(",");

  if(apt_num !== "") {
   address_components = address_components
    .slice(0, 1)
    .concat(apt_num, address_components.slice(-3));
  }
  return address_components.join(",");
};

export const getLocalityAndAddress = () => {
     let place = this.getPlace();
     let locality = "";
     let componentForm = { locality: 'long_name' };

    for (var i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        locality = place.address_components[i][componentForm[addressType]];
        console.log(locality);
      }
    }

    return callback({ locality: locality, address: place.formatted_address });
}
