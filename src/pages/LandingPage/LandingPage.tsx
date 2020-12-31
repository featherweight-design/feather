import { FC } from 'react';

import { copyContent } from 'shared';
import './LandingPage.scss';

const { heading, subHeading, imageAlt } = copyContent.landingPage;

const LandingPage: FC = () => (
  <div className="app-initials-landing-page">
    <h1 className="app-initials-landing-page__heading">{heading}</h1>
    <p className="app-initials-landing-page__sub-heading">{subHeading}</p>
    <img
      className="app-initials-landing-page__image"
      src={`${process.env.PUBLIC_URL}/assets/logo512.png`}
      alt={imageAlt}
    />
  </div>
);

export default LandingPage;

// import { FC } from 'react';
// import logo from './logo.svg';
// import './App.css';

// const App: FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

// export default App;
