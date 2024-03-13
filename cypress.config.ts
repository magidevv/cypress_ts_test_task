import { defineConfig } from "cypress";
import "dotenv/config";

const { USER_EMAIL, USER_PASSWORD } = process.env;

export default defineConfig({
  e2e: {
    setupNodeEvents(on: (event: string, callback: Function) => void) {
      // implement node event listeners here
    },
    baseUrl: `${process.env.BASE_URL}`,
    env: {
      USER_EMAIL,
      USER_PASSWORD,
    },
  },
});
