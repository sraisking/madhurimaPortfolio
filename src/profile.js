// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Madhurima Mukherjee",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Hey, I am Madhurima mukherjee, currently working as Assistant Manager(IT) in Union Bank of India. Previously worked as a Junior IOS Developer in ObjectSol PVT Ltd and then as a full time teacher in WhiteHat Jnr. It took time to reach the destination but it was worth it.The only preparation you need to reach what you aim for is the preparation of having faith on yourself. If I can, Whats stopping you? ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Swift",
    // svg: '',
    faClass: "fas fa-mobile",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "OTT Platform",
    skills: ["Swift"],
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Shortest Path of any Code with Heuristics(Artificial Intelligence)",
    skills: ["Matlab"],
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Banking Application(Mixed)",
    skills: ["JAVA, Asp.net"],
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Community Forum",
    skills: ["JAVA,J2EE"],
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Always there to help and boost candidates who are willing to clear IBPS or equivalent competitive exams. Write to me and mention you email in the Message area so that I can respond to you and guide you in the right path. It took 2.5 years to reach my goal and in the 24th month i felt like giving up but i did not. Thats the cut off you need to reach.Feel free to reach for more tips and tricks. Reach me in linked in or my youtube channel. Happy to help",
  copyright: "Madhurima Mukherjee",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  linkedin: "https://www.linkedin.com/in/madhurima-mukherjee-43584712b/",
  youtube: "https://www.youtube.com/channel/UCOq1nnvAHlCFKCPmmw1UaFw"
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  // miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
