module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://agitated-kare-135192.netlify.app/`,
    // Your Name
    name: 'Ziyad Alkhonein',
    // Main Site Title
    title: `Ziyad Alkhonein | Data Engineer`,
    // Description that goes under your name in main bio
    description: ``,
    // Optional: Twitter account handle
    author: `@ZiadAlkhonein`,
    // Optional: Github account URL
    github: `https://github.com/ZeadAlkhonein`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ziyad-alkhonein-329070135/`,
    // Content of the About Me section
    about: `Data Engineer working to advance data-driven cultures in Saudi Arabia by integrating disparate data sources and empowering users to uncover key insights that tell a bigger story.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      // {
      //   name: 'Devfolio',
      //   description:
      //     'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
      //   link: 'https://github.com/RyanFitzgerald/devfolio',
      // },
      // {
      //   name: 'ChromeExtensionKit',
      //   description:
      //     'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
      //   link: 'https://chromeextensionkit.com/?ref=devfolio',
      // },
      // {
      //   name: 'Another Cool Project',
      //   description:
      //     'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
      //   link: 'https://github.com/RyanFitzgerald/devfolio',
      // },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'SITE',
        description: 'Data Engineer, Jan 2020 - Present',
      },
      {
        name: 'STC',
        description: 'Data-Mart Developer, Sep 2018 - Jan 2020',
      },
      {
        name: 'Confidintal',
        description: 'Software Engineer, Jan 2018 - Sep 2018',
      },
      {
        name: 'IBM',
        description: 'Software Engineer Intern',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, TeraData SQL and PL/SQL, PostgreSQL, git, Django',
      },
      {
        name: 'Technologies',
        description: 'S3, ElasticStack, Nifi, Kafka',
      },
      {
        name: 'Other',
        description:
          'Docker, Data Analysis, ETL',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/profile.jpeg`,
      },
    },
  ],
};
