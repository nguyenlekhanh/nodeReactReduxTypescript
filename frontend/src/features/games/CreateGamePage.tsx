import { Button, Container, Grid, TextField, Typography } from "@mui/material"
import { MouseEvent, useState } from "react";
import { Game } from "../../interfaces/Game";
import { useAppDispatch } from "../../store/store";
import gameSlice, { createGame } from "./gameSlice";

export const CreateGamePage = () => {
    const dispatch = useAppDispatch();
    const [game, setGame] = useState<Game>({
        name: "",
        address: "",
        numberOfPeople: 0,
        date: "",
        time: "",
        fieldNumber: 0
    });

    const resetGame = () => {
        setGame({name: "",
        address: "",
        numberOfPeople: 0,
        date: "",
        time: "",
        fieldNumber: 0});
    }
    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        let data = {
            name: game.name,
            address: game.address,
            numberOfPeople: game.numberOfPeople,
            date: game.date,
            time: game.time,
            fieldNumber: game.fieldNumber
        }
        dispatch(createGame(data));
        //resetGame();
    }

    return (<Container>
        <Typography variant='h4'>Create Game</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField onChange={(e) => {setGame({...game, name: e.target.value})}} value={game.name} fullWidth label="name"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField onChange={e => {setGame({...game, address: e.target.value})}} value={game.address} fullWidth label="address"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField type="number" onChange={e => {setGame({...game, numberOfPeople: parseInt(e.target.value)})}} value={game.numberOfPeople} fullWidth label="numberOfPeople"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField onChange={e => setGame({...game, date: e.target.value})} InputLabelProps={{shrink:true}} type="date" value={game.date} fullWidth label="date"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField onChange={e => setGame({...game, time: e.target.value})} type="time" value={game.time} fullWidth label="time"></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField type="number" onChange={e => setGame({...game, fieldNumber: parseInt(e.target.value)})} value={game.fieldNumber} fullWidth label="fieldNumber"></TextField>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={handleSubmit} disableElevation>Create</Button>
            </Grid>
        </Grid>     
    </Container>)
}