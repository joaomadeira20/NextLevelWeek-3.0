import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'
import mapMarker from './src/images/map-marker.png'
import { useFonts } from 'expo-font'
import Routes from './src/routes'
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'
export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })
  if(!fontsLoaded){
    return null
  }

  return (
    <Routes />
  );
}

