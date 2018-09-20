import { Person } from "./person.model";
import { Round } from "./round.model";

export class Game {
    id: Number;

    person: Person;
    rounds: Array<Round>;

    score: number;
    startTime: Date;
    endTime: Date;
  }