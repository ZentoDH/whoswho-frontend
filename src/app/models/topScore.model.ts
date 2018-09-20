export class TopScore {
    constructor(personId: string, firstName: string, lastName: string, score: number, playTimeInMillis: number, amountPlayed: number) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = score;
        this.playTimeInMillis = playTimeInMillis;
        this.amountPlayed = amountPlayed;
    }
    personId: string;
    firstName: string;
    lastName: string;
    score: number;
    playTimeInMillis: number;
    amountPlayed: number;
  }