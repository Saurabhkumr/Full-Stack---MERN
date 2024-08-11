const url = "http://hn.algolia.com/api/v1/search?query=html";

async function getData() {
  const promise = await fetch(url);
  const data = await promise.json();
  console.log(data);
}

getData();
