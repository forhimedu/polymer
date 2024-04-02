let card = document.querySelector('.cardContainer');
let nextButton = document.getElementById('nextButton');
let frontText = document.getElementById('frontText');
let backText = document.getElementById('backText');
let front = document.querySelector('.front');
let back = document.querySelector('.back');
let showButton = document.getElementById('showButton')
const imgfront = document.getElementById('idimgfront');
const imgback = document.getElementById('idimgback');
let previousListener;
let showButtonListener;
let pressed = 0;

card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


let data = [
  {front: 'Синтетикалық талшықтардың ішіндегі кең тарағаны капрон талшығы. \
  Ол аминкапрон қышқылынан синтезделеді. Аминкапрон қышқылы формуласы:', 
  pic: './data/aminkapron.jpg'},
  {front: 'Синтетикалық талшықтардың кең тарағаны капрон талшығы. Капрон талшығы аминкапрон қышқылынан алынады. Қышқыл құрамында негіздік және \
  қышқылдық қасиет көрсететін екі функционалдық топ бар, олар өзара поликонденсация \
  реакциясына түседі. Поликонденсация реациясын жызып көріңіз. Реакция нәтижесінде макромолекуласы \
  сызықтық құрылысты болатын жоғары молекулалы зат түзіледі. ', 
  pic: './data/aminkapronpol.jpg'},
  {front: 'Бұл полимер/талшық вамидтік тобы бар полиамидті талшықтар қатарына жатады. \
  Бұл зат маталары кйкеліске төзімді, мыжылмайды. Бірақ бұл зат қышқыл мен жоғары температура \
  әсеріне төзімсіз, сондықтан оны ыстық үтікпен үтіктеуге болмайды.Бұл зат пластмассынан \
  алынған бұйымдардың беріктігі мен қызмет ету мерзімі өті жоғары.', back: 'Капрон'},
  {front: 'Бұл талшық та химиялық, синтетикалық полиамидті талшықтар қатарына жатады \
  Бұл талшықты терефтал қышқылы мен парафенилендиаминнің поликонденсация реакциясымен алады. \
  Реакцияны жазыңыз. Бұдан оқ өтпейтін кеудешелер, аса жеңіл ұшу аппаратарын жасауда қолданады.', 
  pic: './data/kevlar.jpg'},
  {front: 'Бұл талшық полиэфир талшығы, терефтал қышқылы HOOC-C6H4-COOH және этиленгликольді \
  поликонденсациялап алады. Бұл талшық жоғары беріктілігі, жарыққа, сілті мен қышқыл \
  ерітінділерінің әсеріне төзімділігімен ерекшеленеді. Диэлектрик, алайда концентрлі қышқылдар оны \
  бүлдіреді. Жоғары сапалы маталар мен тоқыма бұйымдарын алу үшін бұл затты жүнге қосады. \
  Оны транспортер таспаларын, белдіктер, кілем, парус т.б. алуға қолданады.', 
  pic: './data/lavsan.jpg'},
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
  imgback.removeAttribute('src');
  imgfront.removeAttribute('src');
  backText.innerHTML = "";
  frontText.innerHTML = "";
  if (card.classList.contains('is-flipped')) {
    back.classList.remove('makeBack');
    back.classList.add('makeFront');
    if (randQuestion.front) {
      backText.innerHTML = randQuestion.front;
    }
    front.classList.remove('makeFront');
    front.classList.add('makeBack');
    if (randQuestion.back) { 
      frontText.innerHTML = randQuestion.back;
    } else if (randQuestion.pic) {
      imgfront.setAttribute('src', `${randQuestion.pic}`);
    }
  } else {
    front.classList.remove('makeBack');
    front.classList.add('makeFront');
    if (randQuestion.front) {
      frontText.innerHTML = randQuestion.front;
    }
    back.classList.remove('makeFront');
    back.classList.add('makeBack');
    if (randQuestion.back) {
    backText.innerHTML = randQuestion.back;
    } else if (randQuestion.pic) {
      imgback.setAttribute('src', `${randQuestion.pic}`);
    }
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