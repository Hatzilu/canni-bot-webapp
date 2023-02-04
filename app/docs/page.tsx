import React from 'react';
import BotCommandInfo from '../../components/BotCommandInfo/BotCommandInfo';
import PageCard from '../../components/PageCard/PageCard';
import { BASE_URL } from '../../consts/consts';
import { BotCommandsResponse } from '../../pages/api/commands';

async function Docs() {
  const res = await fetch(`${BASE_URL}/api/commands`);

  if (!res.ok) {
    return <p>something went wrong deez nuts</p>;
  }
  const commands: BotCommandsResponse = await res.json();

  if ('error' in commands) {
    return <p>{commands.error}</p>;
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
