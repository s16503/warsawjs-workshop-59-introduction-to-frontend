import 'src/index.scss';
import {colors} from 'src/data'
import {findElement} from 'src/utils';
import { Card } from './card';
import { Board } from './board';

const slotTemplate  = findElement(document,'#slot-template');
const cardTemplate  = findElement(document,'#card-template');
const boardTemplate = findElement(document,'#board-template');

function run() {
  console.log('Memory Game');
  const selectedColors = colors.slice(0, 12);
  
    const board = new Board({template:boardTemplate, slotTemplate})


    selectedColors.forEach(({color, labelColor})=>{
      console.log('color', color)
      console.log('label', labelColor)

    
      const card = new Card({color, labelColor, template: cardTemplate})
      board.addCard(card)

      const card2 = new Card({color, labelColor, template: cardTemplate})
      board.addCard(card2)
    })

   document.body.prepend(board.element)
  }

run();
