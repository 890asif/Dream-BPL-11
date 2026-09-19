
import { use, useState } from 'react';
import type { Player } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';


interface PlayersProps {
    playersPromise: Promise<Player[]>
}

const Players = ({ playersPromise }: PlayersProps) => {
    console.log(playersPromise)

    const Players = use(playersPromise)
    console.log(Players)

    const [buttonType, setButtonType] = useState("available")
    console.log(buttonType)

    const handleUpdateType = (type: "available" |  "selected")=>{
        setButtonType(type);
    }

    return (
        <div className="max-w-7xl mx-auto px-15">
            <div className='flex justify-between gap-4 p-6'>
                <h2 className='font-bold text-2xl text-gray-800'>{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>

             <div>
                <button onClick={() => handleUpdateType("available")} className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
                <button onClick={() => handleUpdateType("selected")} className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
            </div>
            </div>
           
        {buttonType === "available" ? ( <AvailablePlayers players={Players}></AvailablePlayers>) : (<SelectedPlayers></SelectedPlayers>)}
        </div>
    );
};

export default Players;