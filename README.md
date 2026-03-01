# @barfinex/telegram

**Telegram integration** for the [Barfinex](https://barfinex.com) ecosystem — send notifications, alerts, and bot messages from Detector, Advisor, or any Barfinex service to Telegram chats or channels.

Get signals, position open/close events, and warnings in your messenger without watching logs or opening the app. One bot token and chat ID, and your automation can keep you informed in real time.

---

## What it does

- **Telegram bot** — send messages to a user chat or a channel/group via the Telegram Bot API.
- **NestJS module** — `TelegramModule` and `TelegramService` for dependency injection and env-based config.
- **Alerts from Detector/Advisor** — commonly used with `DETECTOR_TELEGRAM_ENABLED`, `TELEGRAM_BOT_TOKEN`, and `TELEGRAM_CHAT_ID` (or `DETECTOR_TELEGRAM_CHAT_ID`) so detector events are pushed to Telegram.

---

## Installation

```sh
npm install @barfinex/telegram
```

or

```sh
yarn add @barfinex/telegram
```

---

## What's included

| Export | Purpose |
|--------|--------|
| `TelegramModule` | NestJS module for Telegram bot and notifications. |
| `TelegramService` | Send messages, handle bot commands. |
| Interfaces | Types for Telegram options and messages. |

---

## Documentation

- **Telegram** — [Telegram notifications](https://barfinex.com/docs/telegram-notifications) — BotFather setup, chat_id, env vars, detector integration.
- **Detector (sends alerts)** — [Installation detector](https://barfinex.com/docs/installation-detector).
- **Barfinex** — [First Steps](https://barfinex.com/docs/first-steps), [Architecture](https://barfinex.com/docs/architecture), [Typical problems and solutions](https://barfinex.com/docs/troubleshooting).

---

## Contributing

Improvements and use-case feedback welcome. Community: [Telegram](https://t.me/barfinex) · [GitHub](https://github.com/barfinex).

---

## License

Licensed under the [Apache License 2.0](LICENSE) with additional terms. Attribution to **Barfin Network Limited** and a link to [https://barfinex.com](https://barfinex.com) are required. See [LICENSE](LICENSE) and the [Barfinex site](https://barfinex.com) for details.
