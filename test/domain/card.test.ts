import Card from "../../src/domain/card.entity";
import * as chai from "chai";

describe('Card', () => {
    const card = new Card([]);
    it('Initialize card', () => {
        chai.assert.exists(card);
    });
    it('Initialize numbers', () => {
        chai.assert.exists(card.numbers);
    })
})