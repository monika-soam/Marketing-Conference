const speakerProfiles = [{
    image: 'lady1.png',
    name: 'Emila Enderson',
    about: 'Professor at the psychology department at Brooklyn College.',
    description: 'She won the Award for Excellence in Teaching. She has managed through her work to make her students better at their passions.',

  },
  {
    image: 'Man5.png',
    name: 'Douglas Klutz',
    about: 'Berkman professor of Entrepreneurial Legal Studies at Harward Law School.',
    description: 'His lectures matters as he brings representatives of non- profit organizations to assist students understand the practical aspects of their work.',
  },
  {
    image: 'Man2.png',
    name: 'James William',
    about: 'Founder and CEO of cable company Myntia, based in Chester, New York.',
    description: 'Sometimes the most successful motivational speakers are ones that have overcome a difficult past. James is a perfect example of this.',
  },
  {
    image: 'Lady2.png',
    name: 'Nidea Buckerman',
    about: 'Chair person of Vingra, one of the world’s most popular brands.',
    description: 'Nidea Buckerman founded Vingra, the industry leader in GIS technology, a specialized software used for creating digital maps.',
  },
  {
    image: 'Man1.png',
    name: 'Ridhwan Shilwana',
    about: 'Go for it fonder Entrepreneurial Legal Studies at Oxford University.',
    description: 'His first crafts shop in 1970 with a $600 loan. His empire has grown from a single 300-square-foot store in Oklahoma City to 957 locations in 46 states.',
  },
  {
    image: 'Man4.png',
    name: 'Cornel Nelson',
    about: 'Co-founder of Maitryi and done Legal Studies at Harward Law School.',
    description: 'Many Americans will recognize him from appearances on CNN and other news channels. He has also taught at Harvard, Yale and the University of Paris.',
  },

];

function renderSpeaker(index) {
  let additionalClass = '';
  if (index >= 2) { additionalClass = 'hide-me'; }
  return ` <div class="speakers-profile ${additionalClass}">
  <div class="img-stack">
    <div class="img-bottom"><img src="/assets/images/dotted-new.png" alt="dotted"></div>
    <div class="img-top"><img src="/assets/images/${speakerProfiles[index].image}"   alt="speaker"></div>
  </div>
  <div class="speaker-content">
    <h3>${speakerProfiles[index].name}</h3>
    <h4>${speakerProfiles[index].about}</h4>
    <div class="under-line"></div>
    <p>${speakerProfiles[index].description}</p>
  
  </div>
  </div>`;
}

function renderSpeakers() {
  for (let i = 0; i < speakerProfiles.length; i += 1) {
    document.getElementsByClassName('speakers-list')[0].innerHTML += renderSpeaker(i);
  }
}

document.getElementsByClassName('more-button')[0].addEventListener('click', () => {
  let speakers;
  if (document.getElementsByClassName('more-button')[0].innerHTML.indexOf('MORE') === 0) {
    speakers = document.getElementsByClassName('speakers-profile');
    for (let i = 2; i < speakers.length; i += 1) {
      speakers[i].classList.remove('hide-me');
    }
    document.getElementsByClassName('more-button')[0].innerHTML = `LESS
    <div><i class="fa fa-angle-up" aria-hidden="true"></i>
    </div>`;
  } else {
    speakers = document.getElementsByClassName('speakers-profile');
    for (let i = 2; i < speakers.length; i += 1) {
      speakers[i].classList.add('hide-me');
    }
    document.getElementsByClassName('more-button')[0].innerHTML = `MORE
      <div><i class="fa fa-angle-down" aria-hidden="true"></i>
      </div>`;
  }
});

window.onload = renderSpeakers;