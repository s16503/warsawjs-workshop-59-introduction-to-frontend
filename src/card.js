import { cloneTemplateContent} from 'src/utils';


export class Card{
    constructor({  color, labelColor, template,}){
        this.color = color;
        this.element = cloneTemplateContent(template);
        this.element.style.setProperty('--label-color',labelColor)
        this.element.style.setProperty('--color',color)
        this.element.textContent = color;
    }
}