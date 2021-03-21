
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "StreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "NYSDECListedSites_1": {
            "type": "geojson",
            "data": json_NYSDECListedSites_1
        }
                    ,
        "TCEBFProjectArea_2": {
            "type": "geojson",
            "data": json_TCEBFProjectArea_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_StreetMap_0_0",
            "type": "raster",
            "source": "StreetMap_0"
        },
        {
            "id": "lyr_NYSDECListedSites_1_0",
            "type": "fill",
            "source": "NYSDECListedSites_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#8d5a99'}
        }
,
        {
            "id": "lyr_TCEBFProjectArea_2_0",
            "type": "fill",
            "source": "TCEBFProjectArea_2",
            "layout": {},
            "paint": {'fill-opacity': 0.283, 'fill-color': '#b9b27e'}
        }
],
}