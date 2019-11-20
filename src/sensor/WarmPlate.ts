import { Fahrenheit } from "src/types";
import Sensor, { SensorState } from "./Sensor";

export default class WarmPlate extends Sensor {

    private targetTemp: Fahrenheit;

    constructor(targetTemp: Fahrenheit = 160) {
        super();
        this.targetTemp = targetTemp;
    }

    public update(): void {
        if (this.state === SensorState.ON) {
            this.value += Math.random() * 4 + 1;
        } else {
            this.value -= Math.random() * 3 + 0.5;
        }
    }

    public isInHeatRange(): boolean {
        return this.targetTemp + 15 > this.value &&
            this.targetTemp - 15 < this.value;
    }
}
