//? To fetch a specific item or the whole item list

export async function fetchAPI(apiURL) {
  const reply = await fetch(apiURL);

  if (!reply.ok) {
    throw new Error("Could not fetch the data");
  }

  return await reply.json();
}
