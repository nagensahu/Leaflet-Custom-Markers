({
jsLoaded: function(component, event, helper) {
    var lat;
    var lng;
    lat = parseFloat("43.525517");
    lng = parseFloat("-96.738465");
    
    //create Map
    var map = helper.createMap(lat, lng);
    
    // Add marker with default icon
    var newIcon = helper.getIcon();
   	L.marker([lat, lng], {icon: newIcon}).addTo(map)
                    .bindPopup('The Location');
    //Add Marker with leaf Icon
    var leafIcon = helper.getIcon(
    		{icon: 'leaf',
            markerColor: 'red'}
    );
    L.marker(["43.527414", "-96.741249"], {icon: leafIcon}).addTo(map)
                    .bindPopup('The Location');
    //Add Marker with users Icon
    var userIcon = helper.getIcon(
    		{icon: 'users',
            markerColor: 'green'}
    );
    L.marker(["43.526052", "-96.736065"], {icon: userIcon}).addTo(map)
                    .bindPopup('The Location');
    
  //Add Marker with fcc Icon
    var fccIcon = helper.getIcon(
    		{icon: 'free-code-camp'}
    );
    L.marker(["43.526025", "-96.739927"], {icon: fccIcon}).addTo(map)
                    .bindPopup('The Location');
},
    faloaded: function(component, event, helper){
        console.log('font awesome ready');
    },
    
    leafloaded: function(component, event, helper){
        console.log('leaflet css ready');
    },
    amloaded: function(component, event, helper){
        console.log('awesome markers css ready');
    }
})