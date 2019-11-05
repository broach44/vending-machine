import './snacks.scss';

const makeASnack = (position) => {
  let domString = '';
  if (position.snack.name) {
    domString += `
      <div class="card col-3">
        <img src=${position.snack.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${position.snack.name}</h5>
          <p class="card-text">$${position.snack.price / 100}</p>
          <p class="card-text">${position.position}</p>
        </div>
      </div>
  `;
  } else {
    domString += `
    <div class="card col-3">
    <div class="card-body">
      <h5 class="card-title">EMPTY</h5>
      <p class="card-text">${position.position}</p>
    </div>
  </div>
    `;
  }
  return domString;
};

export default { makeASnack };
