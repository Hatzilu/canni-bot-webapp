import { REST } from '@discordjs/rest';
import { NextApiRequest, NextApiResponse } from 'next';
import { Routes, RESTGetAPIApplicationCommandsResult } from 'discord-api-types/v10';

export type BotCommandsResponse = RESTGetAPIApplicationCommandsResult | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BotCommandsResponse>
) {
  if (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_GUILD_ID) {
    res.status(503).send({ error: 'Internal server error.' });
    return;
  }
  const rest = new REST({ version: '10' }).setToken(
    process.env.DISCORD_BOT_TOKEN ?? ''
  );

  try {
    const commandsResponse = await rest.get(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_GUILD_ID
      )
    );
  
    if (commandsResponse) {
      res.status(200).send(commandsResponse as RESTGetAPIApplicationCommandsResult);
      return;
    }
  }
  catch (e) {
    console.error(e);
    res.status(503).send({ error: 'Internal server error.' });
  }
}
