const main=[{

    id:1,
    title:'Zhangye Danxia Geopark',
    country:'China',
    img:'https://hips.hearstapps.com/hmg-prod/images/hbz-zhangye-gettyimages-175323801-1505334995.jpg?crop=1xw:1xh;center,top&resize=980:*',
    desc:'"Rainbow Mountains," The colors were formed by the layering of sedimentary mineral deposits over millions of years'
},
{

    id:2,
    title:'Venice',
    country:'Italy',
    img:'https://hips.hearstapps.com/hmg-prod/images/hbz-venice-gettyimages-489741024-1505338894.jpg?crop=1xw:1xh;center,top&resize=980:*',
    desc:'wildly romantic floating city'
},
{

    id:3,
    title:'Banff National Park',
    country:'Canada',
    img:'https://hips.hearstapps.com/hmg-prod/images/banff-517747003-1494616292.jpg?crop=0.9997418022205009xw:1xh;center,top&resize=980:*',
    desc:"The glacial lakes in Canada's first national park have some of the bluest water you've ever seen."
},
{

    id:4,
    title:'Great Ocean Road',
    country:'Australia',
    img:'https://hips.hearstapps.com/hmg-prod/images/great-ocean-road-128394846-1494616348.jpg?crop=1xw:1xh;center,top&resize=980:*',
    desc:'Head west from Melbourne on this coastal drive to see everything from the famous 12 Apostle rock formations.'
},
{

    id:5,
    title:'Machu Picchu',
    country:'Peru',
    img:'https://hips.hearstapps.com/hmg-prod/images/hbz-machu-ppichu-gettyimages-629556601-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*',
    desc:"The ancient terraced city's astounding architecture and sweeping views of the surrounding mountains will leave you breathless."
},
{

    id:6,
    title:'Pamukkale',
    country:'Turkey',
    img:'https://hips.hearstapps.com/hmg-prod/images/hbz-pamukkale-gettyimages-466129341-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*',
    desc:'The ancient Roman spa-city Hierapolis where you can bathe like an emperor among the submerged centuries-old columns.'
},
{

    id:7,
    title:'Cherry Blossom',
    country:'Japan',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/1280x1919/japan-gettyimages-137098062.jpg?resize=980:*',
    desc:'While Japan is beautiful year-round, the few weeks each spring when cherry trees across the country explode with blossoms is a particularly pretty time to visit.'
},
{

    id:8,
    title:'Bora Bora',
    country:'French Polynesia',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/bora-bora-gettyimages-575766591.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    desc:'With turquoise lagoons, coral reefs and overwater bungalows, this small island in the South Pacific is basically heaven on Earth.'
},
{

    id:9,
    title:'Torres del Paine National Park',
    country:'Chile',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    desc:"If you're looking to get off the grid, head to Chile's Patagonia region for some of the most beautiful mountain views you'll ever see."
},
{

    id:10,
    title:'Amalfi Coast',
    country:'Italy',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/1280x1919/gallery-gettyimages-159582943-1.jpg?resize=980:*',
    desc:"The Amalfi Coast's idyllic hillside towns, like Positano, bump it to the top of our must-see list."
},
{

    id:11,
    title:'Bagan',
    country:'Myanmar',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/myanmar-gettyimages-137671616_1.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    desc:'One of the prettiest views is from above—we recommend going for a hot air balloon ride at sunrise.'
},
{

    id:12,
    title:'Havasu Falls',
    country:'Arizona',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/havasu-gettyimages-rh252-10343_1.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    desc:'efore you can swim in these beautiful blue-green waters located near Grand Canyon National Park, you have to hike ten miles to get there.'
},
{

    id:13,
    title:'Cape Town',
    country:'South Africa',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/cape-town-gettyimages-471380295.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    desc:"It might take nearly a full day of travel to reach Cape Town, but the city's sweeping vistas from Table Mountai."
},
{

    id:14,
    title:'Blue Lagoon',
    country:'Iceland',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/iceland-gettyimages-511371497_1.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    desc:"Iceland's famous Blue Lagoon gets its trademark color from the silica-rich waters that feed it."
},{

    id:15,
    title:'Paris',
    country:'France',
    img:'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/1461268850-paris-gettyimages-182176376.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    desc:'Every arrondissement is full of postcard-worthy architecture, idyllic city parks seem to outnumber the people...and the food!'
},{

    id:16,
    title:'Zlatni Rat',
    country:'Croatia',
    img:'https://hips.hearstapps.com/hmg-prod/images/croatia-hvar-island-bol-aerial-view-at-the-zlatni-royalty-free-image-1571860455.jpg?crop=1xw:1xh;center,top&resize=980:*',
    desc:'With crystal blue waters and a white pebble beach, the Golden Cape is the perfect place to take in the sun and let the air flow.'
},]

let filteredresult = [...main];

const Container = document.querySelector('.item-container');

const displayItem = () => {
  if (filteredresult.length < 1) {
    Container.innerHTML = `<h4>Sorry, no places matched your search</h4>`;
    return;
  }

 Container.innerHTML = filteredresult
    .map((item) => {
      
      return `<div class="item">
    <img src="${item.img}" alt="${item.title}">
    <div class="title">
    <h3>${item.title}</h3>
    <h4>${item.country}</h4>
    </div>
    <p>${item.desc}</p>
    </div>`;
    })
    .join('');
};

displayItem();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredresult = main.filter((item) => {
    return item.title.toLowerCase().includes(inputValue),
    item.country.toLowerCase().includes(inputValue);
  });
  displayItem();
});

// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes('');
//   })
// );

// Filter Buttons

// const companiesDOM = document.querySelector('.companies');

// const displayButtons = () => {
//   const buttons = [
//     'all',
//     ...new Set(main.map((product) => product.country)),
//   ];
//   // console.log(buttons);
//   companiesDOM.innerHTML = buttons
//     .map((country) => {
//       return `<button class='company-btn' data-id="${country}">${country}</button>`;
//     })
//     .join('');
// };

// displayButtons();

// companiesDOM.addEventListener('click', (e) => {
//   const el = e.target;
//   if (el.classList.contains('company-btn')) {
//     if (el.dataset.id === 'all') {
//       filteredresult = [...main];
//     } else {
//       filteredresult = main.filter((product) => {
//         return product.company === el.dataset.id;
//       });
//     }
//     searchInput.value = '';
//     displayProducts();
//   }
// });