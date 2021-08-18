import { Message } from "../core/interfaces/message";

let clapsFounded: string;
let userFinded: string;
let messageFinded: string;

export function setValuesMessage(message: string): void {
  setUser(message);
  setMessageValues(message);
  setClaps(message);
}

function setClaps(message: string): void {
  clapsFounded = message.substring(0, message.indexOf("<")).trim();
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
