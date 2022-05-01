import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Router, Routes, Route } from 'react-router-dom';

import { fetchGenWordStart } from './redux/generated.w/generated.w.actions';
import { checkUserSession } from './redux/user/user.actions';

import WordGuessPage from './routes/word-guess/word-guess.component';
import Navigation from './routes/navigation/navigation.component';
import LeaderBoardPage from './routes/leader-board/leader-board.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchGenWordStart());
  }, []);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Router basename={process.env.PUBLIC_URL}>
        <h2>Hello this is me</h2>
        {/* <Route exact path="/" element={<Navigation />} > */}
          {/* <Route path="/word-guess" element={<WordGuessPage />} /> */}
          {/* <Route path="/leader-board" element={<LeaderBoardPage />} /> */}
          {/* <Route path="sign-in" element={<Authentication />} /> */}
        {/* </Route> */}
      </Router>
    </Routes>
  );
}

export default App;
