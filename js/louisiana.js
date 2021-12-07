var L, $, carto, louisiana_map = L.map("louisiana-map", {
    center: [31, -92],
    zoom: 8,
    maxBounds: [
        [0, -100],
        [60, -60]
    ]
});
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
    minZoom: 7,
    maxZoom: 18
}).addTo(louisiana_map);

function onEachFeature(e, o) {
    var r = "";
    r += "District: " + e.properties.DISTRICT + "<br>", o.bindPopup(r), o.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    })
}

function highlightFeature(e) {
    var o = e.target;
    o.setStyle({
        weight: 2,
        outline: "yellow",
        fillOpacity: 0
    })
}

function resetHighlight(e) {
    e.target.setStyle({
        fill: "white",
        color: "white",
        weight: .5,
        opacity: 1,
        fillOpacity: .2
    })
}

function zoomToFeature(e) {
    louisiana_map.fitBounds(e.target.getBounds())
}
var promise = $.getJSON("data/Louisianav2.geojson");
promise.then(function(e) {
    var o = L.geoJson(e, {
            filter: function(e, o) {
                return 19700 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#303AF2",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        r = L.geoJson(e, {
            filter: function(e, o) {
                return 19701 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#F21628",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        t = L.geoJson(e, {
            filter: function(e, o) {
                return 19800 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#303AF2",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        a = L.geoJson(e, {
            filter: function(e, o) {
                return 19801 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#F21628",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        n = L.geoJson(e, {
            filter: function(e, o) {
                return 19900 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#303AF2",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        c = L.geoJson(e, {
            filter: function(e, o) {
                return 19901 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#F21628",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        i = L.geoJson(e, {
            filter: function(e, o) {
                return 20000 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#303AF2",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        l = L.geoJson(e, {
            filter: function(e, o) {
                return 20001 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#F21628",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        u = L.geoJson(e, {
            filter: function(e, o) {
                return 20100 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#303AF2",
                color: "white",
                weight: .5,
                opacity: 1
            }
        }),
        q = L.geoJson(e, {
            filter: function(e, o) {
                return 20101 == e.properties.TAG
            },
            onEachFeature: onEachFeature,
            style: {
                fillColor: "#F21628",
                color: "white",
                weight: .5,
                opacity: 1
            }
        });
    $("#louisiana-static-1970").click(function() {
        louisiana_map.addLayer(o), louisiana_map.addLayer(r), louisiana_map.removeLayer(t), louisiana_map.removeLayer(a), louisiana_map.removeLayer(n), louisiana_map.removeLayer(c), louisiana_map.removeLayer(i), louisiana_map.removeLayer(l), louisiana_map.removeLayer(u), louisiana_map.removeLayer(q), $("#louisiana-static-1970").css("border", "5px groove red"), $("#louisiana-static-1980").css("border", "5px hidden lightgray"), $("#louisiana-static-1990").css("border", "5px hidden lightgray"), $("#louisiana-static-2000").css("border", "5px hidden lightgray"), $("#louisiana-static-2010").css("border", "5px hidden lightgray")
    }), $("#louisiana-static-1980").click(function() {
        louisiana_map.addLayer(t), louisiana_map.addLayer(a), louisiana_map.removeLayer(o), louisiana_map.removeLayer(r), louisiana_map.removeLayer(n), louisiana_map.removeLayer(c), louisiana_map.removeLayer(i), louisiana_map.removeLayer(l), louisiana_map.removeLayer(u), louisiana_map.removeLayer(q), $("#louisiana-static-1970").css("border", "5px hidden lightgray"), $("#louisiana-static-1980").css("border", "5px groove red"), $("#louisiana-static-1990").css("border", "5px hidden lightgray"), $("#louisiana-static-2000").css("border", "5px hidden lightgray"), $("#louisiana-static-2010").css("border", "5px hidden lightgray")
    }), $("#louisiana-static-1990").click(function() {
        louisiana_map.addLayer(n), louisiana_map.addLayer(c), louisiana_map.removeLayer(o), louisiana_map.removeLayer(r), louisiana_map.removeLayer(t), louisiana_map.removeLayer(a), louisiana_map.removeLayer(i), louisiana_map.removeLayer(l), louisiana_map.removeLayer(u), louisiana_map.removeLayer(q), $("#louisiana-static-1970").css("border", "5px hidden lightgray"), $("#louisiana-static-1980").css("border", "5px hidden lightgray"), $("#louisiana-static-1990").css("border", "5px groove red"), $("#louisiana-static-2000").css("border", "5px hidden lightgray"), $("#louisiana-static-2010").css("border", "5px hidden lightgray")
    }), $("#louisiana-static-2000").click(function() {
        louisiana_map.addLayer(i), louisiana_map.addLayer(l), louisiana_map.removeLayer(o), louisiana_map.removeLayer(r), louisiana_map.removeLayer(t), louisiana_map.removeLayer(a), louisiana_map.removeLayer(n), louisiana_map.removeLayer(c), louisiana_map.removeLayer(u), louisiana_map.removeLayer(q), $("#louisiana-static-1970").css("border", "5px hidden lightgray"), $("#louisiana-static-1980").css("border", "5px hidden lightgray"), $("#louisiana-static-1990").css("border", "5px hidden lightgray"), $("#louisiana-static-2000").css("border", "5px groove red"), $("#louisiana-static-2010").css("border", "5px hidden lightgray")
    }), $("#louisiana-static-2010").click(function() {
        louisiana_map.addLayer(u), louisiana_map.addLayer(q), louisiana_map.removeLayer(o), louisiana_map.removeLayer(r), louisiana_map.removeLayer(t), louisiana_map.removeLayer(a), louisiana_map.removeLayer(n), louisiana_map.removeLayer(c), louisiana_map.removeLayer(i), louisiana_map.removeLayer(l), $("#louisiana-static-1970").css("border", "5px hidden lightgray"), $("#louisiana-static-1980").css("border", "5px hidden lightgray"), $("#louisiana-static-1990").css("border", "5px hidden lightgray"), $("#louisiana-static-2000").css("border", "5px hidden lightgray"), $("#louisiana-static-2010").css("border", "5px groove red")
    })
});