import 'src/index.scss';
import {colors} from 'src/data'
import {findElement, cloneTemplateContent} from 'src/utils';

function run() {
  console.log('Memory Game');
  const selectedColors = colors.slice(0, 12);
  console.log('colors', selectedColors)

  const slotTemplate = findElement(document,'#slot-template');
  const cardTemplate=findElement(document,'#card-template');
    console.log('slotTemplate',slotTemplate)
    console.log('cardTemplate',cardTemplate)
    const slotElement = cloneTemplateContent(slotTemplate);
    const cardElement = cloneTemplateContent(cardTemplate);
    console.log('slotElement', slotElement)
  }

run();
