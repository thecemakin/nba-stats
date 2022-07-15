import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Skeleton, Card, CardContent, CardActions,TextField } from "@mui/material";
import Topbar from "../components/Topbar";
import logo from "../assets/images/clippers.png";
import Axios from 'axios';
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import Time from 'react-time-format';

const Home = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        Axios.get("/games", { params: { date: '2022-02-12' } })
            .then((res) => {
                console.log(res.data)
                setCard(res.data.response);
            })
    }, [])

    return (
        <div className="container mx-auto px-4 ">
            <Topbar />
            <h1 className="text-3xl font-bold my-5">
                GAMES
            </h1>
            <Stack className="mb-5 items-start" component="form" noValidate spacing={3}>
                <TextField
                    id="date"
                    label="Game Date"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 300 }}
                    color= "warning"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                /></Stack>
                <div className="card-wrapper grid grid-cols-4 gap-4 ">
                    {card.length > 0 && card.map((card, index) => (

                        <Card key={index} variant="outlined">
                            <CardContent className="grid grid-cols-3">
                                <div className="team bg-white-600 text-center !items-center ">
                                    <img className="w-28 h-28 " src={card.teams.home.logo} alt="pic" />
                                    <div className="font-bold">{card.teams.home.name}</div>
                                    <div className="font-normal text-sm text-gray-500">{card.scores.home.series.win}-{card.scores.home.series.loss}</div>
                                </div>
                                <div className="flex justify-center items-center"><div><Time value={card.date.start} format="hh:mm"/></div></div>
                                <div className="team text-center">
                                    <img className="w-28 h-28 " src={card.teams.visitors.logo} alt="pic" />
                                    <div className="font-bold">{card.teams.visitors.name}</div>
                                    <div className="font-normal text-sm text-gray-500">{card.scores.visitors.series.win}-{card.scores.visitors.series.loss}</div>
                                </div>
                            </CardContent>
                            <CardActions className="border-t-2">
                                <Button className="!block !mx-auto" size="small" variant="outlined" color="secondary">Show Details</Button>
                            </CardActions>
                        </Card>

                    ))}
                </div>
                <div className="dropdown mt-5 w-1/4 mx-auto">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={5}
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="skeleton mt-5 w-1/4 mx-auto">
                    <Stack spacing={1}>
                        <Skeleton variant="text" />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={210} height={118} />
                    </Stack>
                </div>
        </div>

    );
}

export default Home;