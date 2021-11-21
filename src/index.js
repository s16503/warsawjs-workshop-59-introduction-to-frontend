import 'src/index.scss';
import {colors} from 'src/data'
import {findElement, cloneTemplateContent} from 'src/utils';

const slotTemplate  = findElement(document,'#slot-template');
const cardTemplate  = findElement(document,'#card-template');
const boardTemplate = findElement(document,'#board-template');

function run() {
  console.log('Memory Game');
  const selectedColors = colors.slice(0, 12);
  // console.log('colors', selectedColors)

    // console.log('slotTemplate',slotTemplate)
    // console.log('cardTemplate',cardTemplate)
    // console.log('cardTemplate',boardTemplate)

    const boardElement = cloneTemplateContent(boardTemplate);

    // console.log('slotElement', slotElement)
    // console.log('cardElement', cardElement)
    // console.log('boardElement', boardElement)

    selectedColors.forEach(({color, labelColor})=>{
      console.log('color', color)
      console.log('label', labelColor)

      const slotElement = cloneTemplateContent(slotTemplate);
      const cardElement = cloneTemplateContent(cardTemplate);
      cardElement.textContent = labelColor;
      cardElement.style.backgroundColor = color
      slotElement.appendChild(cardElement)
      boardElement.appendChild(slotElement)
    })

   document.body.prepend(boardElement)
  }

run();
