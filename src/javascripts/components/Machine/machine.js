import $ from 'jquery';
import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';
import snackComponent from '../Snacks/snacks';

import './machine.scss';
import snackData from '../../helpers/data/snackData';

const buySnack = (e) => {
  e.stopImmediatePropagation();
  const snackId = e.target.id.split('buy-')[1];
  snackData.buySnack(snackId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildTheMachine())
    .catch((error) => console.error(error));
};

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2>VENDING MACHINE</h2>';
      domString += '<div id="snack-section" class="container d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snackComponent.makeASnack(position);
      });
      domString += '</div>';
      // snacks component should return a bootstrap card
      // positions.forEach((x) => {
      //   console.log('positions', x.position);
      // });
      // domString += positions[0].snack.name;
      utilities.printToDom('machine', domString);
      $('#machine').on('click', '.buy-snack', buySnack);
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
