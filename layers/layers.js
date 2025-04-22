var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_10YearAgeChange_1 = new ol.format.GeoJSON();
var features_10YearAgeChange_1 = format_10YearAgeChange_1.readFeatures(json_10YearAgeChange_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10YearAgeChange_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10YearAgeChange_1.addFeatures(features_10YearAgeChange_1);
var lyr_10YearAgeChange_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10YearAgeChange_1, 
                style: style_10YearAgeChange_1,
                popuplayertitle: '10 Year Age Change',
                interactive: true,
    title: '10 Year Age Change<br />\
    <img src="styles/legend/10YearAgeChange_1_0.png" /> 22.7 - 36<br />\
    <img src="styles/legend/10YearAgeChange_1_1.png" /> 36 - 41<br />\
    <img src="styles/legend/10YearAgeChange_1_2.png" /> 41 - 45.2<br />\
    <img src="styles/legend/10YearAgeChange_1_3.png" /> 45.2 - 50.4<br />\
    <img src="styles/legend/10YearAgeChange_1_4.png" /> 50.4 - 68.5<br />' });
var format_MedianAge_2 = new ol.format.GeoJSON();
var features_MedianAge_2 = format_MedianAge_2.readFeatures(json_MedianAge_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianAge_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianAge_2.addFeatures(features_MedianAge_2);
var lyr_MedianAge_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianAge_2, 
                style: style_MedianAge_2,
                popuplayertitle: 'Median Age',
                interactive: false,
    title: 'Median Age<br />\
    <img src="styles/legend/MedianAge_2_0.png" /> 22.7 - 38.3<br />\
    <img src="styles/legend/MedianAge_2_1.png" /> 38.3 - 41<br />\
    <img src="styles/legend/MedianAge_2_2.png" /> 41 - 43.2<br />\
    <img src="styles/legend/MedianAge_2_3.png" /> 43.2 - 46.1<br />\
    <img src="styles/legend/MedianAge_2_4.png" /> 46.1 - 68.5<br />' });
var format_ShareOver65_3 = new ol.format.GeoJSON();
var features_ShareOver65_3 = format_ShareOver65_3.readFeatures(json_ShareOver65_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShareOver65_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShareOver65_3.addFeatures(features_ShareOver65_3);
var lyr_ShareOver65_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShareOver65_3, 
                style: style_ShareOver65_3,
                popuplayertitle: 'Share Over 65',
                interactive: false,
    title: 'Share Over 65<br />\
    <img src="styles/legend/ShareOver65_3_0.png" /> 0.048 - 0.165<br />\
    <img src="styles/legend/ShareOver65_3_1.png" /> 0.165 - 0.188<br />\
    <img src="styles/legend/ShareOver65_3_2.png" /> 0.188 - 0.209<br />\
    <img src="styles/legend/ShareOver65_3_3.png" /> 0.209 - 0.235<br />\
    <img src="styles/legend/ShareOver65_3_4.png" /> 0.235 - 0.589<br />' });
var format_USDAFarmingDependentCounties_4 = new ol.format.GeoJSON();
var features_USDAFarmingDependentCounties_4 = format_USDAFarmingDependentCounties_4.readFeatures(json_USDAFarmingDependentCounties_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USDAFarmingDependentCounties_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USDAFarmingDependentCounties_4.addFeatures(features_USDAFarmingDependentCounties_4);
var lyr_USDAFarmingDependentCounties_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USDAFarmingDependentCounties_4, 
                style: style_USDAFarmingDependentCounties_4,
                popuplayertitle: 'USDA Farming Dependent Counties',
                interactive: false,
                title: '<img src="styles/legend/USDAFarmingDependentCounties_4.png" /> USDA Farming Dependent Counties'
            });

lyr_Basemap_0.setVisible(true);lyr_10YearAgeChange_1.setVisible(true);lyr_MedianAge_2.setVisible(true);lyr_ShareOver65_3.setVisible(true);lyr_USDAFarmingDependentCounties_4.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_10YearAgeChange_1,lyr_MedianAge_2,lyr_ShareOver65_3,lyr_USDAFarmingDependentCounties_4];
lyr_10YearAgeChange_1.set('fieldAliases', {'join': 'Name', 'pop': 'Population', 'ag_2020': 'Median Age', '10YrAgC': '10 Year Age Change', 'pct_65': 'Share Over 65', 'FrmngDp': 'Farming Dependent', });
lyr_MedianAge_2.set('fieldAliases', {'join': 'Name', 'pop': 'Population', 'ag_2020': 'Median Age', '10YrAgC': '10 Year Age Change', 'pct_65': 'Share Over 65', 'FrmngDp': 'Farming Dependent', });
lyr_ShareOver65_3.set('fieldAliases', {'join': 'Name', 'pop': 'Population', 'ag_2020': 'Median Age (2020)', '10YrAgC': '10 Year Age Change', 'pct_65': 'Share Over 65', 'FrmngDp': 'Farming Dependent', });
lyr_USDAFarmingDependentCounties_4.set('fieldAliases', {'join': 'join', 'pop': 'pop', 'ag_2020': 'ag_2020', '10YrAgC': '10YrAgC', 'pct_65': 'pct_65', 'FrmngDp': 'FrmngDp', });
lyr_10YearAgeChange_1.set('fieldImages', {'join': 'TextEdit', 'pop': 'Range', 'ag_2020': 'TextEdit', '10YrAgC': 'TextEdit', 'pct_65': 'TextEdit', 'FrmngDp': 'TextEdit', });
lyr_MedianAge_2.set('fieldImages', {'join': 'TextEdit', 'pop': 'Range', 'ag_2020': 'TextEdit', '10YrAgC': 'TextEdit', 'pct_65': 'TextEdit', 'FrmngDp': 'TextEdit', });
lyr_ShareOver65_3.set('fieldImages', {'join': 'TextEdit', 'pop': 'Range', 'ag_2020': 'TextEdit', '10YrAgC': 'TextEdit', 'pct_65': 'TextEdit', 'FrmngDp': 'TextEdit', });
lyr_USDAFarmingDependentCounties_4.set('fieldImages', {'join': 'TextEdit', 'pop': 'Range', 'ag_2020': 'TextEdit', '10YrAgC': 'TextEdit', 'pct_65': 'TextEdit', 'FrmngDp': 'TextEdit', });
lyr_10YearAgeChange_1.set('fieldLabels', {'join': 'inline label - always visible', 'pop': 'inline label - always visible', 'ag_2020': 'inline label - always visible', '10YrAgC': 'inline label - always visible', 'pct_65': 'inline label - always visible', 'FrmngDp': 'inline label - always visible', });
lyr_MedianAge_2.set('fieldLabels', {'join': 'inline label - always visible', 'pop': 'no label', 'ag_2020': 'no label', '10YrAgC': 'no label', 'pct_65': 'no label', 'FrmngDp': 'no label', });
lyr_ShareOver65_3.set('fieldLabels', {'join': 'inline label - always visible', 'pop': 'inline label - always visible', 'ag_2020': 'inline label - always visible', '10YrAgC': 'inline label - always visible', 'pct_65': 'inline label - always visible', 'FrmngDp': 'inline label - always visible', });
lyr_USDAFarmingDependentCounties_4.set('fieldLabels', {'join': 'no label', 'pop': 'no label', 'ag_2020': 'no label', '10YrAgC': 'no label', 'pct_65': 'no label', 'FrmngDp': 'no label', });
lyr_USDAFarmingDependentCounties_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});