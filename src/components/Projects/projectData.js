import reddit from "../../assets/images/projects/reddit-lite.jpg";
import drumshop from "../../assets/images/projects/drumshop.png";

const projects = [
  {
    id: 1,
    title: "Reddit-Lite",
    image: reddit,
    alt: "Reddit-Lite project",
    techList: "React, Redux, CSS",
    description:
      "A light version of the Reddit app with a functional search bar.",
    live: "https://redditapp-jonword.vercel.app",
    repo: "https://github.com/jonword/redditclient",
  },

  {
    id: 2,
    title: "Drumshop",
    image: drumshop,
    alt: "Drumshop project",
    techList: "Nextjs, React,TypeScript, Prisma, Supabase, Tailwind",
    description: "A responsive e-commerce web application.",
    live: "https://drumshop.vercel.app",
    repo: "https://github.com/jonword/next-ecommerce-ds",
  },
];

export default projects;
