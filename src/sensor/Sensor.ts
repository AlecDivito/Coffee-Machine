import { Fahrenheit } from "src/types";

export enum SensorState {
    ON,
    OFF,
}

export default abstract class Sensor {

    protected value: Fahrenheit;
    protected state: SensorState;

    constructor() {
        this.value = 0;
        this.state = SensorState.ON;
    }

    public start(): void {
        this.state = SensorState.ON;
    }

    public abstract update(): void;

    public stop(): void {
        this.state = SensorState.OFF;
    }

    public sensorValue(): Fahrenheit {
        return this.value;
    }

    public abstract isInHeatRange(): boolean;
}
