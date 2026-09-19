import  { use } from 'react';
import type { Player  } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps{
    playersPromise: Promise<Player[]>
}

const Players = ({playersPromise}:PlayersProps) => {
    console.log(playersPromise)

    const Players = use(playersPromise)
    console.log(Players)
    return (
        <div className="max-w-7xl mx-auto px-15">
            <div className='flex justify-between gap-4 p-6'>
                <h2 className='font-bold text-2xl text-gray-800'>Available Players</h2>

                <div className='flex gap-4'>
                <button className="bg-[#FF6900] px-6 py-2 rounded-xl font-bold text-white">Available</button>

                <button className="bg-[#FF6900] px-6 py-2 rounded-xl font-bold text-white">Selected</button>
                </div>
            </div>
            <AvailablePlayers players={Players}></AvailablePlayers>
        </div>
    );
};

export default Players;