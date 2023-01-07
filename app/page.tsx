import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full p-5 text-white shadow-lg">
      <div className="rounded-lg bg-gray-900 p-5">
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
      </div>
    </div>
  );
}
