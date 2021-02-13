import './sass/styles.scss';
import fetchArticles from './js/fetch-articles';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    const inputValue = form.elements.query.value;

    refs.articlesContainer.innerHTML = '';
    form.reset();

    fetchArticles(inputValue).then(updateArticlesMarkup);
});

const apiKey = '919e5e36fb6c4976a92665bad143e6d2'
const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
fetch(url).then(res => res.json()).then(data => console.log(data.articles))