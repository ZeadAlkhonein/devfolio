module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ziyadalkhonein.io/`,
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
      {
        name: 'DataHub',
        description: 'Internal DataLake for CyberSecurity Department using MinIO',
      },
      {
        name: 'Unified Cyber Security Platform.',
        description: 'PoC on internal network to predict whether domain name is malicious or not.'
      },
      {
        name: 'LiteHub',
        description: 'built and model the Data-Warehouse for Cybersecurity using top security standards on Postgres Database'
      },
      {
        name: 'STC Data Mart Consolidation',
        description: 'As datamart developer the roles was to consolidate data marts and convert any independent data marts into dependent data marts on EDW'
      },
      {
        name: 'ChatBot.',
        description: 'General Chatbot',
        link: 'https://www.youtube.com/watch?v=WXcVJvIHwLc&ab_channel=%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D9%84%D9%84%D8%A3%D9%85%D9%86%D8%A7%D9%84%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A%D9%88%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%D9%88%D8%A7%D9%84%D8%AF%D8%B1%D9%88%D9%86%D8%B2'
      },
      

    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'SITE',
        description: 'Data Engineer, Jan 2020 - Present',
        link: 'site.sa',
        duty: 'Tech Lead on Big data project, Build custom connectors for internal data lake.\
        Sourcing internal system into internal data lake. \
        Member of DataHub initiative (one of SITE 2021 strategy initiatives).\
        Build DataWarehouse solutions for Cybersecurity.\
        Built a prediction model PoC on internal network to predict whether domain name is malicious or not.\
        Develop BI dashboards and reports for internal departments. \
        Improved data quality of multiple BI reports. '
      },
      {
        name: 'STC',
        description: 'Data-Mart Developer, Sep 2018 - Jan 2020',
        link: 'stc.com',
        duty: 'Implement and deliver business intelligence and reporting solutions data for internal business.\
        Maintain data quality within the bussines layer'
      },
      {
        name: 'Confidintal',
        description: 'Software Engineer, Jan 2018 - Sep 2018',
      },
      {
        name: 'IBM',
        description: 'Software Engineer Intern',
        link: 'ibm.com',
        duty: 'Setting up High Performance Computing cluster for Canadian universities'
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description: 'Python, TeraData SQL and PL/SQL, PostgreSQL, git, Django',
      },
      {
        name: 'Technologies',
        description: 'S3, ElasticStack, Nifi, Kafka, Airflow, Celery',
      },
      {
        name: 'Other',
        description: 'Docker, Data Analysis, ETL',
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId: [`G-HNFWW99V8L`, 
      ],
      gtagConfig: {
       // optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },

      pluginConfig: {
        head: true,
      },
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
