import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView, { Circle, Marker, Region } from "react-native-maps";

const LocationSearch = () => {
  const [radius, setRadius] = useState(100); // in km
  const { width } = Dimensions.get("window");
  const [center, setCenter] = useState({ latitude: 23, longitude: 90 });
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCenter({ latitude, longitude });
      setRegion({
        latitude,
        longitude,
        latitudeDelta: getDeltaFromRadius(radius),
        longitudeDelta: getDeltaFromRadius(radius),
      });
    })();
  }, []);

  // When radius changes, update the map zoom
  useEffect(() => {
    if (!center) return;

    setRegion({
      latitude: center.latitude,
      longitude: center.longitude,
      latitudeDelta: getDeltaFromRadius(radius),
      longitudeDelta: getDeltaFromRadius(radius),
    });
  }, [radius]);

  const getDeltaFromRadius = (radiusInKm: number) => {
    const oneKmInDegrees = 1 / 111; // 1 degree ≈ 111 km
    return radiusInKm * oneKmInDegrees * 2; // padding factor
  };

  return (
    <View className="items-center pt-10">
      <View
        className="rounded-3xl overflow-hidden border"
        style={{ width: width - 30, backgroundColor: "#fff" }}
      >
        {/* Radius Slider Container */}
        <LinearGradient colors={["#e0c9ff", "#f4e8ff"]}>
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
        </LinearGradient>

        {/* Map */}
        {region && (
          <MapView
            style={{ height: 350, width: "100%" }}
            region={region} // controlled region
          >
            <Marker coordinate={center} />
            <Circle
              center={center}
              radius={radius * 950}
              strokeColor="rgba(147, 51, 234, 0.6)"
              fillColor="rgba(147, 51, 234, 0.2)"
            />
          </MapView>
        )}
      </View>
    </View>
  );
};

export default LocationSearch;
