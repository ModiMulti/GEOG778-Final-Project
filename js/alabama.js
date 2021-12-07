var L, $, carto, alabama_map = L.map("alabama-map", {
    center: [32.5, -87],
    zoom: 8,
    maxBounds: [
        [0, -100],
        [60, -60]
    ]
});
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
    minZoom: 7,
    maxZoom: 18
}).addTo(alabama_map);

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
    alabama_map.fitBounds(e.target.getBounds())
}
var promise = $.getJSON("data/Alabamav2.geojson");
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
    $("#alabama-static-1970").click(function() {
        alabama_map.addLayer(o), alabama_map.addLayer(r), alabama_map.removeLayer(t), alabama_map.removeLayer(a), alabama_map.removeLayer(n), alabama_map.removeLayer(c), alabama_map.removeLayer(i), alabama_map.removeLayer(l), alabama_map.removeLayer(u), alabama_map.removeLayer(q), $("#alabama-static-1970").css("border", "5px groove red"), $("#alabama-static-1980").css("border", "5px hidden lightgray"), $("#alabama-static-1990").css("border", "5px hidden lightgray"), $("#alabama-static-2000").css("border", "5px hidden lightgray"), $("#alabama-static-2010").css("border", "5px hidden lightgray")
    }), $("#alabama-static-1980").click(function() {
        alabama_map.addLayer(t), alabama_map.addLayer(a), alabama_map.removeLayer(o), alabama_map.removeLayer(r), alabama_map.removeLayer(n), alabama_map.removeLayer(c), alabama_map.removeLayer(i), alabama_map.removeLayer(l), alabama_map.removeLayer(u), alabama_map.removeLayer(q), $("#alabama-static-1970").css("border", "5px hidden lightgray"), $("#alabama-static-1980").css("border", "5px groove red"), $("#alabama-static-1990").css("border", "5px hidden lightgray"), $("#alabama-static-2000").css("border", "5px hidden lightgray"), $("#alabama-static-2010").css("border", "5px hidden lightgray")
    }), $("#alabama-static-1990").click(function() {
        alabama_map.addLayer(n), alabama_map.addLayer(c), alabama_map.removeLayer(o), alabama_map.removeLayer(r), alabama_map.removeLayer(t), alabama_map.removeLayer(a), alabama_map.removeLayer(i), alabama_map.removeLayer(l), alabama_map.removeLayer(u), alabama_map.removeLayer(q), $("#alabama-static-1970").css("border", "5px hidden lightgray"), $("#alabama-static-1980").css("border", "5px hidden lightgray"), $("#alabama-static-1990").css("border", "5px groove red"), $("#alabama-static-2000").css("border", "5px hidden lightgray"), $("#alabama-static-2010").css("border", "5px hidden lightgray")
    }), $("#alabama-static-2000").click(function() {
        alabama_map.addLayer(i), alabama_map.addLayer(l), alabama_map.removeLayer(o), alabama_map.removeLayer(r), alabama_map.removeLayer(t), alabama_map.removeLayer(a), alabama_map.removeLayer(n), alabama_map.removeLayer(c), alabama_map.removeLayer(u), alabama_map.removeLayer(q), $("#alabama-static-1970").css("border", "5px hidden lightgray"), $("#alabama-static-1980").css("border", "5px hidden lightgray"), $("#alabama-static-1990").css("border", "5px hidden lightgray"), $("#alabama-static-2000").css("border", "5px groove red"), $("#alabama-static-2010").css("border", "5px hidden lightgray")
    }), $("#alabama-static-2010").click(function() {
        alabama_map.addLayer(u), alabama_map.addLayer(q), alabama_map.removeLayer(o), alabama_map.removeLayer(r), alabama_map.removeLayer(t), alabama_map.removeLayer(a), alabama_map.removeLayer(n), alabama_map.removeLayer(c), alabama_map.removeLayer(i), alabama_map.removeLayer(l), $("#alabama-static-1970").css("border", "5px hidden lightgray"), $("#alabama-static-1980").css("border", "5px hidden lightgray"), $("#alabama-static-1990").css("border", "5px hidden lightgray"), $("#alabama-static-2000").css("border", "5px hidden lightgray"), $("#alabama-static-2010").css("border", "5px groove red")
    })
});