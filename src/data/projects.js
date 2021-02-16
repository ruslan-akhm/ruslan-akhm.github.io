import socNetPageImage from "../img/2-min.jpg";
import reservePageImage from "../img/1-min.jpg";
import carsImage from "../img/3-min.jpg";
import dogsImage from "../img/0-min.jpg";

export default [
  {
    number: 1,
    name: "Loving Sitter",
    description:
      "A last minute business trip is sending you out of the city tomorrow for two days? There is nobody to take care of your dog while you are away? This website makes it easier for dog owners to find a dog sitter - especially in real-time",
    features: [
      "SocketIO",
      "Node.js/Express",
      "MongoDB",
      "React.js",
      "Material UI",
      "Stripe.js",
    ],
    linkCode: "https://github.com/hatchways/team-pokemon",
    linkProject: "https://loving-dogsitter.herokuapp.com",
    id: "item-1",
    img: dogsImage,
  },
  {
    number: 2,
    name: "Ticket Reservation App",
    description:
      "Reserve tickets for your favourite movie or show using interactive seats map. Chosen tickets will get secured, so no one else would be able to choose them. Order can be modified in cart. Once ready, user can proceed to secure payment page to purchase the tickets.",
    features: ["Stripe.js", "SASS", "React.js", "Node.js/Express", "MongoDB"],
    linkCode: "https://github.com/ruslan-akhm/ticket-reservation-page",
    linkProject: "https://ticket-reservation-page.glitch.me",
    id: "item-2",
    img: reservePageImage,
  },
  {
    number: 3,
    name: "Personal Blog App",
    description:
      "App where registered users can create posts and attach images to them as well as modify their page, by uploading avatar and header images and adding personal information if they want to. Authentication is not required to view other users' pages as guest.",
    features: ["Passport.js", "Node.js/Express", "MongoDB", "React.js", "CSS"],
    linkCode: "https://github.com/ruslan-akhm/blog-page",
    linkProject: "https://appnew-test-sample.glitch.me",
    id: "item-3",
    img: socNetPageImage,
  },
  {
    number: 4,
    name: "Polestar",
    description:
      "Polestar.com website conversion. Responsive design corresponds to any width of the screen. Various animations, transitions and interactive effects were implemented in the design of this page.",
    features: ["React.js", "CSS", "HTML"],
    linkCode: "https://github.com/ruslan-akhm/polestar",
    linkProject: "https://polestar-clone.github.io/polestar/",
    id: "item-4",
    img: carsImage,
  },
];
