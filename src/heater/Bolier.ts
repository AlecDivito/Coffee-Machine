import HotPlate from "../sensor/HotPlate";
import Heater from "./Heater";

export default class Boiler extends Heater {

    constructor() {
        super(new HotPlate(200));
    }

}
