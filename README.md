# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- REACT  -->

// import React, { useEffect, useState } from 'react'

// const fetchData = async ()=>{
// return await fetch("http://api.com").then((res)=> res.json());
// }
// // => React 18
// const oldApproach =()=>{
// const [data,setData] = useState(null)
// useEffect(()=>{
// fetchData().then(setData);
// },
// [])
// return <div>{data?.title}</div>;
// }

// // => REACT 19
// const dataApproach = () => {
// const data = use(fetchData());
// return <div>{data?.title}</div>
// }
#   R e a c t F o l i o 
 

React Todo Project Listing/
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public/
│ └─ vite.svg
├─ README.md
├─ src/
│ ├─ App.css
│ ├─ App.jsx
│ ├─ assets/
│ │ ├─ nav1.jpeg
│ │ ├─ nav2.jpeg
│ │ ├─ nav3.jpeg
│ │ ├─ navbar (4).jpeg
│ │ ├─ navbar (5).jpeg
│ │ ├─ profile.png
│ │ └─ react.svg
│ ├─ components/
│ │ ├─ Button.jsx
│ │ ├─ Input.jsx
│ │ ├─ Modal.jsx
│ │ ├─ NewProject.jsx
│ │ ├─ NoProjectSelect.jsx
│ │ ├─ ProjectSidebar.jsx
│ │ ├─ SelectedProject.jsx
│ │ └─ Task/
│ │ ├─ NewTask.jsx
│ │ └─ Tasks.jsx
│ ├─ index.css
│ └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js
