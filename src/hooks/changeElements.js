import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif')
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    const options = ['¿Segura que no?', 'Segurísima?', 'Estas completamente segura?', 'Te vas a arrepentir eh', '¿Pero sí estás segura?', 'No lo preguntaré dos veces', 'Te lo vas a perder']

    const handleButtonNo = () => {
        if (!buttonsDisabled) {
          setIndex(index + 1);
          setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif');
          setTextP(options[index]);
    
          if (index === options.length - 1) {
            setIndex(0);
          }
        }
      };
    
      const handleButtonYes = () => {
        if (!buttonsDisabled) {
          setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif");
          setTextP('Gracias por aceptar, te amo mucho jeje <3');
          confetti();
          setButtonsDisabled(true);
        }
      };
    
      return { handleButtonNo, handleButtonYes, textP, image, buttonsDisabled };
    };