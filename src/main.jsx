import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFoundPages from './components/utils/NotFoundPages.jsx'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import { ShopProvider } from './context/ShopContext.jsx'

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
       index: true,
       element: <Home />
      },

      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/product-details/:id",
        element: < ProductDetails/>
      },
      {
        path: "/*",
        element: <NotFoundPages/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
      <RouterProvider router={routerProvider} />
    </ShopProvider>
    
  </React.StrictMode>,
)
