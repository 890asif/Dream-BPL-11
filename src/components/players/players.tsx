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
            <div className='flex justify-between gap-6 p-6'>
                <h2 className='font-bold text-2xl'>Available Players</h2>

                <div className='flex gap-4'>
                <button className="btn btn-active btn-warning">Available</button>

                <button className="btn btn-active btn-warning">Selected</button>
                </div>
            </div>
            <AvailablePlayers players={Players}></AvailablePlayers>
        </div>
    );
};

export default Players;