import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {HomePage,
  LogInPage,
  SessionProvider,
  ThemeProvider,
  Header, 
  UserList, 
  GameList,
  GamePage} from './imports';

function App() {
  return (
    <Router>
      <SessionProvider>
        <ThemeProvider>
          <Header/>
          <Routes>
            <Route path="/" element={
              <HomePage/>
            }/>
            <Route path={"/login"} element={
              <LogInPage/>
            }/>
            <Route path={"/register"} element={
              <LogInPage/>
            }/>
            <Route path={"/users"} element={
              <UserList/>
            }/>
            <Route path={"/games"} element={
              <GameList/>
            }/>
            <Route path="/games/:gameid" element={
              <GamePage/>
          }/> 
          </Routes>
        </ThemeProvider>
      </SessionProvider>
    </Router>
  );
}

export default App;
