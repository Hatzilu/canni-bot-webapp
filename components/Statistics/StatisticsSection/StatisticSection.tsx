import React from 'react';
import GuildCounter from '../GuildCounter/GuildCounter';
import StatisticCard from '../StatisticCard/StatisticCard';

export default function StatisticSection() {
  return (
    <div className="flex flex-wrap justify-between gap-5 p-5">
      {/* @ts-ignore */}
      <GuildCounter />
      <StatisticCard text="users vibing with Canni" statistic={329} />
      <StatisticCard text="bugs found so far" statistic={420} />
      <StatisticCard text="totally real statistics" statistic={37} />
      <StatisticCard text="actual real statistic" statistic={1} />
    </div>
  );
}
