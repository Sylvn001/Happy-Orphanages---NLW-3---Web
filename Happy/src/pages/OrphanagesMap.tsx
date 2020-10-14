import React from 'react'; 
import {Link} from 'react-router-dom';
import mapMakerImg from '../imagens/Map.svg'
import '../styles/pages/orphanages-map.css'
import {Map, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import {FiPlus} from 'react-icons/fi'

function OrphanageMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p> Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Presidente Prudente</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-22.1037625,-51.4154552]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            > 
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */ /* If uou are testing this code in github, remove this coments */  }
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>
    );
}

export default OrphanageMap