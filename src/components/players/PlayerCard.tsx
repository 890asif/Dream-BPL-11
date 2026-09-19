import { FaStar, FaUser, FaTrophy } from 'react-icons/fa';
import type { Player } from '../../types/playerType';

interface PlayerCardProps {
    player: Player;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Player Image */}
            <figure className="relative h-72 overflow-hidden bg-gray-50">
                <img
                    src={player.image}
                    alt={player.name}
                    className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-[#FF6900] px-3 py-1 text-sm font-semibold text-white shadow">
                        {player.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-white backdrop-blur-sm">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">
                        {player.rating}
                    </span>
                </div>
            </figure>

            {/* Card Body */}
            <div className="space-y-4 p-5">

                {/* Player Name */}
                <div className="flex items-center gap-3">

                    <div className="rounded-full bg-orange-100 p-2.5 text-orange-500">
                        <FaUser />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            {player.name}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {player.team}
                        </p>
                    </div>
    
                </div>

                <div className="divider my-1"></div>

                {/* Batting & Bowling */}
                <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-xs font-medium text-gray-500">
                            BATTING STYLE
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-700">
                            {player.battingStyle}
                        </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-xs font-medium text-gray-500">
                            BOWLING STYLE
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-800">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between gap-3 pt-2">

                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            PRICE
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800">
                            ${player.price}M
                        </h3>
                    </div>

                    <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-3 py-2 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-600 hover:shadow-md">
                        <FaTrophy />
                        Choose Player
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;