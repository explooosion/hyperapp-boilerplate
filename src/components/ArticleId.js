import { h } from 'hyperapp'

const ArticleId = ({ match }) => (
  <div>
    <h3>{match.params.articleId}</h3>
  </div>
)

export default ArticleId