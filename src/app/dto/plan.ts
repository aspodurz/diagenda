import { OptionDto } from "./option";

export class PlanDto{
    name?: string;
    description?: string;
    patient?: string;
    meals: Array<MealDto>=new Array;

    constructor(){

    }

    add(meal: MealDto){
        this.meals.push(meal);
    }
}

export class MealDto{
    name?: string;
    types: Array<TypeDto>=new Array;
    

    constructor(){

    }

    add(type: TypeDto){
        this.types.push(type);
    }
}

export class TypeDto{
    name?: string;
    sections: Array<SectionDto>=new Array;
    constructor(){

    }

    add(section: SectionDto){
        this.sections.push(section);
    }
}


export class SectionDto{
    name?: string;
    options: Array<OptionDto>=new Array;
    note?: string;

    constructor(){

    }

    add(option: OptionDto){
        this.options.push(option);
    }
}