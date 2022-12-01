// This is a function that takes a page path as an argument
async function loadPage(page) {
  const res = await fetch(page);
  const content = await res.text();
  const element = document.getElementById('content');
  element.innerHTML = content;
}
