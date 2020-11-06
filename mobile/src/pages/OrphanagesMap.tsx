import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'
import mapMarker from '../images/map-marker.png'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';


interface Orphanage {
    id: number
    name: string
    latitude: number
    longitude: number
}
export default function OrphanagesMap() {
    const navigation = useNavigation()
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    useFocusEffect(() => {
        api.get('/orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, [])
    function handleNavigateToOrphanageDetails(id:number) {
        navigation.navigate('OrphanageDetails',{
            id
        })
    }
    function handleNavigateToCreateOrphanage() {
        navigation.navigate('SelectMapPosition')
    }
    return (
        <View style={styles.container}>

            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -22.9758618,
                    longitude: -49.8649668,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}

            >
                {orphanages.map(orfanato => {
                    return (
                        <Marker
                            key={orfanato.id}
                            icon={mapMarker}
                            calloutAnchor={{
                                x: 2.7,
                                y: 0.8
                            }}
                            coordinate={{
                                latitude: orfanato.latitude,
                                longitude: orfanato.longitude,
                            }}
                        >
                            <Callout tooltip={true} onPress={()=>handleNavigateToOrphanageDetails(orfanato.id)}>
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>{orfanato.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    )
                })}
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
                <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name="plus" size={20} color="#FFF" />
                </RectButton>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    calloutContainer: {
        width: 168,
        height: 46,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.8)',
        justifyContent: 'center',

    },
    calloutText: {
        color: '#0089A5',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 24,

        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3
    },
    footerText: {
        color: '#8FA8B3',
        fontFamily: 'Nunito_700Bold'
    },
    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center'
    },

});
