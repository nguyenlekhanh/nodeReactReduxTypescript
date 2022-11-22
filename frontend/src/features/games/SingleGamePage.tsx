import { Button, Container, Grid, Typography } from '@mui/material'
import { useEffect, MouseEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { deleteGame, getGameById } from './gameSlice';

export const SingleGamePage = () => {
    const dispatch = useAppDispatch();
    const { singleGame } = useAppSelector(state => state.games);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!id) {
            return;
        };

        dispatch(getGameById(id));
    }, [id])

    const DeleteGame = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        if(!id) return;
        dispatch(deleteGame(id));
        navigate('/');
    };

    return (<Container sx={{marginTop: 10}}>
        <Typography variant='h4' fontWeight={600}>{`${singleGame?.address } - ${ singleGame?.date.toString().substring(0,10).replaceAll('-', '/') }`}</Typography>
        <Grid container>
            <Typography variant="h6">
                {singleGame?.name}
            </Typography>
            <Button onClick={DeleteGame}>Delete</Button>
            <Link to={`/editgame/${singleGame?._id}`}>
                <Button variant="contained" disableElevation>Update</Button>
            </Link>
        </Grid>
    </Container>)
}