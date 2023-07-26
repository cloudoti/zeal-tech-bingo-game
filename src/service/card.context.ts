import CardStrategy from "./card.strategy";

class CardContext {
    strategy: CardStrategy
    constructor(strategy: CardStrategy) {
        this.strategy = strategy;
    };

    generateCard = () => {
        return this.strategy.fillCard();
    }
}

export default CardContext;