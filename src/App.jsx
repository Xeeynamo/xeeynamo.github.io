import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Who from './components/Who'
import Curriculum from './components/Curriculum'
import Projects from './components/Projects';
import NotFound from './components/NotFound'

const routes = [
  {
    path: "/",
    element: renderPage(<Who />),
    errorElement: renderPage(<NotFound />),
  },
  {
    path: "/who",
    element: renderPage(<Who />),
  },
  {
    path: "/cv",
    element: renderPage(<Curriculum />),
  },
  {
    path: "/projects",
    element: renderPage(<Projects />),
  }
]

const router = createHashRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}

function renderPage(content) {
  return (
    <div className='App'>
      <Header />
      <div className='AppContent'>
        {content}
      </div>
      <Footer />
    </div>
  )
}
