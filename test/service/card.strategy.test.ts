import * as chai from "chai";
import CardContext from "../../src/service/card.context";
import CardUsaStrategy from "../../src/service/card.usa.strategy";

describe('Strategy Card', () => {
    it('initializy card', () => {
        const context = new CardContext(new CardUsaStrategy());
        const card = context.generateCard();

        card.numbers.forEach((val) => {
            chai.assert.equal(new Set(val).size, 5)
        });
    });
})