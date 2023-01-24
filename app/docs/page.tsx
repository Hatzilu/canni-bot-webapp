import { RESTGetAPIApplicationCommandsResult } from 'discord-api-types/v10';
import React from 'react';
import BotCommandInfo from '../../components/BotCommandInfo/BotCommandInfo';
import PageCard from '../../components/PageCard/PageCard';
import { BASE_URL } from '../../consts/consts';

async function Docs() {
  const res = await fetch(`${BASE_URL}/api/getBotCommands`);

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
  const commandsOrNull =
    async (): Promise<RESTGetAPIApplicationCommandsResult> => {
      try {
        const json = await res.json();
        return json;
      } catch {
        return [];
      }
    };
  const commands: RESTGetAPIApplicationCommandsResult = await commandsOrNull();

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
