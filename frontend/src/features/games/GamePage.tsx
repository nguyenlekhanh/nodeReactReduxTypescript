import { useAppSelector } from "../../store/store";

const GamePage = () => {
  const { games } = useAppSelector((state) => state.games);

  return (
    <div>
      <h2>Game Page</h2>
      <ul>
        {games &&
          games.map((game) => (
            <li key={game._id}>
              <h4>{game.name}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GamePage;
