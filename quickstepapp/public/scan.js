let scanner = new InstaScan.Scanner({
  video: document.getElementById('preview')
});

scanner.addListener('scan', function (content) {
  console.log(content);
});

InstaScan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function (e) {
  console.error(e);
});
