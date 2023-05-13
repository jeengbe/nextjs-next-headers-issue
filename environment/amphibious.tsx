import { getEnvironment as getClientEnvironment } from "./client";

export const Environment = () => {
  if (typeof window === "undefined") {
    return require("./server").getEnvironment();
  }

  getClientEnvironment();
};
