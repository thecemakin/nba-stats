import { Card, CardContent } from '@mui/material';
import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Topbar from '../components/Topbar';
import DPlayer from '../assets/images/DefaultPlayer.png';

export default function Players() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    Axios.get("/players", { params: { team: '1', season: '2021' } })
      .then((res) => {
        setPlayer(res.data.response);
        console.log(res.data.response);
      }).catch(err => console.log(err));
  }, [])
  return (
    <div className="container mx-auto px-4 pb-10">
      {/* <Topbar /> */}

      <h1 className="text-3xl font-bold my-5">
        PLAYERS
      </h1>
      
      <div className='player-container'>
        <div className="card-wrapper grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-4 ">
          {player && player.length > 0 && player.map((player, index) => (

            <Card  key={index} variant='outlined'>
              <CardContent className='grid grid-cols-2'>
                <div className='team bg-gray-600 text-center !items-center '>
                  <div className='player-pic text-slate-50'><img src={DPlayer} alt="pic" />{player.lastname}, {player.firstname}</div>
                </div>
                <div className='team bg-white-600 text-start !items-center ml-3'>
                  <div>Birth: {player.birth.date }</div>
                  <hr />
                  <div>Country: {player.birth.country}</div>
                  <hr />
                  <div>Height: {player.height.meters} m</div>
                  <hr />
                  <div>Weight: {player.weight.kilograms} kg</div>
                  <hr />
                  <div></div>
                  <div>NBA Debut: {player.nba.start}</div>
                  <div className='mt-5'>College: {player.college}</div>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
