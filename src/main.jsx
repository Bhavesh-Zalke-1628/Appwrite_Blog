import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, LogIn } from './component/index.js'

import Home from './Pages/Home.jsx'

import AddPost from './Pages/AddPost.jsx'
import Signup from './Pages/Signup'
import EditPost from "./Pages/EditPost";

import Post from "./Pages/Post";
import AllPosts from './Pages/AllPosts.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element:
          (
            <AuthLayout authentication={false}>
              <LogIn />
            </AuthLayout>
          ),
      },
      {
        path: "/signup",
        element:
          (
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout>
          ),
      },
      {
        path: "/allposts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)