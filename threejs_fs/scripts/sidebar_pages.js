import "../style.css";


// const articleLink = document.getElementById("article");
// const articlePage = document.getElementById("article-page");

// const displayArticle = () => {
//   articlePage.className = "show";
// };

// articleLink.addEventListener("mouseover", displayArticle);

// const hideArticle = () => {
//     articlePage.className = "hide";
// };

// articlePage.addEventListener("mouseleave", hideArticle);


const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
};

window.route = route;
