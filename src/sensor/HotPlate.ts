import { Fahrenheit } from "src/types";
import Sensor, { SensorState } from "./Sensor";

export default class HotPlate extends Sensor {

    private targetTemp: Fahrenheit;

    constructor(targetTemp: Fahrenheit = 200) {
        super();
        this.targetTemp = targetTemp;
    }

    public update(): void {
        if (this.state === SensorState.ON) {
            this.value += Math.random() * 3 + 1;
        } else {
            this.value -= Math.random() * 2 + 0.5;
        }
    }

    public isInHeatRange(): boolean {
        return this.targetTemp + 5 > this.value &&
            this.targetTemp - 5 < this.value;
    }
}
