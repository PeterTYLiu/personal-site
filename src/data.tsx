import type { Item } from "./components/ItemCard/ItemCard";

export const data: Item[] = [
  {
    key: "sortabase",
    type: "work",
    iconName: "sortabase.png",
    description: "Working full-time with my cofounder on a collaborative, visual database-building platform for communities",
    bulletPoints: [
      "Working on every part of the product stack, from strategy to design to frontend to backend to devops",
      "After a pivot, our current product has hundreds of users and thousands of posts across dozens of community-built databases",
    ],
    endDate: "present",
    startDate: "2021-11-01",
    title: "Sortabase",
    location: "Toronto",
    position: "Cofounder, Full-Stack Engineer",
    siteUrl: "https://sortabase.com",
    tools: ["Next.js", "Vercel", "Prisma", "S3", "SASS", "TypeScript", "React", "Figma", "Ant Design", "Sendgrid", "Auth0"],
  },
  {
    key: "teledyne",
    type: "work",
    iconName: "teledyne.png",
    description: "Worked on Teledyne DALSA's website, marketing materials, and public communications",
    bulletPoints: [
      "Learned and communicated highly-technical concepts relating to image sensors and MEMS",
      "Created coheisve marketing assets in prose, images, webpages, and video",
    ],
    endDate: "2016-12-31",
    startDate: "2016-09-01",
    title: "Teledyne DALSA",
    location: "Waterloo",
    position: "Web Communications Designer",
    siteUrl: "https://www.teledynedalsa.com/en/home/",
    tools: ["Illustrator", "Photoshop", "Premiere Pro", "InDesign", "HootSuite", "HTML", "CSS"],
  },
  {
    key: "threekit-ux-consultant",
    type: "work",
    iconName: "threekit.png",
    description: "Worked with clients and internal sales & technical teams to deploy Threekit's technology with superior UX outcomes",
    bulletPoints: [
      "Communicated with prospective clients during the sales cycle to understand their business needs, and communicate how Threekit could enable compelling user experiences",
      "Create low- and high-fidelity Figma designs for prospective and new clients showing how our technology would be used on their websites",
      "Designed a React component library and design system to improve DX when using the Threekit platform",
    ],
    endDate: "2021-10-15",
    startDate: "2021-05-01",
    title: "Threekit",
    location: "Toronto",
    position: "UX Consultant",
    siteUrl: "https://threekit.com",
    figmaUrl: "https://www.figma.com/community/file/1027317639278516141/Threekit-React-Dev-Kit-Design-System",
    tools: ["React", "Figma", "Illustrator", "Sketchup", "Storybook"],
  },
  {
    key: "threekit-ux-designer",
    type: "work",
    iconName: "threekit.png",
    description: "Designed from scratch the Threekit software platform in coordination with the engineering team",
    bulletPoints: [
      "Continually collaborated with key stakeholders from across the organization to prioritize, improve, and add new features",
      "Designed highly-technical features such as 3D import/export workflows, 3D editor tools, webhook editors, etc.",
      "Designed customer-facing 3D and AR viewing tools and workflows",
    ],
    endDate: "2021-05-01",
    startDate: "2019-05-01",
    title: "Threekit",
    location: "Ottawa",
    position: "UX Designer",
    siteUrl: "https://threekit.com",
    tools: ["Figma", "Gitlab", "Jira"],
  },
  {
    key: "fairventures",
    type: "work",
    iconName: "fairventures.png",
    description: "Co-op position at the FairVentures Innovation Lab",
    bulletPoints: [
      "Interviewed industry insiders and conducted user testing to design interactive and understandable insurance policy purchasing workflows",
      "Ran design sprints to design internal tools for improving innovation and collaboration between employees in large enterprises",
    ],
    endDate: "2017-12-31",
    startDate: "2017-09-01",
    title: "FairVentures",
    location: "Kitchener",
    position: "UX Designer",
    siteUrl: "https://www.fairventures.ca/",
    tools: ["Figma", "Wix", "User interviews", "Design sprints"],
  },
  {
    key: "clearspider",
    type: "work",
    iconName: "clearspider.png",
    description: "Co-op position at ClearSpider, redesigning their complete inventory management platform",
    endDate: "2017-08-31",
    startDate: "2017-05-01",
    title: "ClearSpider",
    location: "Mississauga",
    position: "UX Designer",
    siteUrl: "https://www.clearspider.net/",
    tools: ["Adobe XD", "Adobe Illustrator", "User interviews", "Wireframing"],
  },
  {
    key: "threekit-ux-award",
    type: "award",
    iconName: "threekit.png",
    description:
      "Personal award from Threekit for the best-designed configurator UX for an external client (Lindsey Scoggins, a UK-based jeweller)",
    endDate: "2021-08-01",
    title: "Threekit",
    position: "User Experience Award",
  },
  {
    key: "greenhouse-fellowship",
    type: "award",
    iconName: "waterloo.png",
    description:
      "Competed in an ESG startup pitch competition with my cofounders; won a fellowship with a $1000 stipend to pursue our in-vitro meat project",
    endDate: "2017-04-01",
    title: "UW United College GreenHouse",
    position: "Big Ideas Fellowship",
    siteUrl: "https://www.facebook.com/ucgreenhouse/photos/t.100000728044944/1451231404952074",
  },
  {
    key: "toaster",
    type: "project",
    iconName: "toaster.png",
    description: "3D modelling tool that outputs pure HTML and CSS. Includes a node-based scene graph with property inheritence.",
    endDate: "2023-05-01",
    title: "Toaster",
    bulletPoints: ["Reached front page of Hacker News", "200+ stars on Github"],
    siteUrl: "https://petertyliu.github.io/toaster/",
    repoUrl: "https://github.com/PeterTYLiu/toaster",
    tools: ["Vite", "SASS", "TypeScript", "React", "Github Pages"],
  },
  {
    key: "xmorphic.dev",
    type: "project",
    iconName: "xmorphic.png",
    description:
      "Phyisics-based hyperrealistic CSS shadow/gradient generator. Built with modern CSS features such as custom properties and trigonometric functions.",
    endDate: "2023-04-01",
    title: "𝑥morphic.dev",
    siteUrl: "https://xmorphic.dev",
    repoUrl: "https://github.com/PeterTYLiu/xmorphic",
    tools: ["Vite", "SASS", "TypeScript", "React", "Github Pages"],
  },
  {
    key: "design-to-win-2019",
    type: "award",
    iconName: "communitech.png",
    description: "UX challenge to design an application to help newly-arrived refugees find resources in Canada.",
    title: "Communitech Design to Win",
    position: "First Place",
    bulletPoints: [
      "Came in first place with a $5000 prize",
      "Competed against 25 finalists, out of hundreds of competitors from across Canada",
    ],
    endDate: "2019-01-01",
    siteUrl: "https://communitech.ca/technews/waterloo-students-snag-top-prizes-at-code-design-to-win.html",
  },
  {
    key: "design-to-win-2018",
    type: "award",
    iconName: "communitech.png",
    description: "UX challenge to design an application to help the elderly better engage with their community.",
    bulletPoints: [
      "Came in second place with a $1000 prize",
      "Competed against 25 finalists, out of hundreds of competitors from across Canada",
    ],
    title: "Communitech Design to Win",
    position: "Second Place",
    endDate: "2018-01-01",
    siteUrl: "https://www.facebook.com/photo/?fbid=1489278614522471",
  },
  {
    key: "carleton",
    type: "education",
    iconName: "carleton.png",
    title: "Carleton University",
    position: "Full-Stack Bootcamp",
    description: "Completed a full-stack in-person web development bootcamp at Carleton University while working full-time at Threekit.",
    location: "Ottawa",
    endDate: "2020-08-01",
    startDate: "2020-02-01",
    tools: ["React", "Node.js", "MongoDB", "Express.js", "Heroku", "Git", "SQL", "Jest"],
  },
  {
    key: "uwaterloo",
    type: "education",
    iconName: "waterloo.png",
    title: "University of Waterloo",
    position: "Bachelor of Environmental Studies, Joint Honours Urban Planning and Economics Co-op",
    description: "Completed a joint degree at the University of Waterloo, with several co-op work terms",
    bulletPoints: ["President of UW Film Club", "Member of UW Quizbowl competitive trivia team"],
    endDate: "2018-12-01",
    startDate: "2013-09-01",
  },
];
