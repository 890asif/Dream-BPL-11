import PlayerCard from './PlayerCard';
import type { Player } from '../../types/playerType';

const AvailablePlayers = ({players}: {players: Player[]}) => {
   
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                players.map((player)=>(
                 <PlayerCard key={player.id} player={player}></PlayerCard>
            ))}
        </div>
    );
};

export default AvailablePlayers;