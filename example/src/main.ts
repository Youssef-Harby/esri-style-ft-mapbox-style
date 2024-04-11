import './app.css'
import App from './App.svelte'
import maplibregl from "maplibre-gl";

// Set the RTL text plugin once at the application level
maplibregl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  true
);

const app = new App({
  target: document.getElementById('app')!,
})

export default app
