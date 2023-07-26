import * as chai from "chai";
import CardContext from "../../src/service/card.context";
import CardUsaStrategy from "../../src/service/card.usa.strategy";
import GameService from "../../src/service/game.service";
import Card from "../../src/domain/card.entity";

describe('Game', () => {
    const context = new CardContext(new CardUsaStrategy());

    const numbersCalled = new Set([...Array(75).keys()].map((v) => v + 1));

    it('initialize game', () => {
        const game = new GameService();
        [...Array(25).keys()].forEach((val) => {
            const card = context.generateCard();

            game.createPerson(card);
        });

        chai.assert.equal(game.people.length, 25)
    });

    it('play game random', () => {
        const game = new GameService();
        [...Array(10).keys()].forEach((val) => {
            const card = context.generateCard();

            game.createPerson(card);
        });

        while (numbersCalled.size > 0) {
            const random = Math.floor(Math.random() * numbersCalled.size);

            const val = Array.from(numbersCalled)[random];

            const person = game.callNumber(val);

            numbersCalled.delete(val);

            if (person) {
                chai.assert.exists(person);
                return
            }
        }
    });

    it('play game hack', () => {
        const game = new GameService();
        [...Array(10).keys()].forEach((val) => {
            const card = context.generateCard();

            game.createPerson(card);
        });

        game.createPerson(
            new Card(
                [
                    [1, 2, 3, 4, 5],
                    [16, 17, 18, 19, 20],
                    [31, 32, 0, 34, 35],
                    [46, 47, 48, 49, 50],
                    [61, 62, 63, 64, 65],
                ]));

        const happyCalled = [1, 2, 3, 4, 5,
            16, 17, 18, 19, 20,
            31, 32, 0, 34, 35,
            46, 47, 48, 49, 50,
            61, 62, 63, 64, 65]

        for (let i = 0; i < happyCalled.length - 1; i++) {
            const val = happyCalled[i];
            const person = game.callNumber(happyCalled[i]);

            numbersCalled.delete(val);

            if (person) {
                chai.assert.equal(i, 25);
            }
        }
    });
})