import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const GamePage = () => {
  const { games } = useAppSelector((state) => state.games);
  //console.log('GamePage');
  return (
    <Container>
      <Grid container>
        {games &&
          games.map((game) => (
            <Grid item key={game._id} xs={4}>
              <Link to={`/game/${game._id}`}>
                <Grid sx={{
                  borderRadius: 2,
                  margin: 2,
                  padding: 3,
                  minHeight: 50,
                  minWidth: 50,
                  backgroundColor: 'green',
                }}>
                  <h4>{game.name ? game.name : 'no name'}</h4>
                </Grid>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default GamePage;
