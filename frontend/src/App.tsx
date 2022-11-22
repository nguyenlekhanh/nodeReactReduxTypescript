import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import GamePage from "./features/games/GamePage";
import { getGames } from "./features/games/gameSlice";
import { SingleGamePage } from "./features/games/SingleGamePage";
import { useAppDispatch } from "./store/store";
import './App.css';
import { CreateGamePage } from "./features/games/CreateGamePage";
import { UpdateGamePage } from "./features/games/UpdateGamePage";


const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    //console.log('get data');
    await dispatch(getGames());
    //console.log('done get data');
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/game/:id" element={<SingleGamePage />} />
        <Route path="/creategame" element={<CreateGamePage />} />
        <Route path="/editgame/:id" element={<UpdateGamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
