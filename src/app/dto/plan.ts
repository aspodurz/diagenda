import { OptionDto } from "./option";

export class PlanDto{
    name?: string;
    description?: string;
    owner?: string;
    meals: Array<Meal>=new Array;

    constructor(){

    }

    add(meal: Meal){
        this.meals.push(meal);
    }
}

export class Meal{
    name?: string;
    options: Array<OptionDto>=new Array;

    constructor(){

    }

    add(option: OptionDto){
        this.options.push(option);
    }
}