import ecommerce from "../../assets/images/projects/ecommerce.jpg";
import reddit from "../../assets/images/projects/reddit-lite.jpg";

const projects = [
  {
    id: 1,
    title: "Reddit-Lite",
    image: reddit,
    alt: "Reddit-Lite project",
    techList: "React, Redux, CSS",
    description:
      "A light version of the Reddit app with a functional search bar.",
    live: "https://jonword-reddit-lite.netlify.app",
    repo: "https://github.com/jonword/redditclient",
  },

  {
    id: 2,
    title: "E-Commerce Product Page",
    image: ecommerce,
    alt: "E-Commerce project",
    techList: "React, TypeScript, Redux, CSS",
    description:
      "A responsive web-page that allows you to add the item to your cart and updates the cart accordingly.",
    live: "https://jonword-ecommerce-spa.netlify.app",
    repo: "https://github.com/jonword/Ecommerce-product",
  },
];

export default projects;
