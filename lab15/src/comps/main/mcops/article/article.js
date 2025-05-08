import './article.css';
import News from './news/news.js'
import Contacts from './contacts/contacts.js'
import About from './about/about.js'

function Article() {
  return (
    <div className="article">
      <About />
      <Contacts />
      <News />
    </div>
  );
}

export default Article;
