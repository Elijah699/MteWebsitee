// import logo from './logo.svg';
import './styles/App.css';
import './styles/NavBarStyles.css';
import './styles/HomePage.css';
import './styles/Carousels.css';
import './styles/StudentHoverStyle.css';
import './styles/Footer.css';
// import LogIn from './Screens/LogIn';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import NavBar from './Screens/NavBar';
import HomePage from './pages/HomePage';
// import StudentHover from './Screens/StudentHover';
import Footer from './pages/Footer';
import { BrowserRouter, useRoutes } from 'react-router-dom';
// import Carousels from './Screens/Carousels';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    // {
    //   path: '',
    //   element:
    // }
  ])
}

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       {/* <LogIn /> */}
//       {/* <NavBar /> */}
//       <HomePage />
//       {/* <Carousels /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
