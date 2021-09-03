import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kiibati Adeojo', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kiibati Adeojo',
  subtitle: 'Mobile, Full Stack and Game Developer',
  cta: 'Read More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Full Stack Developer with over 4 years\' experience in Mobile App Development, Game Development, Web Development and Software Development. ',
  paragraphTwo: 'I have assisted companies in the Health, Charity and Commerce Sector with Mobile Development, Web Design and Web Development.',
  paragraphThree: 'I am versatile in multiple languages and frameworks and my biggest strength is that I always get the Job done.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'aworanlogo.jpg',
    title: 'Aworan App',
    info: 'This application aims at improving the connection in the artist community. With this application, you would be able to find upcoming art shows and get more information about them.',
    info2: 'You can share your art work with artists around the world and get inspired by art works by incredible artists.',
    info3: 'I created everything about this app from the Android and IOS App\'s, Backend, Authentication and the Website.',
    url: 'www.aworanapp.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vbia.PNG',
    title: 'VBIA Website',
    info: 'Vancouver Brain Injury Association\'s mission is to fill a devastating void for Vancouver and North Shore brain injury survivors by providing programs that are currently unavailable and to connect brain injury survivors, their families, and caregivers to resources that are available.',
    info2: 'I created the entire website using a custom Wordpress Theme that I created specifically for the company.',
    info3: '',
    url: 'www.vbia.ca',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'valofrag.png',
    title: 'Valofrag App',
    info: 'Valofrag is a Valorant helper app for the Valorant Video Game.',
    info2: 'Valofrag allows users to connect with their Valorant Community, view weapon stats, view their character stats and abilities.',
    info3: 'I also created the application myself.',
    url: '',
    repo: 'https://github.com/Kickbykick/Valofrag', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Work With me 😊',
  btn: '',
  email: 'kiibatitoo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Kiibati',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCH7_4FfakRK4Nx7tFcgLSPQ',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kiibati-adeojo-6183893b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Kickbykick',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
