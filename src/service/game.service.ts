import Person from "../domain/person.entity";
import Card from "../domain/card.entity";

class GameService {
    people: Person[] = [];
    numbersCalled = new Set<number>();

    createPerson = (card: Card) => {
        this.people.push(new Person(this.people.length + 1, card))
    };

    callNumber = (num: number): Person | undefined => {
        this.numbersCalled.add(num);

        this.numbersCalled = new Set(Array.from(this.numbersCalled).sort((a: number, b: number) => a - b));

        if (this.numbersCalled.size >= 24) {
            for (let perI = 0; perI < this.people.length - 1; perI++) {
                const p = this.people[perI];
                const cardNumbers = p.card.numbers;
                let center = Math.floor(cardNumbers.length / 2);
                for (let row = 0; row < cardNumbers.length; row++) {
                    for (let col = 0; col < cardNumbers.length; col++) {
                        if (row == center && row == col) {
                            continue;
                        }
                        if (!this.numbersCalled.has(cardNumbers[row][col])) {
                            return undefined;
                        }
                    }
                }
                return p;
            }
        }

        return undefined;
    }
}

export default GameService;
