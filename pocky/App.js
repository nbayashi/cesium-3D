

var viewer = new Cesium.Viewer("cesiumContainer", {
//  clockViewModel: new Cesium.ClockViewModel(clock),
  selectionIndicator: false,
  terrainProvider: Cesium.createWorldTerrain(),
});


  viewer.shadows = true;


viewer.scene.globe.enableLighting = true;
viewer.scene.globe.depthTestAgainstTerrain = true;


var positions = [
  {
    pos: Cesium.Cartesian3.fromDegrees(135.805364,34.514774,0),
    gltf: "pocky_choco1.gltf",
    comments: "ポッキー（チョコ）",
    h:0,
    p:0,
    r:0,
   },{
    pos: Cesium.Cartesian3.fromDegrees(135.784728,34.492616,0),
    gltf: "almond.gltf",
    comments: "ポッキー（アーモンドクラッシュ）",
    h:0,
    p:0,
    r:0,
   },{
    pos: Cesium.Cartesian3.fromDegrees(135.818367,34.495699,0),
    gltf: "pocky_strawberry.gltf",
    comments: "ポッキー（つぶつぶいちご）",
    h:0,
    p:0,
    r:0,
   },
];


var heading = Cesium.Math.toRadians(0);
var pitch = Cesium.Math.toRadians(45);
var roll = Cesium.Math.toRadians(0);
var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);


  for (var i = 0; i < positions.length; i++) {
    var heading = Cesium.Math.toRadians(positions[i].h);
    var pitch = Cesium.Math.toRadians(positions[i].p);
    var roll = Cesium.Math.toRadians(positions[i].r);
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);


    var name = positions[i].comments;
    var position = positions[i].pos;
    var entity = viewer.entities.add({
      name: name,
      position:position,
      orientation:Cesium.Transforms.headingPitchRollQuaternion(
  position,
  hpr
),
      model:{
        uri:positions[i].gltf,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        minimumPixelSize: 50,
        maximumScale:200,
        scale:1000000.0,
        runAnimations:false,
      },
});
}



var frontView = {
  destination: new Cesium.Cartesian3.fromDegrees(
    135.808367,34.445699,5000
  ),
  orientation: {
    heading: Cesium.Math.toRadians(0),
    pitch: Cesium.Math.toRadians(-30),
    roll: Cesium.Math.toRadians(0),
  },
  maximumHeight: 100,
};


viewer.scene.camera.setView({
  destination: frontView.destination,
  orientation: frontView.orientation,
});
