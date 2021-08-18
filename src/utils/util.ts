import { Message } from "../core/interfaces/message";

let clapsFounded: string[];
let userFinded: string;
let messageFinded: string;

export function setValuesMessage(message: string): void {
  setClaps(message);
  setUser(message);
  setMessageValues(message);
}

function setClaps(message: string): void {
  clapsFounded = message
    .split(" ")
    .filter((claps) => claps.startsWith(":clap:"));
}

function setUser(message: string): void {
  userFinded = message.substring(
    message.lastIndexOf("<") + 1,
    message.lastIndexOf(">")
  );
}

function setMessageValues(message: string): void {
  messageFinded = message.substring(message.indexOf(">") + 1).trim();
}

export function getValuesMessage(): Message {
  return {
    claps: clapsFounded,
    user: userFinded,
    message: messageFinded,
  };
}
