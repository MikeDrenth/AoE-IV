import React from "react";
import { SearchField } from "./SearchField";
import Link from "next/link";

interface PlayerList {
  count: number;
  event_leaderboard: number;
  leaderboard: [];
  start: number;
  total: number;
  request: [];
}

interface PlayerProps {
  country: string;
  drops: number;
  games: number;
  highest_rating: number;
  highest_streak: number;
  last_match_time: number;
  losses: number;
  lowest_streak: number;
  name: string;
  previous_rating: number;
  profile_id: number;
  rank: number;
  rating: number;
  steam_id: string;
  streak: number;
  wins: number;
}

const TopPlayers: React.FC = ({ request }: PlayerList) => {
  console.log(request);
  return (
    <>
      <h3 className="text-4xl font-sans mb-4 text-white font-light">
        Leaderboard
      </h3>
      <table className="table-auto bg-[#1d1d1d] rounded-md font-sans font-light">
        <thead>
          <tr>
            <th className="p-3 pl-5">Rank</th>
            <th className="p-3 pl-5 text-left">Name</th>
            <th className="p-3 pl-5">Wins</th>
            <th className="p-3 pl-5">WR %</th>
            <th className="p-3 pl-5">Rating</th>
          </tr>
        </thead>
        <tbody>
          {request.players.map(
            (
              {
                name,
                profile_id,
                rank,
                rating,
                win_rate,
                wins_count,
                last_rating_change,
              }: PlayerProps,
              index: number
            ) => (
              <tr
                key={index}
                className={`{index} % 2 === 0 ? "even" : "odd" hover:bg-zinc-900 hover:text-violet-400`}
              >
                <td className="p-3 pl-5 border-t border-slate-700">{rank}</td>

                <td className="p-3 pl-5 border-t border-slate-700">
                  <Link href={`/player/${encodeURIComponent(profile_id)}`}>
                    <a>{name}</a>
                  </Link>
                </td>
                <td className="p-3 pl-5 border-t border-slate-700">
                  {wins_count}
                </td>
                <td className="p-3 pl-5 border-t border-slate-700">
                  {win_rate} %
                </td>
                <td className="p-3 pl-5 border-t border-slate-700">
                  {rating} : {last_rating_change}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default TopPlayers;
