import Image from 'next/image';
import Link from 'next/link';
import StatisticsSection from '../components/Statistics/StatisticsSection/StatisticSection';

export default function Home() {
  const inviteUrlOrNull = process.env.DISCORD_INVITE_LINK;

  return (
    <div className={'relative w-full p-5 text-white shadow-lg'}>
      <div className="flex flex-col gap-10 rounded-lg bg-gray-900 p-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Canni</h1>
            <p>
              This is an open-source project I&apos;ve been working on for a
              while, It&apos;s a neat little bot made for shits and giggles.
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
      </div>
    </div>
  );
}
