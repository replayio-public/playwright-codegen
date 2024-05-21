import { defineConfig, devices } from "@playwright/test";
import {
  createReplayReporterConfig as replayReporter,
  devices as replayDevices,
} from "@replayio/playwright";

import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: true,
    }),
    ["line"],
  ],

  timeout: 5 * 60 * 1000,

  projects: [
    {
      name: "replay-chromium",
      use: {
        ...replayDevices["Replay Chromium"],
        storageState: "auth.json",
      },
    },
    {
      name: "chromium",
      use: {
        ...replayDevices["Desktop Chromium"],
        storageState: "auth.json",
      },
    },
  ],
});
