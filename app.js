console.log("Let's get this party started!");

const $giphyResponse = $("#giphyResponse");
const $searchInput = $("#search");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "addingGif" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $giphyResponse.append($newCol);
  }
}

$("form").on("submit", async function (evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});

/* remove gif */

$("#deleteButton").on("click", function () {
  $giphyResponse.empty();
});
