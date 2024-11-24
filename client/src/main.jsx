import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomeSc/Home'
import Tests from './pages/TestSc/Tests'
import Test from './pages/TestSc/Test'
import TeacherPage from './pages/TeacherSc/TeacherPage'


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
