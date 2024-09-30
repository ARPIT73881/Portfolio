export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },

  {
    id: 4,
    name: 'Education',
    href: '#education',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Aditya Kaushik',
    position: 'Full Stack Developer ',
    img: 'assets/review1.png',
    review:
      'Working with Arpit was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    profile: 'https://github.com/adityakshk499',
  },
  {
    id: 2,
    name: 'Aditi Paswan',
    position: 'Frontend Developer ',
    img: '/assets/review2.png',
    review:
      'Arpit’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    profile: 'https://github.com/aditipaswan',
  },
  {
    id: 3,
    name: 'Utkarsh Kumar Singh',
    position: 'Frontend Developer ',
    img: '/assets/review3.png',
    review:
      'I can’t say enough good things about Arpit. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    profile: 'https://github.com/webbbNerd',
  },
  {
    id: 4,
    name: 'Satyam Raj',
    position: 'Full Stack Developer',
    img: 'assets/review4.png',
    review:
      'Arpit was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    profile: 'https://github.com/SatyamRaj-WebDeveloper',
  },
];

export const myProjects = [
  {
    title: 'Crypto Tracker',
    desc: 'A dynamic full-stack application for tracking cryptocurrency trends and managing a personalized watchlist. It features user authentication with login and signup options, all wrapped in an intuitive interface.',
    subdesc:
      'This SaaS app is built using Vite, MongoDB, React, Express.js, Node.js, and Tailwind CSS, providing high performance and a seamless user experience with a focus on scalability.',
    href: 'https://crypto-tracker-getarpit.netlify.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/logo-mongo.svg',
      },
      {
        id: 2,
        name: 'Express',
        path: 'assets/logo-express.svg',
      },
      {
        id: 3,
        name: 'React',
        path: '/assets/logo-react.svg',
      },
      {
        id: 4,
        name: 'Node',
        path: '/assets/logo-node.svg',
      },
      {
        id: 5,
        name: 'Redux',
        path: '/assets/logo-redux.svg',
      },
      {
        id: 6,
        name: 'Tailwind',
        path: '/assets/logo-tailwind.svg',
      },
    ],
  },
  {
    title: 'Countries API',
    desc: 'An interactive web app that provides detailed information on every country in the world, along with a powerful search feature to find countries by name.',
    subdesc:
      'Users can explore individual countries in depth, view related border countries, and access additional information on a separate detailed page. Built with simplicity and user experience in mind.',
    href: 'https://countries-api-getarpit.netlify.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logo-react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: 'assets/logo-js.svg',
      },
      {
        id: 3,
        name: 'Tailwind',
        path: '/assets/logo-tailwind.svg',
      },
      {
        id: 4,
        name: 'Css',
        path: '/assets/logo-css.svg',
      },
      {
        id: 5,
        name: 'Figma',
        path: '/assets/logo-figma.svg',
      },
    ],
  },
  {
    title: 'Giphy',
    desc: 'A web app that allows users to search and share animated GIFs from an extensive library. It also offers tools for creating and customizing GIFs, making it an ideal platform for quick visual expression.',
    subdesc:
      'This app provides users with access to GIFs categorized by themes like entertainment, reactions, and emotions, allowing easy embedding and sharing on social media or messaging platforms.',
    href: 'https://giphy-getarpit.netlify.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logo-react.svg',
      },
      {
        id: 2,
        name: 'Tailwind',
        path: 'assets/logo-tailwind.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/logo-js.svg',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/assets/logo-vite.svg',
      },
    ],
  },
  {
    title: 'Today I Learned',
    desc: 'A fun and interactive app where users can share facts and vote on them. It allows users to upvote or downvote each fact while sorting through various categories for easy navigation.',
    subdesc:
      'Built with React for the frontend and Supabase for the backend, the app offers a delightful experience with features like sorting and viewing facts by different filters and categories.',
    href: 'https://today-i-learned-getarpit.netlify.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logo-react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: 'assets/logo-js.svg',
      },
      {
        id: 3,
        name: 'Html ',
        path: '/assets/logo-html.svg',
      },
      {
        id: 4,
        name: 'Css',
        path: '/assets/logo-css.svg',
      },
    ],
  },
  {
    title: 'Foodify',
    desc: 'A sleek app designed for food lovers to share and explore recipes. Users can add their own dishes, vote on their favorites, and discover trending recipes in the community.',
    subdesc:
      'Developed with HTML, CSS, JavaScript and Figma for design, this app offers a visually appealing interface. It’s a perfect starting point for a side project or business in the food industry.',
    href: 'https://omnifood-getarpit.netlify.app/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Html',
        path: '/assets/logo-html.svg',
      },
      {
        id: 2,
        name: 'Css',
        path: '/assets/logo-css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/logo-js.svg',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/logo-figma.svg',
      },
    ],
  },
];

export const education = [
  {
    id: 1,
    title: 'Graduation',
    pos: 'B.Tech Computer Science',
    name: 'Babu Banarasi Das Engineering College, Lucknow',
    duration: '2021 - 2025',
    detail:
      'I pursued a B.Tech in Computer Science, focusing on software development, algorithms, and emerging technologies. During this time, I honed my programming skills and worked on several technical projects.',
    icon: '/assets/graduation.svg',
    animation: 'salute',
  },
  {
    id: 2,
    title: 'Diploma',
    pos: 'Diploma in Architecture',
    name: 'Government Polytechnic Lucknow, Lucknow',
    duration: '2016 - 2019',
    detail:
      'During my Diploma in Architecture, I gained practical knowledge in designing buildings, drafting plans, and understanding architectural concepts. This experience shaped my analytical and design-thinking abilities.',
    icon: '/assets/diploma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    title: 'Intermediate',
    pos: 'XII (PCM)',
    name: 'Rani Laxmi Bai Memorial School, Lucknow',
    duration: '2014 - 2016',
    detail:
      'In Intermediate, I focused on science and mathematics, which laid the foundation for my problem-solving skills and analytical thinking. It was during this period that I developed an interest in technology and engineering.',
    icon: '/assets/college.svg',
    animation: 'victory',
  },
];

// Use media queries to determine screen size
// const isSmall =  maxWidth: 440  // Small screen query (e.g., phones)
// const isMobile =  maxWidth: 768 // Mobile screen query (e.g., tablets in portrait mode)
// const isTablet =  minWidth: 768, maxWidth: 1024  // Tablet screen query

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    // Determines the scale of the desk based on screen size
    deskScale: isSmall
      ? 0.055 // Smaller scale for small screens
      : isMobile
        ? 0.06 // Slightly larger for mobile
        : isTablet
          ? 0.061 // Large  for tablet
          : 0.066, // Largest  for larger screens

    // Position of the desk in the scene
    deskPosition: isSmall
      ? [0.5, -5.5, 2.1] // Higher position for mobile
      : isMobile
        ? [0.5, -5.5, 2.1] // Lower position for tablet and larger screens
        : isTablet
          ? [0.7, -6, 3.0] // Further out for tablet
          : [0.8, -6, 3.5], // Furthest out for larger screens

    // Determines the scale of the cube based on screen size
    cubeScale: isSmall
      ? 0.3 // Smaller scale for small screens
      : isMobile
        ? 0.4 // Slightly larger for mobile
        : isTablet
          ? 0.6 // Large  for tablet
          : 0.6, // Largest  for larger screens

    // Position of the cube object
    cubePosition1: isSmall
      ? [-3.5, 2.5, 0.2] // Closer to the center for small screens
      : isMobile
        ? [-5, 3, 0.2] // Slightly off-center for mobile
        : isTablet
          ? [-9, 3.5, 0.2] // Same as mobile for tablet
          : [-11, 3.5, 0.2], // Further out for larger screens

    // Position of the cube object
    cubePosition2: isSmall
      ? [3.5, 2.5, 0.2] // Closer to the center for small screens
      : isMobile
        ? [5, 3, 0.2] // Slightly off-center for mobile
        : isTablet
          ? [9, 3.5, 0.2] // Same as mobile for tablet
          : [11, 3.5, 0.2], // Further out for larger screens

    // Position of the cube object
    cubePosition3: isSmall
      ? [-3.5, -4.5, 0.2] // Closer to the center for small screens
      : isMobile
        ? [-5, -5, 0.2] // Slightly off-center for mobile
        : isTablet
          ? [-9, -4.5, 0.2] // Same as mobile for tablet
          : [-11, -4.5, 0.2], // Further out for larger screens

    // Position of the cube object
    cubePosition4: isSmall
      ? [3.5, -4.5, 0.2] // Closer to the center for small screens
      : isMobile
        ? [5, -5, 0.2] // Slightly off-center for mobile
        : isTablet
          ? [9, -4.5, 0.2] // Same as mobile for tablet
          : [11, -4.5, 0.2], // Further out for larger screens
  };
};
