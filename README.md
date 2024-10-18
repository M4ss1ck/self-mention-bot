# Self-Mention Bot

Self-Mention Bot is a niche bot designed to notify you if your userbot sends any files to a group where it has been added. This bot is open-source and can be customized to fit your needs.

## Features

- Notifies users when a file is sent to a group.
- Mentions up to three users in a single message.
- Supports HTML formatting in messages.
- Logs errors, exceptions, and rejections using Winston.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/M4ss1ck/self-mention-bot.git
   cd self-mention-bot
   ```

2. Install dependencies:

   ```sh
   yarn
   ```

3. Create a `.env` file based on the `.env.sample` file and fill in the required environment variables.

## Usage

- To start the bot:

  ```sh
  yarn start
  ```

- For development:

  ```sh
  yarn dev
  ```

  or

  ```sh
  yarn watch
  ```

- To build the project:
  ```sh
  yarn build
  ```

## Configuration

The bot configuration is managed through environment variables defined in the `.env` file. Ensure you have the following variables set:

- `API_ID`: Your API ID.
- `API_HASH`: Your API Hash.
- `BOT_TOKEN`: Your bot token.

## Logging

The bot uses Winston for logging. Logs are stored in the `logs/` directory:

- `error.log`: Logs error messages.
- `exception.log`: Logs uncaught exceptions.
- `rejection.log`: Logs unhandled promise rejections.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [tgsnake](https://github.com/tgsnake/tgsnake) - Telegram bot library used in this project.
