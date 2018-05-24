import { h } from 'hyperapp'
import { Link, Route } from "@hyperapp/router"

import './Article.scss'
import ArticleId from '../components/ArticleId'

const Article = ({ match }) => (
  <div key="articleId">
    <h2>Articles</h2>
    <ul class="list">
      <li>
        <Link to={`${match.url}/1`}>News1</Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>News2</Link>
      </li>
      <li>
        <Link to={`${match.url}/3`}>News3</Link>
      </li>
    </ul>

    {match.isExact && <h3>Please select item.</h3>}

    <Route parent path={`${match.path}/:articleId`} render={ArticleId} />
  </div>
)

export default Article