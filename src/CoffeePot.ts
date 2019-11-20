import CoffeeWarmer from "./heater/CoffeeWarmer";
import CoffeeGroundsReservoir from "./reservoir/CoffeeGroundsReservoir";
import WaterReservoir from "./reservoir/WaterReservoir";
import { Fahrenheit, Milliliter } from "./types";

export default class CoffeePot {

    private coffee: Milliliter;
    private maxCapacity: Milliliter;
    private temperature: Fahrenheit;

    constructor(coffee: Milliliter = 0, maxCapacity: Milliliter = 2000, temperature: Fahrenheit = 0) {
        this.coffee = coffee;
        this.maxCapacity = maxCapacity;
        this.temperature = temperature;
    }

    public makeCoffee(water: WaterReservoir, grounds: CoffeeGroundsReservoir): void {
        water.take(Math.round(Math.random() * 15 + 5));
        grounds.take(Math.round(Math.random() * 8 + 2));
        const newCoffee = Math.round(Math.random() * 5 + 1) as Milliliter;
        if (newCoffee + this.coffee > this.maxCapacity) {
            throw new Error("Coffee can't fit into the pot!");
        }
        this.coffee += newCoffee;
    }

    public heatCoffee(heater: CoffeeWarmer): void {
        this.temperature = heater.getTemperature();
    }

    public pourCoffee(coffee: Milliliter): void {
        if (this.coffee - coffee < 0) {
            throw new Error("Not enought coffee in the pot to withdraw that much!");
        }
        this.coffee -= coffee;
    }

    public potTemperature(): Fahrenheit {
        return this.temperature;
    }

    public coffeedBrewed(): Milliliter {
        return this.coffee;
    }

    public toString(): string {
        return `${this.coffee}ml at ${this.temperature} F`;
    }
}
