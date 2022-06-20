# Store Locator

A drop-in module for a website that shows a google map with list of stores in the sidebar. 

![Gif](/demo.gif?raw=true)

[Live Demo](https://microapps.github.io/store-locator/)

## Features
- draws all stores on a map
- shows a list of stores in the side bar providing map navigation
- determines user location and sorts the stores, showing nearest first
- shows a distance to each store form a given location (walking or driving)
- allows to search for nearest store to a given location
- provides a direction link to each store
- allows to set custom markers

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/microapps/store-locator@latest/dist/store-locator.css">
<script src="https://cdn.jsdelivr.net/gh/microapps/store-locator@latest/dist/store-locator.js"></script>
```

## Usage

- Include [store-locator.js](/dist/store-locator.js?raw=true) and [store-locator.css](/dist/store-locator.css?raw=true) on your page
- Add a container where you want the map to be rendered
- Initialize the script


```html
<div id="my-store-locator">
      <!-- map will be rendered here-->
</div>
<script src="store-locator.js"></script>
<script>
  storeLocator({
    container: 'store-locator',
    apiKey: 'GOOGLE_MAPS_API_KEY',
    center: {lat: 42.382387, lng: -71.116648},
    travelMode: 'WALKING',
    unitSystem: 'METRIC',
    storeMarkerIcon: './storeIcon.png',
    homeMarkerIcon: './homeIcon.png',
    markerIconSize: [40, 62],
    limit: 1,
    searchHint: "Not all stores sell our whole range so if you're looking for a specific product we recommend you call ahead.",
    loadStores: function(location) {
      // location: {lat, lng}
      // you can load your stores based on location dynamically
      return Promise.resolve([
        {
          name: 'PAEZ FLAGSHIP STORE EL BORN',
          address: 'Carrer de les Caputxes, 2, 08003 Barcelona, Spain',
          location: {lat: 41.3833695, lng: 2.1814855999999736},
          website: 'http://microapps.com'
        },
        {
          name: 'PAEZ STORE CC. Maremagnum',
          address: "Moll d'Espanya, 5, 08039 Barcelona, Spain",
          location: {lat: 41.3752, lng: 2.18286999999998}
        }
      ])
    }
  })
</script>
```

## Configuration options

| Option | Description | Default |
| --- | --- | --- |
| `container` | id of the element where the map will be rendered
| `stores` | an array of stores to render on a map `[{name, address, location: {lat, lng}, website}]`
| `loadStores` | a function that returns an array of stores directly or a Promise. It accepts a location `{lat, lng}` param and is called every time location autocomplete is triggered
| `zoom` | initial map zoom | 6
| `center` | initial map center | `{lat: 39.6433995, lng: -6.4396778}`
| `storeMarkerIcon` | custom store marker icon
| `homeMarkerIcon` | custom current location marker icon
| `markerIconSize` | an array of [x, y] to scale marker icon
| `searchHint` | text rendered after a search input
| `travelMode` | the mode used to calculate distance `WALKING` or `DRIVING` | `DRIVING`
| `unitSystem` | used to show distance `METRIC` or `IMPERIAL` | `METRIC`
| `limit` | shows only first n closest results to the location | 10
| `homeLocationHint` |  text that appears in an info window of home location marker | Current location
| `farAwayMarkerOpacity` | an opacity of a marker that is too far away (determined by `limit`) | 0.6
| `fullWidthMap` | changes the appearance to make the map full width and store list as an overlay on top of it

