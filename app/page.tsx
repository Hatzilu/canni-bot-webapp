import Image from 'next/image';
import Link from 'next/link';
import PageCard from '../components/PageCard/PageCard';
import StatisticsSection from '../components/Statistics/StatisticsSection/StatisticSection';

export default function Home() {
  const inviteUrlOrNull = process.env.DISCORD_INVITE_LINK;

  return (
    <PageCard>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Canni</h1>
          <p>
            This is an open-source project I&apos;ve been working on for a
            while, It&apos;s a neat little bot made for shits and giggles.
          </p>
          <p>
            Canni has two versions, <strong>Canni Nox 🌑</strong> and{' '}
            <strong>Canni Lumos 🌞</strong>. <br /> Lumos is the free version,
            that has all the basic commands. <br />
            Nox has all the basic commands and a few extra tweaks to make it
            cooler 😎
          </p>
        </div>
        <Image
          src="/canni-pfp.png"
          width={100}
          height={100}
          className="scale-100 rounded-3xl transition-all duration-100 ease-out hover:rounded-xl"
          alt="Canni bot's discord profile picture"
        />
      </div>
      <StatisticsSection />
      {inviteUrlOrNull && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={inviteUrlOrNull}
          className="rounded-lg bg-gradient-to-br from-indigo-500  to-indigo-600  p-3 text-center font-bold transition-all duration-100 ease-out hover:opacity-80"
        >
          Invite Canni to your server!
        </Link>
      )}
    </PageCard>
  );
}
