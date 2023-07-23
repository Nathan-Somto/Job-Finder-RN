import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '@rneui/base'
import MapView, { Marker } from 'react-native-maps'
import { useTheme } from '@rneui/themed'

export default function DetailsMap ({ lat, lng }) {
  const { theme } = useTheme()
  const mapRef = React.useRef(null)
  const [mapLoaded, setMapLoaded] = React.useState(false)
  React.useEffect(() => {
    if (mapLoaded && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: lat || 37.78825,
        longitude: lng || -122.4324,
        longitudeDelta: 0.045,
        latitudeDelta: 0.035
      })
    }
  }, [mapLoaded, lat, lng])
  function handleMapReady () {
    if (!mapLoaded) {
      setMapLoaded(true)
    }
  }
  return (
    <View style={styles.container}>
      <Text
        h2
        h2Style={{
          color: theme.colors.primary,
          fontSize: 20,
          fontWeight: '600',
          marginBottom: 15
        }}
      >
        Location :
      </Text>
      <MapView
        ref={mapRef}
        style={styles.mapStyles}
        initialRegion={{
          latitude: lat || 37.78825,
          longitude: lng || -122.4324,
          longitudeDelta: 0.045,
          latitudeDelta: 0.035
        }}
        loadingEnabled
        mapType="mutedStandard"
        loadingIndicatorColor={theme.colors.primary}
        onMapLoaded={handleMapReady}
      >
        <Marker
          coordinate={{
            longitude: lng,
            latitude: lat
          }}
          description={'Job Location'}
          draggable
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:
  {
    marginTop: 15,
    paddingHorizontal: 15
  },
  mapStyles: {
    flex: 1,
    height: 300,
    paddingHorizontal: 15,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: 'transparent'
  }
})
