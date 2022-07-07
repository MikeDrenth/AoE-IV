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
      <h3 className="text-4xl font-sans mb-4">Leaderboard</h3>
      <table className="table-auto bg-purple-600 border-2 border-purple-400">
        <thead>
          <tr>
            <th className="p-3">Rank</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3">Wins</th>
            <th className="p-3">WR %</th>
            <th className="p-3">Rating</th>
          </tr>
        </thead>
        <tbody>
          {request.leaderboard.map(
            (
              { name, profile_id, wins, rank, rating, games }: PlayerProps,
              index: number
            ) => (
              <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                <td className="p-3">{rank}</td>

                <td className="p-3">
                  <Link href={`/player/${encodeURIComponent(profile_id)}`}>
                    <a>{name}</a>
                  </Link>
                </td>
                <td className="p-3">{rating}</td>
                <td className="p-3">{wins}</td>
                <td className="p-3">{Math.round((100 / games) * wins)}%</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default TopPlayers;
