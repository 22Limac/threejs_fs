import "../style.css";

const article_link = document.getElementById("article");

const displayArticle = () => {
    document.getElementById("article-page").style.display = "block";
}

article_link.addEventListener("click", displayArticle);