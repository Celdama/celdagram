import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { NavBar } from './layouts/NavBar';
import { Main } from './layouts/Main';
import { Home } from './components/Home';
import { Profile } from './components/Profile';

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          {/* <Home /> */}
        </Main>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};
