import  { use } from 'react';
import type { Player } from '../../types/playerType';

interface PlayersProps{
    playersPromise: Promise<Player[]>
}

const Players = ({playersPromise}:PlayersProps) => {
    console.log(playersPromise)

    const Players = use(playersPromise)
    console.log(Players)
    return (
        <div>
            
        </div>
    );
};

export default Players;