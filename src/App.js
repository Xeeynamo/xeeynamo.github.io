import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Who from './components/Who'
import Curriculum from './components/Curriculum'
import Projects from './components/Projects';
import NotFound from './components/NotFound'

const routes = [
  {
    path: "/",
    element: renderPage(<Who />, true),
    errorElement: <NotFound />
  },
  {
    path: "/who",
    element: renderPage(<Who />, true),
  },
  {
    path: "/cv",
    element: renderPage(<Curriculum />, false),
  },
  {
    path: "/projects",
    element: renderPage(<Projects />, true),
  }
]
const router = createHashRouter(routes);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

function renderPage(inner, isCv) {
  return (
    <div className='App'>
      <Header showExtraLinks={isCv} />
      <div className='AppContent'>
        {inner}
      </div>
      <Footer className='Footer' />
    </div>
  )
}
