import WarmPlate from "../sensor/WarmPlate";
import Heater from "./Heater";

export default class CoffeeWarmer extends Heater {

    constructor() {
        super(new WarmPlate(160));
    }

}
