import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';
import snackComponent from '../Snacks/snacks';

import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2>VENDING MACHINE</h2>';
      domString += '<div id="snack-section class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snackComponent.makeASnack(position);
      });
      domString += '</div>';
      // snacks component should return a bootstrap card
      // positions.forEach((x) => {
      //   console.log('positions', x.position);
      // });
      // domString += positions[0].snack.name;
      utilities.printToDom('stock', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
