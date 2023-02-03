import { REST } from '@discordjs/rest';
import { NextApiRequest, NextApiResponse } from 'next';
import { Routes, RESTGetAPIApplicationCommandsResult } from 'discord-api-types/v10';

export type BotCommandsResponse = RESTGetAPIApplicationCommandsResult | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BotCommandsResponse>
) {
  if (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_GUILD_ID || !process.env.DISCORD_BOT_TOKEN) {
    console.log('Missing environment variables');
    
    res.status(503).json({ error: 'Internal server error.' });
    return;
  }
  try {
  const rest = new REST({ version: '10' }).setToken(
    process.env.DISCORD_BOT_TOKEN
  );

    const commandsResponse = await rest.get(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_GUILD_ID
      )
    );
  
    if (commandsResponse) {
      res.status(200).json(commandsResponse as RESTGetAPIApplicationCommandsResult);
      console.log(' commands success');
      return;
    }
    res.status(404).json({error: 'Failed to fetch API commands, please try again later.'});
    console.log({error: 'Failed to fetch API commands, please try again later.'});
  }
  catch (e) {
    console.log(`error while fetching commands: `,e);
    res.status(503).json({ error: 'Internal server error.' });
  }
}
