import React from 'react'
import ReactDOM from 'react-dom/client'
import MyMap from './Map.jsx'
import 'maplibre-gl/dist/maplibre-gl.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MyMap/>
	</React.StrictMode>,
)