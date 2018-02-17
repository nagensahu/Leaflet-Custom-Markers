# Leaflet-Custom-Markers
Custom Markers For Leaflet in Lightning Components

The approach to implementing this is in a Lightning component is broken down into:

1. Using the Fontawesome library as a static resource. Remember to add the webfonts and css in the static resource. Both are needed to create the icons.

2. Have the code dynamically generate the custom marker. Fontawesome generates icons using an html syntax like this
<i class="fas fa-user"></i>
This is essentially done dynamically within the L.Icon.extend function that will override your boring blue icon and add the Fontawesome icon in it. Most of the code in https://github.com/lvoogdt/Leaflet.awesome-markers can be re-used as it is to generate our icons. I created a function that generates an icon (parameterized) and returns it for use. The getIcon function in the helper handles the generation of icons.

3. Use the function to generate a new marker at a location using the L.marker function. E.g. -
//Add Marker with leaf Icon
var leafIcon = helper.getIcon(
      {icon: 'leaf',
      markerColor: 'red'}
);
L.marker(
      ["43.527414", "-96.741249"], 
      {icon: leafIcon}
).addTo(map).bindPopup('The Location');
