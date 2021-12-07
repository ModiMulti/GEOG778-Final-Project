var L, $, carto, georgia_map = L.map("georgia-map", {
    center: [32.5, -84],
    zoom: 8,
    maxBounds: [
        [0, -100],
        [60, -60]
    ]
});
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
    minZoom: 7,
    maxZoom: 18
}).addTo(georgia_map);

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
    georgia_map.fitBounds(e.target.getBounds())
}
var promise = $.getJSON("data/Georgiav2.geojson");
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
    $("#georgia-static-1970").click(function() {
        georgia_map.addLayer(o), georgia_map.addLayer(r), georgia_map.removeLayer(t), georgia_map.removeLayer(a), georgia_map.removeLayer(n), georgia_map.removeLayer(c), georgia_map.removeLayer(i), georgia_map.removeLayer(l), georgia_map.removeLayer(u), georgia_map.removeLayer(q), $("#georgia-static-1970").css("border", "5px groove red"), $("#georgia-static-1980").css("border", "5px hidden lightgray"), $("#georgia-static-1990").css("border", "5px hidden lightgray"), $("#georgia-static-2000").css("border", "5px hidden lightgray"), $("#georgia-static-2010").css("border", "5px hidden lightgray")
    }), $("#georgia-static-1980").click(function() {
        georgia_map.addLayer(t), georgia_map.addLayer(a), georgia_map.removeLayer(o), georgia_map.removeLayer(r), georgia_map.removeLayer(n), georgia_map.removeLayer(c), georgia_map.removeLayer(i), georgia_map.removeLayer(l), georgia_map.removeLayer(u), georgia_map.removeLayer(q), $("#georgia-static-1970").css("border", "5px hidden lightgray"), $("#georgia-static-1980").css("border", "5px groove red"), $("#georgia-static-1990").css("border", "5px hidden lightgray"), $("#georgia-static-2000").css("border", "5px hidden lightgray"), $("#georgia-static-2010").css("border", "5px hidden lightgray")
    }), $("#georgia-static-1990").click(function() {
        georgia_map.addLayer(n), georgia_map.addLayer(c), georgia_map.removeLayer(o), georgia_map.removeLayer(r), georgia_map.removeLayer(t), georgia_map.removeLayer(a), georgia_map.removeLayer(i), georgia_map.removeLayer(l), georgia_map.removeLayer(u), georgia_map.removeLayer(q), $("#georgia-static-1970").css("border", "5px hidden lightgray"), $("#georgia-static-1980").css("border", "5px hidden lightgray"), $("#georgia-static-1990").css("border", "5px groove red"), $("#georgia-static-2000").css("border", "5px hidden lightgray"), $("#georgia-static-2010").css("border", "5px hidden lightgray")
    }), $("#georgia-static-2000").click(function() {
        georgia_map.addLayer(i), georgia_map.addLayer(l), georgia_map.removeLayer(o), georgia_map.removeLayer(r), georgia_map.removeLayer(t), georgia_map.removeLayer(a), georgia_map.removeLayer(n), georgia_map.removeLayer(c), georgia_map.removeLayer(u), georgia_map.removeLayer(q), $("#georgia-static-1970").css("border", "5px hidden lightgray"), $("#georgia-static-1980").css("border", "5px hidden lightgray"), $("#georgia-static-1990").css("border", "5px hidden lightgray"), $("#georgia-static-2000").css("border", "5px groove red"), $("#georgia-static-2010").css("border", "5px hidden lightgray")
    }), $("#georgia-static-2010").click(function() {
        georgia_map.addLayer(u), georgia_map.addLayer(q), georgia_map.removeLayer(o), georgia_map.removeLayer(r), georgia_map.removeLayer(t), georgia_map.removeLayer(a), georgia_map.removeLayer(n), georgia_map.removeLayer(c), georgia_map.removeLayer(i), georgia_map.removeLayer(l), $("#georgia-static-1970").css("border", "5px hidden lightgray"), $("#georgia-static-1980").css("border", "5px hidden lightgray"), $("#georgia-static-1990").css("border", "5px hidden lightgray"), $("#georgia-static-2000").css("border", "5px hidden lightgray"), $("#georgia-static-2010").css("border", "5px groove red")
    })
});