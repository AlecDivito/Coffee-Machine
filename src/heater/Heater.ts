import Sensor from "src/sensor/Sensor";
import { Fahrenheit } from "src/types";

export default abstract class Heater {

    protected sensor: Sensor;

    constructor(sensor: Sensor) {
        this.sensor = sensor;
    }

    public heatup() {
        this.sensor.start();
        if (this.sensor.isInHeatRange()) {
            this.sensor.stop();
        }
        this.sensor.update();
    }

    public cooldown() {
        this.sensor.stop();
        if (this.heaterIsStillWarm()) {
            this.sensor.update();
        }
    }

    public isBoiling(): boolean {
        return this.sensor.isInHeatRange();
    }

    public getTemperature(): Fahrenheit {
        return (Math.round(this.sensor.sensorValue() * 100) / 100);
    }

    public toString() {
        return `${this.getTemperature()} F`;
    }

    private heaterIsStillWarm() {
        return this.sensor.sensorValue() > 10;
    }

}
