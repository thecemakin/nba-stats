import { Dialog, TableContainer, TableHead, TableRow, TableCell, TableBody, Table } from "@mui/material"

export default function DetailDialog({ isOpen, closeDialog, data }) {

    return (
        <div className="detail-dialog ">
            <Dialog  onClose={closeDialog} open={isOpen} >
                {data && <div className="container">
                    <TableContainer className="">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Teams</TableCell>
                                    <TableCell align="center">Arena</TableCell>
                                    <TableCell align="center">Scores</TableCell>
                                    <TableCell align="center">Code</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell><img className="team-logo" src={data.teams.home.logo} alt="Pic" /><div className="text-center">{data.teams.home.nickname}</div></TableCell>
                                    <TableCell>{data.arena.name}<div className="text-center">{data.arena.city}</div></TableCell>
                                    <TableCell>
                                        <div className="text-center">Win: {data.scores.home.win}</div>
                                        <div className="text-center">Lose: {data.scores.home.loss}</div>
                                        <div className="text-center">Points: {data.scores.home.points}</div>
                                    </TableCell>
                                    <TableCell>{data.teams.home.code}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img className="team-logo" src={data.teams.visitors.logo} alt="Pic" /><div className="text-center">{data.teams.visitors.nickname}</div></TableCell>
                                    <TableCell><div className="text-center">Visitor</div></TableCell>
                                    <TableCell><div className="text-center">Win: {data.scores.visitors.win}</div>
                                        <div className="text-center">Lose: {data.scores.visitors.loss}</div>
                                        <div className="text-center">Points: {data.scores.visitors.points}</div>
                                    </TableCell>
                                    <TableCell>{data.teams.visitors.code}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>}
            </Dialog>
        </div>
    )
}
