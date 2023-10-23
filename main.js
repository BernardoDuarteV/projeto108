function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true });
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UrPG-HHxn/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
  console.log(results);
  random_number_r = Math.floor(Math.random() * 255) + 1;
  random_number_g = Math.floor(Math.random() * 255) + 1;
  random_number_b = Math.floor(Math.random() * 255) + 1;
  
  document.getElementById("result_label").innerHTML = 'Posso ouvir - '+results[0].label;
  document.getElementById("result_confidence").innerHTML = 'Precisão - '+(results[0].confidence*100).toFixed(2)+" %";
  document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
  document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
  
  img = document.getElementById('animal1')
  img1 = document.getElementById('animal2')
  img2 = document.getElementById('animal3')
  img3 = document.getElementById('animal4')
  
  if (results[0].label == latido) {
  img.src = 'cachorro.gif';
  img1.src = 'gato.jpg';
  img2.src = 'bem-te-vi.jpg';
  img3.src = 'fundo.png';
  } else if (results[0].label == miado) {
    img.src = 'cachorro.jpg';
  img1.src = 'gato.gif';
  img2.src = 'bem-te-vi.jpg';
  img3.src = 'fundo.png';
  } else if (results[0].label == bem-te-vi) {
    img.src = 'cachorro.jpg';
  img1.src = 'gato.jpg';
  img2.src = 'bem-te-vi.gif';
  img3.src = 'fundo.png';
  } else {
    img.src = 'cachorro.jpg';
  img1.src = 'gato.jpg';
  img2.src = 'bem-te-vi.jpg';
  img3.src = 'fundo.gif';
  } 
  }
  }