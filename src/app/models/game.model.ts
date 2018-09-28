import { Person } from "./person.model";
import { Round } from "./round.model";

export class Game {
    id: number;

    person: Person;
    rounds: Array<Round>;

    score: number;
    startTime: string;
    endTime: string;
  }