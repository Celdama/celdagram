import { GlobalStyle } from './GlobalStyle';
import { NavBar } from './layouts/NavBar';
import { Main } from './layouts/Main';

export const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Main>
        <h1>Celdagram</h1>
      </Main>
      <GlobalStyle />
    </div>
  );
};
