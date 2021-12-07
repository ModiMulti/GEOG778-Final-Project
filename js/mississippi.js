var L, $, carto, mississippi_map = L.map("mississippi-map", {
    center: [32.5, -90],
    zoom: 8,
    maxBounds: [
        [0, -100],
        [60, -60]
    ]
});
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
    minZoom: 7,
    maxZoom: 18
}).addTo(mississippi_map);

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
    mississippi_map.fitBounds(e.target.getBounds())
}
var promise = $.getJSON("data/Mississippiv2.geojson");
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
    $("#mississippi-static-1970").click(function() {
        mississippi_map.addLayer(o), mississippi_map.addLayer(r), mississippi_map.removeLayer(t), mississippi_map.removeLayer(a), mississippi_map.removeLayer(n), mississippi_map.removeLayer(c), mississippi_map.removeLayer(i), mississippi_map.removeLayer(l), mississippi_map.removeLayer(u), mississippi_map.removeLayer(q), $("#mississippi-static-1970").css("border", "5px groove red"), $("#mississippi-static-1980").css("border", "5px hidden lightgray"), $("#mississippi-static-1990").css("border", "5px hidden lightgray"), $("#mississippi-static-2000").css("border", "5px hidden lightgray"), $("#mississippi-static-2010").css("border", "5px hidden lightgray")
    }), $("#mississippi-static-1980").click(function() {
        mississippi_map.addLayer(t), mississippi_map.addLayer(a), mississippi_map.removeLayer(o), mississippi_map.removeLayer(r), mississippi_map.removeLayer(n), mississippi_map.removeLayer(c), mississippi_map.removeLayer(i), mississippi_map.removeLayer(l), mississippi_map.removeLayer(u), mississippi_map.removeLayer(q), $("#mississippi-static-1970").css("border", "5px hidden lightgray"), $("#mississippi-static-1980").css("border", "5px groove red"), $("#mississippi-static-1990").css("border", "5px hidden lightgray"), $("#mississippi-static-2000").css("border", "5px hidden lightgray"), $("#mississippi-static-2010").css("border", "5px hidden lightgray")
    }), $("#mississippi-static-1990").click(function() {
        mississippi_map.addLayer(n), mississippi_map.addLayer(c), mississippi_map.removeLayer(o), mississippi_map.removeLayer(r), mississippi_map.removeLayer(t), mississippi_map.removeLayer(a), mississippi_map.removeLayer(i), mississippi_map.removeLayer(l), mississippi_map.removeLayer(u), mississippi_map.removeLayer(q), $("#mississippi-static-1970").css("border", "5px hidden lightgray"), $("#mississippi-static-1980").css("border", "5px hidden lightgray"), $("#mississippi-static-1990").css("border", "5px groove red"), $("#mississippi-static-2000").css("border", "5px hidden lightgray"), $("#mississippi-static-2010").css("border", "5px hidden lightgray")
    }), $("#mississippi-static-2000").click(function() {
        mississippi_map.addLayer(i), mississippi_map.addLayer(l), mississippi_map.removeLayer(o), mississippi_map.removeLayer(r), mississippi_map.removeLayer(t), mississippi_map.removeLayer(a), mississippi_map.removeLayer(n), mississippi_map.removeLayer(c), mississippi_map.removeLayer(u), mississippi_map.removeLayer(q), $("#mississippi-static-1970").css("border", "5px hidden lightgray"), $("#mississippi-static-1980").css("border", "5px hidden lightgray"), $("#mississippi-static-1990").css("border", "5px hidden lightgray"), $("#mississippi-static-2000").css("border", "5px groove red"), $("#mississippi-static-2010").css("border", "5px hidden lightgray")
    }), $("#mississippi-static-2010").click(function() {
        mississippi_map.addLayer(u), mississippi_map.addLayer(q), mississippi_map.removeLayer(o), mississippi_map.removeLayer(r), mississippi_map.removeLayer(t), mississippi_map.removeLayer(a), mississippi_map.removeLayer(n), mississippi_map.removeLayer(c), mississippi_map.removeLayer(i), mississippi_map.removeLayer(l), $("#mississippi-static-1970").css("border", "5px hidden lightgray"), $("#mississippi-static-1980").css("border", "5px hidden lightgray"), $("#mississippi-static-1990").css("border", "5px hidden lightgray"), $("#mississippi-static-2000").css("border", "5px hidden lightgray"), $("#mississippi-static-2010").css("border", "5px groove red")
    })
});