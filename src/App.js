import { GlobalStyle } from './GlobalStyle';
import { NavBar } from './layouts/NavBar';

export const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <h1>Celdagram</h1>
      <GlobalStyle />
    </div>
  );
};
