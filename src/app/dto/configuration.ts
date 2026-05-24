export class ConfigurationDto{

    elements: Array<string>=new Array;

    add(element: string){
        this.elements.push(element);
    }
}
