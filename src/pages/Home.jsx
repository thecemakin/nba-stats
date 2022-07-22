import { Button, Stack, Card, CardContent, CardActions, TextField } from "@mui/material";
import Topbar from "../components/Topbar";
import logo from "../assets/images/clippers.png";
import Axios from 'axios';
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import Time from 'react-time-format';
import DetailDialog from "../components/dialogs/DetailDialog";

const Home = () => {
    const [clicked, setClicked] = useState(false);
    const [card, setCard] = useState([]);
    const [clickedData, setClickedData] = useState()

    useEffect(() => {
        Axios.get("/games", { params: { date: '2022-02-12' } })
            .then((res) => {
                console.log(res.data)
                setCard(res.data.response);


            })
    }, [])
    const openDialog = (data) => {
        // fetch clicked item data
        setClickedData(data);
        setClicked(true);
    }

    const handleDialogClose = () => {
        setClicked(false);
    }

    return (
        <div className="container mx-auto px-4 pb-10">
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
                    color="warning"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Stack>
            <div className="card-wrapper grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-4 ">
                {card.length > 0 && card.map((card, index) => (
                    <Card key={index} variant="outlined">
                        <CardContent className="grid grid-cols-3">
                            <div className="team bg-white-600 text-center !items-center ">
                                <img className="team-logo" src={card.teams.home.logo} alt="pic" />
                                <div className="font-bold lg:text-xs">{card.teams.home.name}</div>
                                <div className="font-normal text-sm text-gray-500">{card.scores.home.series.win}-{card.scores.home.series.loss}</div>
                            </div>
                            <div className="flex justify-center items-center"><div><Time value={card.date.start} format="hh:mm" /></div></div>
                            <div className="team text-center">
                                <img className="team-logo " src={card.teams.visitors.logo} alt="pic" />
                                <div className="font-bold lg:text-xs">{card.teams.visitors.name}</div>
                                <div className="font-normal text-sm text-gray-500">{card.scores.visitors.series.win}-{card.scores.visitors.series.loss}</div>
                            </div>
                        </CardContent>
                        <CardActions className="border-t-2">
                            <Button className="!block !mx-auto" size="small" variant="outlined" color="secondary" onClick={() => { openDialog(card) }}>Show Details</Button>
                        </CardActions>
                    </Card>

                ))}
            </div>
            <DetailDialog isOpen={clicked} closeDialog={handleDialogClose} data={clickedData}></DetailDialog>
        </div>
    );
}

export default Home;