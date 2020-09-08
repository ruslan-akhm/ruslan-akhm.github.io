import socNetPageImage from '../img/2-min.jpg'
import reservePageImage from '../img/1-min.jpg'
import carsImage from '../img/3-min.jpg'

export default [
   {
  number: 1,
  name: 'Social Network Page',
  description: 'Upload avatar, header image, add new posts, delete posts any time with corresponding API calls. Long text is geting automatically hidden. "To Default" button will bring default info back. It is a random social network clone page',
  features: ['Expand text button (all long texts are hidden)', 'Delete, Post, Get requests implemented', 'Play with page and then be able to bring it back to default'],
  linkCode: 'https://github.com/ruslan-akhm/social-network-page',
  linkProject: 'https://appnew-test-sample.glitch.me',
  id: "item-1",
  img:socNetPageImage
  },
  {
    number: 2,
    name:'Polestar Clone',
    description:'Clone of a Polestar.com webpage with animations, transitions, interactive effects and responsive design. Some of the text and non-related images were not included as this page is built mainly for representational purposes.',
    features:['Event handlers used to determine click of a button', 'Actively used state managament to update and read states during calculations', 'If 2 or more operators are entered consecutively, the operation performed is the last operator entered','Usage of Array.map to ease the buttons layout'],
    linkCode:'https://polestar-clone.github.io/polestar/',
    linkProject:'https://codepen.io/RUSLAN-AKH/full/JjPWzdp',
    id:"item-2",
    img:carsImage
  },
  {
    number: 3,
    name:'Reservation Page',
    description:'Make a reservation in theatre/cinema using interactive and visually convenient seats map. Get a unique ID for the reservation. Using ID, check or cancel reservation anytime',
    linkCode:'https://github.com/ruslan-akhm/ticket-reservation-page',
    linkProject:'https://ticket-reservation-page.glitch.me',
    id:"item-3",
    img:reservePageImage
  }
]