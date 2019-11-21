import BrewButton from "./button/BrewButton";
import { ButtonStatus } from "./button/ButtonStatus";
import PowerButton from "./button/PowerButton";
import CoffeePot from "./CoffeePot";
import Boiler from "./heater/Bolier";
import CoffeeWarmer from "./heater/CoffeeWarmer";
import CoffeeGroundsReservoir from "./reservoir/CoffeeGroundsReservoir";
import WaterReservoir from "./reservoir/WaterReservoir";

export default class CoffeeMaker {

    private powerButton: PowerButton;
    private waterReservoir: WaterReservoir;
    private coffeeGroundsReservoir: CoffeeGroundsReservoir;
    private brewButton: BrewButton;
    private boiler: Boiler;
    private coffeePotWarmer: CoffeeWarmer;
    private coffeePot: CoffeePot;

    constructor() {
        this.powerButton = new PowerButton();
        this.waterReservoir = new WaterReservoir();
        this.coffeeGroundsReservoir = new CoffeeGroundsReservoir();
        this.brewButton = new BrewButton();
        this.boiler = new Boiler();
        this.coffeePotWarmer = new CoffeeWarmer();
        this.coffeePot = new CoffeePot();
    }

    public pushPowerButton() {
        switch (this.powerButton.buttonStatus()) {
            case ButtonStatus.ON:
                this.powerButton.turnOff();
                break;
            case ButtonStatus.OFF:
                this.powerButton.turnOn();
                break;
            default:
                throw new Error("Error Please restart coffee maker!");
        }
    }

    public addWater(water: number) {
        this.waterReservoir.fill(water);
    }

    public addCoffeeGrounds(grounds: number) {
        this.coffeeGroundsReservoir.fill(grounds);
    }

    public pushBrewButton() {
        if (!this.powerButton.isOn()) {
            throw new Error("Please turn on Coffee Machine before brewing!");
        }
        switch (this.brewButton.buttonStatus()) {
            case ButtonStatus.ON:
                this.brewButton.turnOff();
                break;
            case ButtonStatus.OFF:
                this.brewButton.turnOn();
                break;
            default:
                throw new Error("Error Please restart coffee maker!");
        }
    }

    public pourCoffee(coffee: number) {
        this.brewButton.turnOff();
        this.coffeePot.pourCoffee(coffee);
    }

    public update() {
        if (this.powerButton.isOn()) {
            this.coffeePotWarmer.heatup();
            this.coffeePot.heatCoffee(this.coffeePotWarmer);
        } else {
            return;
        }

        if (this.brewButton.isOn()) {
            this.boiler.heatup();
        } else {
            this.boiler.cooldown();
        }

        if (this.boiler.isBoiling()) {
            this.coffeePot.makeCoffee(this.waterReservoir, this.coffeeGroundsReservoir);
        }

        if (this.waterReservoir.isEmpty() || this.coffeeGroundsReservoir.isEmpty()) {
            this.brewButton.turnOff();
        }
    }

    public machineState(): any {
        return {
            power: this.powerButton.toString(),
            brewing: this.brewButton.toString(),
            water: {
                string: this.waterReservoir.toString(),
                max: this.waterReservoir.getMaxCapacity(),
                cur: this.waterReservoir.getCurrentLoad(),
            },
            grounds: {
                string: this.coffeeGroundsReservoir.toString(),
                max: this.coffeeGroundsReservoir.getMaxCapacity(),
                cur: this.coffeeGroundsReservoir.getCurrentLoad(),
            },
            boiler: this.boiler.toString(),
            coffeePotWarmer: this.coffeePotWarmer.toString(),
            coffeePot: {
                string: this.coffeePot.toString(),
                max: this.coffeePot.getMaxCapacity(),
                cur: this.coffeePot.coffeedBrewed(),
            },
        };
    }
}
