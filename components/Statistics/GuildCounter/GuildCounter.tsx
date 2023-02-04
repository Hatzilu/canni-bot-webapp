import StatisticCard from '../StatisticCard/StatisticCard';

export default async function GuildCounter() {
  const res = await fetch('https://discord.com/api/v10/users/@me/guilds', {
    method: 'get',
    headers: new Headers({
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json',
    }),
  });
  if (!res.ok) {
    return <p>something went wrong deez nuts</p>;
  }
  const guilds: Guild[] = await res.json();

  return <StatisticCard text="servers using Canni" statistic={guilds.length} />;
}

type Guild = {
  id: string,
  name: string,
  icon: string,
  owner: boolean,
  permissions: string,
  features: string[],
};
