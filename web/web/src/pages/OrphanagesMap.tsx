import React from 'react'

import { Link } from 'react-router-dom'
import '../styles/pages/orphanages-map.css'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import mapMarkerImg from '../images/map-marker.svg'
import 'leaflet/dist/leaflet.css'
function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Esolha um orfanato no mapa</h2>
                    <p>Voce ja deu uma olhada no meu https://github.com/joaomadeira20 ?</p>
                </header>
                <footer>
                    <strong>Ourinhos</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
                center={[-22.9798925, -49.919424]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}>
                {/* <TileLayer url= "https://a.title.openstreetmap.org/{z}/{x}/{y}.png " /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap