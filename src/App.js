import { GlobalStyle } from './GlobalStyle';
import { NavBar } from './layouts/NavBar';
import { Main } from './layouts/Main';
import { Home } from './components/Home';

export const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Main>
        <Home />
      </Main>
      <GlobalStyle />
    </div>
  );
};
