import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Tests from './pages/Tests'
import TeacherPage from './pages/TeacherPage'
import Test from './pages/Test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tests',
    element: <Tests />,
  },
  {
    path: '/teacher',
    element: <TeacherPage />,
  },
  {
    path: '/test/:testId',
    element: <Test />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
