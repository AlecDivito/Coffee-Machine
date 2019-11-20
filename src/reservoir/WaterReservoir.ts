import { Milliliter } from "src/types";
import Reservoir from "./Reservoir";

export default class WaterReservoir extends Reservoir<Milliliter> {

    constructor() {
        super(0, 1000);
    }

    public toString(): string {
        return `${this.currentLoad}ml/${this.maxCapacity}ml`;
    }
}
