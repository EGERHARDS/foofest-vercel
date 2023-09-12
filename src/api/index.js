export const getAvailableSpots = () =>
  fetch(`https://foofest-backend-bd942c7f29e2.herokuapp.com/available-spots`);

export const updateAvailableSpots = (spots) =>
  fetch(`https://foofest-backend-bd942c7f29e2.herokuapp.com/reserve-spot`, {
    method: "PUT",
    headers: { "Content-Type": `application/json` },
    body: JSON.stringify(spots),
  });

