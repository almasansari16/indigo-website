// import { Menu } from "@/types/menu";

// const menuData: Menu[] = [
//   {
//     id: 1,
//     title: "Home",
//     path: "/",
//     newTab: false,
//   },
//   {
//     id: 2,
//     title: "About",
//     path: "/about",
//     newTab: false,
//   },
//   {
//     id: 33,
//     title: "Blog",
//     path: "/blog",
//     newTab: false,
//   },
//   {
//     id: 3,
//     title: "Support",
//     path: "/contact",
//     newTab: false,
//   },
//   {
//     id: 4,
//     title: "Pages",
//     newTab: false,
//     submenu: [
//       {
//         id: 41,
//         title: "About Page",
//         path: "/about",
//         newTab: false,
//       },
//       {
//         id: 42,
//         title: "Contact Page",
//         path: "/contact",
//         newTab: false,
//       },
//       {
//         id: 43,
//         title: "Blog Grid Page",
//         path: "/blog",
//         newTab: false,
//       },
//       {
//         id: 44,
//         title: "Blog Sidebar Page",
//         path: "/blog-sidebar",
//         newTab: false,
//       },
//       {
//         id: 45,
//         title: "Blog Details Page",
//         path: "/blog-details",
//         newTab: false,
//       },
//       {
//         id: 46,
//         title: "Sign In Page",
//         path: "/signin",
//         newTab: false,
//       },
//       {
//         id: 47,
//         title: "Sign Up Page",
//         path: "/signup",
//         newTab: false,
//       },
//       {
//         id: 48,
//         title: "Error Page",
//         path: "/error",
//         newTab: false,
//       },
//     ],
//   },
// ];
// export default menuData;


import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Collections",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "AW 23-24",
        path: "/collections/AW23-24",
        newTab: false,
      },
      {
        id: 42,
        title: "AW 24-25",
        path: "/collections/AW24-25",
        newTab: false,
      },
      {
        id: 43,
        title: "SS 24",
        path: "/collections/SS24",
        newTab: false,
      },
      {
        id: 44,
        title: "SS 25",
        path: "/collections/SS25",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 33,
    title: "Sustainability",
    path: "/sustainability",
    newTab: false,
  },
  {
    id: 32,
    title: "Indigoals",
    path: "/indigoals",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
 
];
export default menuData;