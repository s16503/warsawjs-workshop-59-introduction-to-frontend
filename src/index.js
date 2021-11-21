import 'src/index.scss';
import {colors} from 'src/data'
import {findElement, cloneTemplateContent} from 'src/utils';
import { Card } from './card';
import { Board } from './board';

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

    const board = new Board({template:boardTemplate, slotTemplate})
    // const boardElement = cloneTemplateContent(boardTemplate);

    // console.log('slotElement', slotElement)
    // console.log('cardElement', cardElement)
    // console.log('boardElement', boardElement)

    selectedColors.forEach(({color, labelColor})=>{
      console.log('color', color)
      console.log('label', labelColor)

      // const slotElement = cloneTemplateContent(slotTemplate);
      const card = new Card({color, labelColor, template: cardTemplate})

      // slotElement.appendChild(card.element)
      // board.element.appendChild(slotElement)
      board.addCard(card)
    })

   document.body.prepend(board.element)
  }

run();
