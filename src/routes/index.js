import Container from "../containers/Container";
import Home from "../pages/Home";
import List from "../pages/List";
import Article from "../pages/Article";
import Contact from "../pages/Contact";

export const routes = [
  {
    element: <Container />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
