import axios from "axios";

async function doSearch(search) {
  try {
    let result = await axios("https://forkify-api.herokuapp.com/api/v2/recipes?search=" + search + "&c77efedb-e3fd-40bc-9d2a-fe4de39490d8=%3Cc77efedb-e3fd-40bc-9d2a-fe4de39490d8%3E#");
  const recipes = result.data.data.recipes;
  console.log(recipes);

  result = await axios("https://forkify-api.herokuapp.com/api/v2/recipes/" + recipes[1] + "?c77efedb-e3fd-40bc-9d2a-fe4de39490d8=<c77efedb-e3fd-40bc-9d2a-fe4de39490d8>");
  console.log(result);
  } catch(error) { alert("Asuudal garlaa: " + error); }
}
doSearch('pizza');







