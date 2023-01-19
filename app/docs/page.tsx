import { RESTGetAPIApplicationCommandsResult } from 'discord-api-types/v10';
import React from 'react';
import BotCommandInfo from '../../components/BotCommandInfo/BotCommandInfo';
import PageCard from '../../components/PageCard/PageCard';

async function Docs() {
  const commands: RESTGetAPIApplicationCommandsResult = await fetch(
    'http://localhost:3000/api/getBotCommands'
  ).then((res) => res.json());

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
