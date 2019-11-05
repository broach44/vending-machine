import './stockCard.scss';

const makeASnack = (snack) => {
  let domString = `
    <div class="card col-3 snack-card">
      <div class="card-body">
        <h5 class="card-title">${snack.name}</h5>
        <p class="card-text">$${snack.price / 100}</p>
      </div>
      <div class="card-footer text-center">`;
  if (snack.snackPositionId !== '') {
    domString += `<button class="btn btn-danger delete-snack-position" id="${snack.snackPositionId}">Remove from ${snack.position.position}</button>`;
  } else {
    domString += `<input type="text" placeholder="A3"/><button class="btn btn-info add-snack-position" id="${snack.id}">Add to machine</button>`;
  }
  domString += `</div>
    </div>`;
  return domString;
};

export default { makeASnack };
