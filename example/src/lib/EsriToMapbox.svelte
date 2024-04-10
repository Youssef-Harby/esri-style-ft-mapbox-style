<script lang="ts">
  const esriBaseUrl =
    "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer";

  (async () => {
    try {
      const mapboxStyle = await constructMapboxStyleFromEsri(esriBaseUrl);
      console.log(
        "Converted Mapbox Style:",
        JSON.stringify(mapboxStyle, null, 2)
      );
    } catch (error) {
      console.error("Error converting Esri style to Mapbox style:", error);
    }
  })();

  import { constructMapboxStyleFromEsri } from "@esri-style-ft-mapbox-style/esriToMapbox";
</script>
