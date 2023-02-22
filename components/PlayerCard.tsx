import React from "react";
import Link from "next/link";
import Image from "next/image";

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

const PlayerCard: React.FC = ({ request }: PlayerList) => {
  console.log(request);
  return (
    <>
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
            avatars,
          }: PlayerProps,
          index: number
        ) => (
          <div
            key={index}
            className={`{index} % 2 === 0 ? "even" : "odd" hover:bg-zinc-900 hover:text-violet-400`}
          >
            <Image
              src={`${avatars.medium}`}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Link href={`/player/${encodeURIComponent(profile_id)}`}>
              <a>{name}</a>
            </Link>
            {wins_count}
            {win_rate} %{rating} : {last_rating_change}
          </div>
        )
      )}
    </>
  );
};

export default PlayerCard;
