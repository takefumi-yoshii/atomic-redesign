import { setupWorker } from "msw";
import { handlers } from "../.msw/handlers";

const worker = setupWorker(...handlers);
worker.start();
