import { ButtonStatus } from "./ButtonStatus";

export default class Button {

    private status: ButtonStatus;

    constructor() {
        this.status = ButtonStatus.OFF;
    }

    public turnOn(): void {
        this.status = ButtonStatus.ON;
    }

    public turnOff(): void {
        this.status = ButtonStatus.OFF;
    }

    public buttonStatus(): ButtonStatus {
        return this.status;
    }

    public isOn(): boolean {
        return this.status === ButtonStatus.ON;
    }

    public toString(): string {
        switch (this.status) {
            case ButtonStatus.ON: return "ON";
            case ButtonStatus.OFF: return "OFF";
            default: return "ERROR";
        }
    }
}
