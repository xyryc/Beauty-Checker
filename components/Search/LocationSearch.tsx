// import Slider from "@react-native-community/slider";
// import { LinearGradient } from "expo-linear-gradient";
// import * as Location from "expo-location";
// import React, { useEffect, useState } from "react";
// import { Dimensions, Text, View, StyleSheet } from "react-native";
// import MapboxGL from "@rnmapbox/maps";

import { View } from "react-native";

// Initialize Mapbox with your access token
// MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN || "");

const LocationSearch = () => {
  // const [radius, setRadius] = useState(100); // in km
  // const { width } = Dimensions.get("window");
  // const [center, setCenter] = useState<[number, number]>([90, 23]); // [longitude, latitude]
  // const [zoomLevel, setZoomLevel] = useState(8);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") return;

  //     const location = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = location.coords;
  //     setCenter([longitude, latitude]); // Mapbox uses [longitude, latitude]
  //   })();
  // }, []);

  // // When radius changes, update the map zoom
  // useEffect(() => {
  //   const zoom = getZoomFromRadius(radius);
  //   setZoomLevel(zoom);
  // }, [radius]);

  // const getZoomFromRadius = (radiusInKm: number) => {
  //   // Mapbox zoom formula: zoom = log2(worldSize / (radius * metersPerPixel))
  //   // Simplified approximation for better UX
  //   if (radiusInKm <= 5) return 12;
  //   if (radiusInKm <= 10) return 11;
  //   if (radiusInKm <= 20) return 10;
  //   if (radiusInKm <= 50) return 9;
  //   if (radiusInKm <= 100) return 8;
  //   return 7;
  // };

  // // Helper function to create a circle GeoJSON
  // const createCircleGeoJSON = (
  //   centerCoords: [number, number],
  //   radiusInKm: number
  // ) => {
  //   const points = 64;
  //   const coords = [];
  //   const distanceX = radiusInKm / (111.32 * Math.cos((centerCoords[1] * Math.PI) / 180));
  //   const distanceY = radiusInKm / 111.32;

  //   for (let i = 0; i < points; i++) {
  //     const theta = (i / points) * (2 * Math.PI);
  //     const x = distanceX * Math.cos(theta);
  //     const y = distanceY * Math.sin(theta);
  //     coords.push([centerCoords[0] + x, centerCoords[1] + y]);
  //   }
  //   coords.push(coords[0]); // Close the circle

  //   return {
  //     type: "Feature",
  //     geometry: {
  //       type: "Polygon",
  //       coordinates: [coords],
  //     },
  //     properties: {},
  //   };
  // };

  return (
    <View className="items-center pt-10">
      {/* <View
        className="rounded-3xl overflow-hidden border"
        style={{ width: width - 30, backgroundColor: "#fff" }}
      > */}
      {/* Radius Slider Container */}
      {/* <LinearGradient colors={["#e0c9ff", "#f4e8ff"]}>
          <View className="px-4 py-3">
            <View className="flex-row justify-between mb-2">
              <Text className="text-purple-700 font-semibold text-base">
                Radius
              </Text>
              <Text className="text-purple-700 font-semibold text-base">
                {radius} km
              </Text>
            </View>
            <Slider
              minimumValue={1}
              maximumValue={100}
              step={1}
              value={radius}
              onValueChange={(val) => setRadius(val)}
              minimumTrackTintColor="#6200EE"
              maximumTrackTintColor="#CEB0FA"
              thumbTintColor="#B78AF7"
            />
          </View>
        </LinearGradient> */}

      {/* Map */}
      {/* <MapboxGL.MapView
          style={{ height: 350, width: "100%" }}
          styleURL={MapboxGL.StyleURL.Street}
        >
          <MapboxGL.Camera
            zoomLevel={zoomLevel}
            centerCoordinate={center}
            animationDuration={500}
          /> */}

      {/* Marker at center */}
      {/* <MapboxGL.PointAnnotation id="centerMarker" coordinate={center} /> */}

      {/* Circle showing radius */}
      {/* <MapboxGL.ShapeSource
            id="radiusCircle"
            shape={createCircleGeoJSON(center, radius)}
          >
            <MapboxGL.FillLayer
              id="radiusCircleFill"
              style={{
                fillColor: "rgba(147, 51, 234, 0.2)",
                fillOutlineColor: "rgba(147, 51, 234, 0.6)",
              }}
            />
            <MapboxGL.LineLayer
              id="radiusCircleBorder"
              style={{
                lineColor: "rgba(147, 51, 234, 0.6)",
                lineWidth: 2,
              }}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView> */}
      {/* </View> */}
    </View>
  );
};

export default LocationSearch;
