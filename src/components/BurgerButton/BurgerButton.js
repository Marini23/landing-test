import React, { useState } from 'react';
import { ListButton, ListItem } from './BurgerButton.styled';
import bg_icon_1 from '../../icons/bg_button_1.svg';
import bg_icon_2 from '../../icons/bg_button_2.svg';
import bg_icon_3 from '../../icons/bg_button_3.svg';

export const BurgerButton = ({ backgroundColor }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };
  return (
    <div>
      <ListButton>
        <ListItem backgroundColor={backgroundColor} onClick={toggleBurger}>
          {burgerIsOpen ? <span>Close</span> : <span>Menu</span>}
        </ListItem>
        <ListItem backgroundColor={backgroundColor}>
          <img src={bg_icon_1} alt="icon button" />
        </ListItem>
        <ListItem backgroundColor={backgroundColor}>
          <img src={bg_icon_2} alt="icon button" />
        </ListItem>
        <ListItem backgroundColor={backgroundColor}>
          <img src={bg_icon_3} alt="icon button" />
        </ListItem>
      </ListButton>
    </div>
  );
};
