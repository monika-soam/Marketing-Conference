const speakerProfiles = [{
  image: 'lady1.png',
  name: 'Emila Enderson',
  about: 'Professor at Brooklyn College.',
  description: 'She won the Award for Excellence in Teaching and try hard to make people better at their passions.',

},
{
  image: 'Man5.png',
  name: 'Douglas Klutz',
  about: 'Berkman professor at Harward Law School.',
  description: 'His lectures matters as he brings representatives of non- profit organizations',
},
{
  image: 'Man2.png',
  name: 'James William',
  about: 'Founder and CEO of cable company Myntia.',
  description: 'James is a perfect example of the most successful motivational speakers.',
},
{
  image: 'Lady2.png',
  name: 'Nidea Buckerman',
  about: 'Chair person of Vingra brands.',
  description: 'Nidea Buckerman founded Vingra, the industry leader in GIS technology.',
},
{
  image: 'Man1.png',
  name: 'Ridhwan Shilwana',
  about: 'Go for it fonder at New York.',
  description: 'His empire has grown from a single 300-square-foot store in Oklahoma City to 46 states.',
},
{
  image: 'Man4.png',
  name: 'Cornel Nelson',
  about: 'Co-founder of Maitryi and done Legal Studies.',
  description: 'Many Americans will recognize him from appearances on CNN and other news channels.',
},

];

function renderSpeaker(index) {
  let additionalClass = '';
  if (index >= 2) { additionalClass = 'hide-me'; }
  return ` <div class="speakers-profile ${additionalClass}">
  <div class="img-stack">
   
    <div class="img-top"><img src="./images/${speakerProfiles[index].image}"   alt="speaker"></div>
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