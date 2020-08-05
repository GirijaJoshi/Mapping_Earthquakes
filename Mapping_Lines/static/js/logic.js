// Add console.log to check to see if our code is working.
console.log("working");

// coordinates for the center of the map to 
// somewhere between LAX and SFO by adding [36.1733, -120.1794] in the

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

/*
// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
*/ 

// SFO to JFK via AUS
let line = [
  [33.9416, -118.4085],
  [30.1900,  -97.6687],
  [43.6777, -79.6248],
  [40.6435, -73.7821]
];

/*
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);
*/

// create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops,
// Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ).
// Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.

L.polyline(line, {
  color: "blue",
  fillOpacity: 0.5,
  weight: 4,
  dashArray: '5,15'
}).addTo(map);


// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecomm

// mapbox://styles/mapbox/outdoors-v11

// We create the tile layer that will be the background of our map.
// 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/
//'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles
// mapbox://styles/mapbox/light-v10

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
