import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../../interfaces/Game";
import { useAppDispatch, useAppSelector } from "../../store/store";
import gameSlice, { getGameById, getGames, updateGame } from "./gameSlice";

export const UpdateGamePage = () => {
  const dispatch = useAppDispatch();

  const { singleGame } = useAppSelector((state) => state.games);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(getGameById(id));
  }, [id]);

  useEffect(() => {
    setGameInitialState();
  }, [singleGame]);

  const [game, setGame] = useState<Game>({
    name: "",
    address: "",
    numberOfPeople: 0,
    date: "",
    time: "",
    fieldNumber: 0,
  });

  const setGameInitialState = () => {
    if (!singleGame) return;
    setGame({
      name: singleGame?.name,
      address: singleGame?.address,
      numberOfPeople: singleGame?.numberOfPeople,
      date: singleGame?.date,
      time: singleGame?.time,
      fieldNumber: singleGame?.fieldNumber,
    });
    console.log(singleGame);
  };

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let data = {
      _id: id,
      name: game.name,
      address: game.address,
      numberOfPeople: game.numberOfPeople,
      date: game.date,
      time: game.time,
      fieldNumber: game.fieldNumber,
    };
    dispatch(updateGame(data));
  };

  return (
    <Container>
      <Typography variant="h4">Update Game</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => {
              setGame({ ...game, name: e.target.value });
            }}
            value={game.name}
            fullWidth
            label="name"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => {
              setGame({ ...game, address: e.target.value });
            }}
            value={game.address}
            fullWidth
            label="address"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            onChange={(e) => {
              setGame({ ...game, numberOfPeople: parseInt(e.target.value) });
            }}
            value={game.numberOfPeople}
            fullWidth
            label="numberOfPeople"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setGame({ ...game, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
            type="date"
            value={game.date}
            fullWidth
            label={`Current Date ${game.date.substring(0,10).replaceAll("-", "/").split("/").reverse().join("/")}`}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setGame({ ...game, time: e.target.value })}
            type="time"
            value={game.time}
            fullWidth
            label="time"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            onChange={(e) =>
              setGame({ ...game, fieldNumber: parseInt(e.target.value) })
            }
            value={game.fieldNumber}
            fullWidth
            label="fieldNumber"
          ></TextField>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSubmit} disableElevation>
            Update
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
