export class Player {
  id: string;
  displayName: string;
  givenName: string;
  surName: string;
  sex: string;


    constructor(id: string, displayName: string, givenName: string, surName: string, sex: string) {
        this.id = id;
        this.displayName = displayName;
        this.givenName = givenName;
        this.surName = surName;
        this.sex = sex;
    }
}