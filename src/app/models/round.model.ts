import { Person } from "./person.model";

export class Round {
  id: number;
  guessedPersonId: number;
  persons: Array<Person>;
  rightPersonId: number;
  }