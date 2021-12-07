var L, $, carto, sc_map = L.map("sc-map", {
    center: [33.5, -81],
    zoom: 8,
    maxBounds: [
        [0, -100],
        [60, -60]
    ]
});
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
    minZoom: 7,
    maxZoom: 18
}).addTo(sc_map);

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
        fillOpacity: 0.5
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
    sc_map.fitBounds(e.target.getBounds())
}
var promise = $.getJSON("data/SouthCarolinav3.geojson");
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
    $("#sc-static-1970").click(function() {
        sc_map.addLayer(o), sc_map.addLayer(r), sc_map.removeLayer(t), sc_map.removeLayer(a), sc_map.removeLayer(n), sc_map.removeLayer(c), sc_map.removeLayer(i), sc_map.removeLayer(l), sc_map.removeLayer(u), sc_map.removeLayer(q), $("#sc-static-1970").css("border", "5px groove red"), $("#sc-static-1980").css("border", "5px hidden lightgray"), $("#sc-static-1990").css("border", "5px hidden lightgray"), $("#sc-static-2000").css("border", "5px hidden lightgray"), $("#sc-static-2010").css("border", "5px hidden lightgray")
    }), $("#sc-static-1980").click(function() {
        sc_map.addLayer(t), sc_map.addLayer(a), sc_map.removeLayer(o), sc_map.removeLayer(r), sc_map.removeLayer(n), sc_map.removeLayer(c), sc_map.removeLayer(i), sc_map.removeLayer(l), sc_map.removeLayer(u), sc_map.removeLayer(q), $("#sc-static-1970").css("border", "5px hidden lightgray"), $("#sc-static-1980").css("border", "5px groove red"), $("#sc-static-1990").css("border", "5px hidden lightgray"), $("#sc-static-2000").css("border", "5px hidden lightgray"), $("#sc-static-2010").css("border", "5px hidden lightgray")
    }), $("#sc-static-1990").click(function() {
        sc_map.addLayer(n), sc_map.addLayer(c), sc_map.removeLayer(o), sc_map.removeLayer(r), sc_map.removeLayer(t), sc_map.removeLayer(a), sc_map.removeLayer(i), sc_map.removeLayer(l), sc_map.removeLayer(u), sc_map.removeLayer(q), $("#sc-static-1970").css("border", "5px hidden lightgray"), $("#sc-static-1980").css("border", "5px hidden lightgray"), $("#sc-static-1990").css("border", "5px groove red"), $("#sc-static-2000").css("border", "5px hidden lightgray"), $("#sc-static-2010").css("border", "5px hidden lightgray")
    }), $("#sc-static-2000").click(function() {
        sc_map.addLayer(i), sc_map.addLayer(l), sc_map.removeLayer(o), sc_map.removeLayer(r), sc_map.removeLayer(t), sc_map.removeLayer(a), sc_map.removeLayer(n), sc_map.removeLayer(c), sc_map.removeLayer(u), sc_map.removeLayer(q), $("#sc-static-1970").css("border", "5px hidden lightgray"), $("#sc-static-1980").css("border", "5px hidden lightgray"), $("#sc-static-1990").css("border", "5px hidden lightgray"), $("#sc-static-2000").css("border", "5px groove red"), $("#sc-static-2010").css("border", "5px hidden lightgray")
    }), $("#sc-static-2010").click(function() {
        sc_map.addLayer(u), sc_map.addLayer(q), sc_map.removeLayer(o), sc_map.removeLayer(r), sc_map.removeLayer(t), sc_map.removeLayer(a), sc_map.removeLayer(n), sc_map.removeLayer(c), sc_map.removeLayer(i), sc_map.removeLayer(l), $("#sc-static-1970").css("border", "5px hidden lightgray"), $("#sc-static-1980").css("border", "5px hidden lightgray"), $("#sc-static-1990").css("border", "5px hidden lightgray"), $("#sc-static-2000").css("border", "5px hidden lightgray"), $("#sc-static-2010").css("border", "5px groove red")
    })
});