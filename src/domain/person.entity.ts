import Card from "./card.entity";

class Person {
    id: number;
    card: Card;
    constructor(id: number, card: Card) {
        this.id = id;
        this.card = card;
    }
}

export default Person;