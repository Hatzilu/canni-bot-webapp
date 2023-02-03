'use client';
import React, { useEffect, useState } from 'react';
import BotCommandInfo from '../../components/BotCommandInfo/BotCommandInfo';
import PageCard from '../../components/PageCard/PageCard';
import { BASE_URL } from '../../consts/consts';
import { BotCommandsResponse } from '../../pages/api/commands';

function Docs() {
  const [commands, setCommands] = useState<BotCommandsResponse>([]);

  useEffect(() => {
    const handler = async () => {
      const res = await fetch(`${BASE_URL}/api/commands`);
      if (!res.ok) {
        return (
          <PageCard>
            <h1 className="text-2xl font-bold">Documentation</h1>
            <p>
              Something went wrong while fetching the commands from the server,
              please try again :(
            </p>
          </PageCard>
        );
      }
      console.log({ res });

      const commandsOrNull = async (): Promise<BotCommandsResponse> => {
        try {
          const json = await res.json();
          console.log({ json });
          return json;
        } catch (e) {
          console.log({ e });
          console.log(`error while turning response json to data: `, e);

          return [];
        }
      };
      const commands: BotCommandsResponse = await commandsOrNull();
      setCommands(commands);
    };
    handler();
  }, []);
  console.log({ commands });

  if ('error' in commands) {
    return (
      <PageCard>
        <h1 className="text-2xl font-bold">Documentation</h1>
        <p>
          Something went wrong while fetching the commands from the server,
          please try again :(
        </p>
      </PageCard>
    );
  }

  return (
    <PageCard>
      <h1 className="text-2xl font-bold">Documentation</h1>
      <p>
        Canni has a bunch of fun commands for you to try out. I&apos;m always
        happy to take suggestions on what else Canni should do. If you have any
        cool command ideas, feel free to share them with me! :)
      </p>
      {commands.map((command) => (
        <BotCommandInfo data={command} key={command.id} />
      ))}
    </PageCard>
  );
}

export default Docs;
