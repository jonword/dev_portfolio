import ecommerce from "../assets/images/projects/ecommerce.jpg";
import reddit from "../assets/images/projects/reddit-lite.jpg";
import portfolio from "../assets/images/projects/portfolio.png";

const projects = [
  {
    title: "Reddit-Lite",
    image: reddit,
    techList: "React, Redux, CSS",
    description:
      "A light version of the Reddit app with a functional search bar.",
    live: "https://jonword-reddit-lite.netlify.app",
    repo: "https://github.com/jonword/redditclient",
  },

  {
    title: "E-Commerce Product Page",
    image: ecommerce,
    techList: "React, TypeScript, Redux, CSS",
    description:
      "A responsive web-page that allows you to add the item to your cart and updates the cart accordingly.",
    live: "https://jonword-e-commerce.netlify.app",
    repo: "https://github.com/jonword/e-commerce-page",
  },
];

export default projects;
