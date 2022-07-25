import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function Standings() {
    const [stand, setStand] = useState([]);
    useEffect(() => {
        Axios.get("/standings", { params: { league: 'standart', season: '2021' } })
            .then((res) => {
                setStand(res.data.response);
                console.log(res.data.response);
            }).catch(err => console.log(err));
    }, [])

    return (
        <div className='standings-container mx-auto px-4 pb-10'>
            <Topbar />
            <h1 className="text-3xl font-bold my-5">
                STANDINGS
            </h1>
            <hr />
            <div className='table-container w-4/5 ml-32 '>
                <TableContainer className=''>
                    <Table className=''>
                        <TableHead className=''>
                            <TableRow>
                                <TableCell align='center'><span className='font-bold lg:text-base'>Team</span></TableCell>
                                <TableCell align='center'><span className='font-bold lg:text-base'>Stats</span></TableCell>
                                <TableCell align='center'><span className='font-bold lg:text-base'>Division</span></TableCell>
                                <TableCell align='center'><span className='font-bold lg:text-base'>Win Rate</span></TableCell>
                                <TableCell align='center'><span className='font-bold lg:text-base'>Loss</span></TableCell>
                                <TableCell align='center'><span className='font-bold lg:text-base'>Season</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{stand.length > 0 && stand.map((stand, index) => (
                            <TableRow key={index}>
                                <TableCell align='center'>
                                    <div className='team bg-white-600 !text-center flex !items-center flex-col'>
                                        <img className='team-logo !items-center' src={stand.team.logo} alt="pic" />
                                        <div className='team-name font-bold lg:text-sm'>{stand.team.nickname}</div>
                                    </div>
                                </TableCell>
                                <TableCell align='center'>
                                    <div className='font-bold lg:text-sm'>Conference: {stand.conference.name}</div>
                                    <div className='font-bold lg:text-sm'>Win: {stand.conference.win}</div>
                                    <div className='font-bold lg:text-sm'>Loss: {stand.conference.loss}</div>
                                    <div className='font-bold lg:text-sm'>Rank: {stand.conference.rank}</div>
                                </TableCell>
                                <TableCell align='center'>
                                    <div className='font-bold lg:text-sm'>Games Behind: {stand.division.gamesBehind}</div>
                                    <div className='font-bold lg:text-sm'>Name: {stand.division.name}</div>
                                    <div className='font-bold lg:text-sm'>Loss: {stand.division.loss}</div>
                                    <div className='font-bold lg:text-sm'>Win: {stand.division.win}</div>
                                    <div className='font-bold lg:text-sm'>Rank: {stand.division.rank}</div>
                                </TableCell>
                                <TableCell align='center'>
                                    <div className='font-bold lg:text-sm'>Away: {stand.win.away}</div>
                                    <div className='font-bold lg:text-sm'>Home: {stand.win.home}</div>
                                    <div className='font-bold lg:text-sm'>Last Ten: {stand.win.lastTen}</div>
                                    <div className='font-bold lg:text-sm'>Persentage: {stand.win.persentage}</div>
                                    <div className='font-bold lg:text-sm'>Total: {stand.win.total}</div>
                                </TableCell>
                                <TableCell align='center'>
                                    <div className='font-bold lg:text-sm'>Away: {stand.loss.away}</div>
                                    <div className='font-bold lg:text-sm'>Home: {stand.loss.home}</div>
                                    <div className='font-bold lg:text-sm'>Last Ten: {stand.loss.lastTen}</div>
                                    <div className='font-bold lg:text-sm'>Persentage: {stand.loss.persentage}</div>
                                    <div className='font-bold lg:text-sm'>Total: {stand.loss.total}</div>
                                </TableCell>
                                <TableCell align='center'>
                                    <div className='font-bold lg:text-sm'>{stand.season}</div>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>



            </div>

        </div>

    )
}
