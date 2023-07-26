import Card from "../domain/card.entity";

class CardUsaStrategy {
    fillCard = () => {
        const numbers: any[] = [];

        [...Array(5).keys()].forEach((value) => {
            const column: number[] = []
            let start = (value * 15) + 1;
            const columnsAssign = this.getOptions(start);

            while (columnsAssign.size > 0 && column.length <= 4) {
                const random = Math.floor(Math.random() * columnsAssign.size);

                const val = Array.from(columnsAssign)[random];

                if (value === 2 && column.length === 2) {
                    column.push(0)
                } else {
                    column.push(val)
                }

                columnsAssign.delete(val);
            }
            numbers.push(column);
        });

        return new Card(numbers);

    }

    private getOptions = (start: number) => {
        return new Set([...Array(15).keys()].map((v) => v + start));
    }
}

export default CardUsaStrategy;