const AS_URL_BASE = "https://script.google.com/macros/s/AKfycbxYdqIC8q9J94DvkhAV04nEAcoM6-9b37UVoEThC3EImj6PHtW-TQQ-2Q99uzG0OWQ_/exec";

var url = document.location.href;
var k = url.substr(url.lastIndexOf("k=") + 2);

if (k) {
  fetch(AS_URL_BASE + '?k=' + k)
    .then(r => r.text())
    .then((r) => {
      console.log(r);
      //document.write(r);
      if (r) {
        document.location.replace(r);
      }
    })
    .catch(err => console.log(err))
}