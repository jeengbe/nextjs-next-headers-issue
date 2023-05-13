// Import fs just because we can (and to prove we're on the server)
import "fs";
import "next/headers";

export function getEnvironment() {
  return "server";
}
