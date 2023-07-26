import Card from "../domain/card.entity";

interface CardStrategy {
    fillCard(): Card;
}

export default CardStrategy;