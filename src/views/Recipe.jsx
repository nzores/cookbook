const React = require("react");

const Layout = require("./Layout");

function Recipe({ oneRecipeData,igredients}) {
  // const { oneRecipeData,igredients} = props;
  return (
    <Layout>
      <script defer src="css/style.css" />
      <div className="card">
        <div className="header">
          <div className="icon">
            <a href="#">
              <i className="fa fa-heart-o" />
            </a>
          </div>
        </div>
        <div className="text">
          <h1 className="food">{oneRecipeData[0].title}</h1>
          <i className="fa fa-clock-o">cooking time : { oneRecipeData[0].readyInMinutes}</i>
          <i className="fa fa-users"> servings: {oneRecipeData[0].servings}</i>
          <img src={oneRecipeData[0].image}></img>
          <div className="stars">
            <ul>
              {igredients.map((el) => <li>{el}</li>)}
            </ul>
          </div>
          <p className="info">
            {oneRecipeData[0].instructions}
          </p>
        </div>
        <a href="#" className="btn">
          Let's Cook!
        </a>
      </div>
    </Layout>
  );
}
module.exports = Recipe;
