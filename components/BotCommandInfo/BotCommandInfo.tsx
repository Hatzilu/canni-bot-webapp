import { APIApplicationCommand } from 'discord-api-types/v10';
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

type Props = {
  data: APIApplicationCommand,
};
function BotCommandInfo({ data }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-3xl bg-gray-700 p-5">
      <div className="flex gap-5">
        <h1 className="text-1xl font-bold">/{data.name}</h1>
        {data.options?.map((option) => (
          <div key={option.name} className="flex gap-3">
            <p className="text-gray-500">
              {option.name}
              {option.required ? '?' : null}:
            </p>

            <p className="text-gray-500">{option.description}</p>
          </div>
        ))}
      </div>
      <p>{data.description}</p>
      {data.nsfw ? (
        <div className="rounded-3x flex items-center gap-2 p-1">
          <FaExclamationTriangle className="text-yellow-400" /> NSFW command!
        </div>
      ) : null}
    </div>
  );
}

export default BotCommandInfo;
