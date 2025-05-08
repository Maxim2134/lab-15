import './main.css';
import Section from './mcops/section/section.js';
import Article from './mcops/article/article.js';
import Aside from './mcops/aside/aside.js';

function Main() {
  return (
    <div className="main">
    <Section />
    <Article />
    <Aside />
     
    </div>
  );
}

export default Main;
