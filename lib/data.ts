export type Category = 'All' | 'Landing-page' | 'Online-store' | 'Multi-page' | 'Others';

interface ProjectTypes {
  id: number;
  image: string;
  category: Category;
  title: string;
  description: string;
  link: string;
}

export const projectsData: ProjectTypes[] = [
  {
    id: 1,
    image: '/projects/pixelmagnet.png',
    category: 'Multi-page',
    title: 'Pixelmagnet company website',
    description:
      'Figma to react/nextjs, typescript, redux, reduxjs/toolkit, sass, bem, slick slider, swiper slider, framer-motion, dark mode, axios, cors, mongodb',
    link: "https://pixelmagnet-mongodb-client.netlify.app"
  },
  {
    id: 2,
    image: '/projects/luxtrip.png',
    category: 'Multi-page',
    title: 'Luxtrip travel company website',
    description:
      'Figma to react/nextjs, typescript, redux, sass, bem, swiper slider, formik, yup, react datepicker',
    link: "https://luxtrip-nextjs.netlify.app"
  },
  {
    id: 3,
    image: '/projects/tvl.png',
    category: 'Landing-page',
    title: 'Travel company website',
    description:
      'Figma to react/nextjs, typescript, redux, sass, bem, slick slider, framer-motion',
    link: "https://tvl-nextjs.netlify.app"
  },
  {
    id: 4,
    image: '/projects/bank-hotel.png',
    category: 'Multi-page',
    title: 'Bank hotel website',
    description:
      'Figma to react/nextjs, typescript, redux, sass, bem, framer-motion',
    link: "https://bank-hotel-lviv.netlify.app"
  },
  {
    id: 5,
    image: '/projects/beauty-salon-serene.png',
    category: 'Multi-page',
    title: 'Beauty salon Serene website',
    description:
      'Figma to react, sass, bem, accordeon, google maps, CountUp',
    link: "https://beauty-salon-serene.netlify.app"
  },
  {
    id: 6,
    image: '/projects/cars-classic-autotrader.png',
    category: 'Multi-page',
    title: 'Cars autotrader website',
    description:
      'Figma to react, sass, bem, accordeon, google maps, CountUp',
    link: "https://cars-classic-autotrader.netlify.app"
  },
  {
    id: 7,
    image: '/projects/happy-coaching.png',
    category: 'Multi-page',
    title: 'Happy coaching website',
    description:
      'Figma to react, sass, typescript, redux, bem, accordeon, google maps, framer-motion',
    link: "https://happy-coaching-typescript.netlify.app"
  },
  {
    id: 8,
    image: '/projects/rise-creative.png',
    category: 'Landing-page',
    title: 'Rise Creative Design Agency website',
    description:
      'Figma to react, sass, typescript, redux, bem, accordeon, google maps, slick slider, swiper slider, framer-motion',
    link: "https://rise-creative.netlify.app"
  },
  {
    id: 9,
    image: '/projects/barbershop.png',
    category: 'Landing-page',
    title: 'Barbershop website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, phpmailer,javascript, php, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/barbershop/"
  },
  {
    id: 10,
    image: '/projects/internet-store-wear.png',
    category: 'Online-store',
    title: 'Internet store wear website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/internet-store-wear/"
  },
  {
    id: 11,
    image: '/projects/mettex-company.png',
    category: 'Others',
    title: 'Mettex company website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/mettex-company/"
  },
  {
    id: 12,
    image: '/projects/blog-fullstack.png',
    category: 'Others',
    title: 'Blog website',
    description:
      'Front-end: react, redux-toolkit, axios react-toastify / Back-end: express, express-fileupload, jsonwebtoken, mongodb, mongoose, cors, nodemon',
    link: "https://pixelmagnet-admin-mern-client.netlify.app"
  },
  {
    id: 13,
    image: '/projects/your-meal.png',
    category: 'Others',
    title: 'Your meal food delivery website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, flex boxes, grid, bem, cart',
    link: "https://bogdanpavliv.github.io/your-meal/"
  },
  {
    id: 14,
    image: '/projects/my-city-lawyer.png',
    category: 'Multi-page',
    title: 'Law company My city lawyer',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, phpmailer,javascript, php, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/my-city-lawyer/"
  },
  {
    id: 15,
    image: '/projects/loft-house.png',
    category: 'Landing-page',
    title: 'Residential complex Loft house website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, phpmailer,javascript, php, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/loft-house/"
  },
  {
    id: 16,
    image: '/projects/panto-furniture-store.png',
    category: 'Landing-page',
    title: 'Panto furniture store website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, php, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/panto-furniture-store/"
  },
  {
    id: 17,
    image: '/projects/personal-blog.png',
    category: 'Multi-page',
    title: 'Personal blog website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, php, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/personal-blog/"
  },
  {
    id: 18,
    image: '/projects/luxtrader.png',
    category: 'Landing-page',
    title: 'Jewelery company Luxtrader website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, php, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/luxtrader/"
  },
  {
    id: 19,
    image: '/projects/barbershop-premium.png',
    category: 'Multi-page',
    title: 'Barbershop premium website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, php, flex boxes, grid, bem, bootstrap',
    link: "https://bogdanpavliv.github.io/barbershop-premium/"
  },
  {
    id: 20,
    image: '/projects/fitness.png',
    category: 'Landing-page',
    title: 'Fitness company website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, php, flex boxes, grid, bem, bootstrap',
    link: "https://bogdanpavliv.github.io/fitness/"
  },
  {
    id: 21,
    image: '/projects/growfy.png',
    category: 'Landing-page',
    title: 'Marketing company website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, php, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/growfy/"
  },
  {
    id: 22,
    image: '/projects/california.png',
    category: 'Online-store',
    title: 'California store website',
    description:
      'git, gulp, npm, figma, optimized graphics, svg where it is possible, html, scss, javascript, flex boxes, grid, bem',
    link: "https://bogdanpavliv.github.io/california/"
  }
]

export const askedQuestions = [
  {
    id: 1,
    qs: 'Can you work on my project immediately?',
    answer:
      'Yes, if i am not currently engaged in other commitments, otherwise i will get the jobe done in deadline'
  },
  {
    id: 2,
    qs: 'Are you working hourly base or by projects ?',
    answer: 'Both of them it depends on client choice'
  },
  {
    id: 3,
    qs: 'What are technologies you use in your stack?',
    answer: 'I am using latest in cutting edge technology concerning react/next'
  }
]
