let card = document.querySelector('.cardContainer');
let nextButton = document.getElementById('nextButton');
let frontText = document.getElementById('frontText');
let backText = document.getElementById('backText');
let front = document.querySelector('.front');
let back = document.querySelector('.back');
let showButton = document.getElementById('showButton')
let previousListener;
let showButtonListener;
let pressed = 0;

card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


let data = [
  {link: '', back: ''},
  {front: 'Иілгіштік қасиеті бар, қыздырғанда пішінін өзгертіп, салқындатқанда жаңа \
  пішінін сақтайтан полимерлер негізінде алынған заттар ....', back: 'Пластмассалар'},
  {front: `Eң көп таралған полимерлердің бірі, қолмен ұстағанда май тәрізді \
  білінетін зат. Оның жұқа қабыршақтары түссіз,
  850-900°С қыздырғанда жұмсарады, ал 1050°С-та балқиды. Бөлме температурасында \
  бұл полимер ешбір еріткіште ерімейді. Қышқыл, сілті, тұз әсеріне тұрақты, су өткізбейді. \
  Маңызды қасиетінің бірі термопласттылығы. Кемшілігі жылуға тұрақтылығының төмендігі \
  және жарықтың әсерінен ескіруі`, back: 'Полиэтилен (-CH\u2082-CH\u2082-)\u2099'},
  {front: `Қатты, берік, үйкелуге төзімді, термопластты сүт тәрізді ақшылдау зат, ең жеңіл полимерлердің \
  бірі. Жылуға төзімділігі полиэтиленнен жоғары`, back: 'Полипропилен (-CH\u2082-CH(CH\u2083)-)\u2099'},
  {front: `Жеңіл, созылғыш, көксағыз тәрізді полимер, бірақ көксағыздар сияқты вулканизацияланбайды. Оның \
  химиялық тұрақтылығы мен беріктігі полиэтилен мен полипропиленге қарағанда төмен`, 
  back: 'Полиизобутилен (-CH=C(CH\u2083)-CH\u2082-)\u2099'},
  {front: `Мөлдір, түссіз, бөлме температурасында қатты полимер. 1500°С температураға дейін қыздырғанда \
  осы полимер сірке қышқылын түзе ыдырайды. Ол суда ісінеді, қышқыл, сілті әсеріне тұрақты, жанғыш. \
  Жанғанда қара түсті шар жасап, аздаған жалынмен жанады.`, 
  back: 'Поливинилацетат (-CH\u2082-CH(OCOCH\u2083)-)\u2099'},
  {front: `Полистирол (-CH\u2082-CH(C\u2086H\u2085)-)\u2099`,
  back: `Мөлдір, қатты материал. Бөлме температурасында морт сынғыш. Ол органикалық еріткіштерде (бензол,толуол) \
  ериді және жеңіл өңделеді`},
  {front: `Бұл полимер "органикалық шыны" деп те аталады, ол мөлдір, күн сәулесінің 99%-ын, \
  сонымен қатар ультракүлгін сәулені де өткізеді, бұл оның силикат шыныдан ең басты артықшылығы. \
  Кәдімгі шыныдан басты ерекшелігі сынғыштығы төмен, өңдеуге икемділігі`,
  back: `Полиметилметакрилат (-CH\u2082-C(CH\u2083)(COOCH\u2083)-)\u2099`},
] 





  

function App() {
  let randQuestion = getRandomItem(data);
  if (card.classList.contains('is-flipped')) {
    back.classList.remove('makeBack');
    back.classList.add('makeFront');
    if (randQuestion.front) {
      backText.innerHTML = randQuestion.front;
    }
    front.classList.remove('makeFront');
    front.classList.add('makeBack');
    frontText.innerHTML = randQuestion.back;
  } else {
    front.classList.remove('makeBack');
    front.classList.add('makeFront');
    if (randQuestion.front) {
      frontText.innerHTML = randQuestion.front;
    }
    back.classList.remove('makeFront');
    back.classList.add('makeBack');
    backText.innerHTML = randQuestion.back;
  }
}


function toSup(a) {
  return a.sup();
}

function toSub(a) {
  return a.sub();
}






function handleButtonClick() {
  pressed = 0;
  if (previousListener) {
    nextButton.removeEventListener('click', previousListener);
  }

  App();

  previousListener = () => {
    handleButtonClick();
  };
  nextButton.addEventListener('click', previousListener);
}

handleButtonClick();

function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}