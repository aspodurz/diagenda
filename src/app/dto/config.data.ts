import { PlanDto } from "./plan";

export class ConfigDataDto { 

    elements: Array<PlanDto>=new Array;

    add(element: PlanDto){
        this.elements.push(element);
    }
}