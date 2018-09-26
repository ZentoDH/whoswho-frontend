export class TopScore {
    constructor(personId: string, firstName: string, lastName: string, score: number, playTimeInMillis: number, amountPlayed: number) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = score;
        const d = new Date(0, 0, 0, 0, 0, 0, 0);
        d.setSeconds(playTimeInMillis);
        this.playTimeInMillis = d;
        this.amountPlayed = amountPlayed;
    }

    personId: string;
    firstName: string;
    lastName: string;
    score: number;
    playTimeInMillis: Date;
    amountPlayed: number;
}
