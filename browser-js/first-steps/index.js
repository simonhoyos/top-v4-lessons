// const blogs = require('../../../exercises/data');
// import blogs from '../../../exercises/data';

const posts = [
  {
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo vlue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Overlaid teh jeepers uselessly much excluding",
    date: new Date(2016, 02, 17),
    category: 'tech',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Conconantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language ocean.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "According a funnily until pre-set or arrogant well cheerful",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Single shot cultivar beans as chicory caffaine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo vlue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Overlaid teh jeepers uselessly much excluding",
    date: new Date(2016, 02, 17),
    category: 'tech',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Conconantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language ocean.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "According a funnily until pre-set or arrogant well cheerful",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Single shot cultivar beans as chicory caffaine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo vlue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "Overlaid teh jeepers uselessly much excluding",
    date: new Date(2016, 02, 17),
    category: 'tech',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Conconantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language ocean.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
  {
    title: "According a funnily until pre-set or arrogant well cheerful",
    date: new Date(2016, 02, 17),
    category: 'music',
    body: 'Single shot cultivar beans as chicory caffaine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.',
    image: {
      source: 'https://source.unsplash.com/random/400X400',
      alt: 'some image'
    }
  },
];

// const heading = $('h1');

// const heading = document.getElementById('heading');
// const heading = document.getElementsByTagName('h1');
// const heading = docuemnt.getElementsByClassName('heading');

const heading = document.querySelector('h1');
// const heading = document.querySelectorAll('.heading');

// const button = $('button');

function clickHandler(event) {
  // console.log(event);
  // alert('hola mundo!');

  // heading.css('display', 'none');
  // heading.hide();
  // heading.show();
  // heading.toggle();
  if(heading.classList.contains('show')) {
    heading.classList.remove('show');
    heading.classList.add('hide');
  } else {
    heading.classList.remove('hide');
    heading.classList.add('show');
  }
}

// button.click(clickHandler);
// button.on('click', clickHandler);

const button = document.querySelector('button');

button.addEventListener('click', clickHandler);
// document.addEventListener('mousemove', (event) => {
//   console.log(event);
// });

// const container = $('.container');
// const container = document.querySelector('.container');

// const element = "<p>lorem ipsum</p>";

// container.append(element);
// container.append(element);
// container.append(element);
// container.append(element);

// const name = 'Simon';
// const htmlContent = `
//   <p>lorem ipsum</p>
//   <h2>Hola código</h2>
//   <div>
//     <p>${name}</p>
//   </div>
// `;

// const container = $('.container');

// posts.forEach(({ title, date, category, image, body }) => {
//   const post = `
//     <div class="article">
//       <img src="${image.src}" alt="${image.alt}" />
//       <h2>${title}</h2>
//       <span>${date}</span> | <span>${category}</span>
//       <p>${body}</p>
//     </div>
//   `;

//   container.append(post);
// });

const container = document.querySelector('.container');

const postsHTML = posts.map(({ title, date, category, image, body }) => {
  return `
    <div class="article">
      <img src="${image.src}" alt="${image.alt}" />
      <h2>${title}</h2>
      <span>${date}</span> | <span>${category}</span>
      <p>${body}</p>
    </div>
  `;
}).join('');

container.innerHTML = postsHTML;




