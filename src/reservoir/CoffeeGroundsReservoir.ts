import { Grams } from "src/types";
import Reservoir from "./Reservoir";

export default class CoffeeGroundsReservoir extends Reservoir<Grams> {

    constructor() {
        super(0, 250);
    }

    public toString(): string {
        return `${this.currentLoad}g/${this.maxCapacity}g`;
    }

}
