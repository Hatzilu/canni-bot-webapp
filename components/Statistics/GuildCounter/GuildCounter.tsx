import { BASE_URL } from '../../../consts/consts';
import StatisticCard from '../StatisticCard/StatisticCard';

export default async function GuildCounter() {
  const res = await fetch(`${BASE_URL}/api/botGuilds`);
  const guildCount: number = await res.json();

  return <StatisticCard text="servers using Canni" statistic={guildCount} />;
}
