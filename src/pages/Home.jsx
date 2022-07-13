import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Skeleton, Card, CardContent, CardActions } from "@mui/material";
import Topbar from "../components/Topbar";
import logo from "../assets/images/clippers.png";

const Home = () => {
    return (
        <div className="container mx-auto px-4 ">
            <Topbar />
            <h1 className="text-3xl font-bold my-5">
                GAMES
            </h1>
            <div className="card-wrapper grid grid-cols-4 gap-4 ">
                <Card variant="outlined">
                    <CardContent className="grid grid-cols-3">
                        <div className="team bg-white-600 text-center">
                            <img src={logo} alt="" />
                            <div className="font-bold">LA Clippers</div>
                            <div className="font-normal text-sm text-gray-500">2-3</div>
                        </div>
                        <div className="flex justify-center items-center"><div>12:35pm</div></div>
                        <div className="team text-center">
                            <img src={logo} alt="" />
                            <div className="font-bold">LA Clippers</div>
                            <div className="font-normal text-sm text-gray-500">2-3</div>    
                        </div>
                    </CardContent>
                    <CardActions className="border-t-2">
                        <Button className="!block !mx-auto" size="small" variant="outlined" color="secondary">Show Details</Button>
                    </CardActions>
                </Card>
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