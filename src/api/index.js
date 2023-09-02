export const getAvailableSpots = () =>
  fetch(`http://localhost:6060/available-spots`);

export const updateAvailableSpots = (spots) =>
  fetch(`http://localhost:6060/reserve-spot`, {
    method: "PUT",
    headers: { "Content-Type": `application/json` },
    body: JSON.stringify(spots),
  });
