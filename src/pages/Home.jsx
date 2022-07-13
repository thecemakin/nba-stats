import { Button, FormControl, InputLabel, MenuItem, Select, Stack, Skeleton } from "@mui/material";

const Home = () => {
    return (
        <div className="container mx-auto px-4 mt-5 text-center">
            <h1 className="text-3xl font-bold underline my-5">
                Hello world!
            </h1>


            <div className="buttons">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
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