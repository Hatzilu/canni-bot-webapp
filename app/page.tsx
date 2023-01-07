import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const inviteUrlOrNull = process.env.DISCORD_INVITE_LINK;

  return (
    <div className="relative w-full p-5 text-white shadow-lg">
      <div className="flex flex-col gap-10 rounded-lg bg-gray-900 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-bold">Canni</h1>
            <p>
              Canni is an open-source project I&apos;ve been working on for a
              while, It&apos;s a neat little bot made for shits and giggles.
            </p>
          </div>
          <Image
            src="/canni-pfp.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="Canni bot's discord profile picture"
          />
        </div>
        {inviteUrlOrNull && (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${inviteUrlOrNull}`}
            className="rounded-lg bg-indigo-500 p-3 text-center font-bold"
          >
            Invite Canni
          </Link>
        )}
      </div>
    </div>
  );
}
