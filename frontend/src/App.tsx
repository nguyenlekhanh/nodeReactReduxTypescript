import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./features/games/GamePage";
import { getGames } from "./features/games/gameSlice";
import { useAppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
