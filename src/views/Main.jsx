/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
const React = require('react');

const Layout = require('./Layout');

function Main({
  username, clearRecipes, userid, recipesFav,
}) {
  return (
    <Layout username={username} userid={userid}>
      <h1 style={{
        color: '#ad0e4e', marginLeft: '780px', fontWeight: '900', fontStyle: 'initial',
      }}
      >
        Cookbook
      </h1>

      <div className="container text-center">
        <div id="sortButtons" className="container text-left">
          <h3>Sort by</h3>
          <button className="btn btn-light " id="sortByIngredients">
            Ingredients
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-sort-down"
              viewBox="0 0 16 16"
            >
              <path id="sortSVG" />
            </svg>
          </button>

          <button className="btn btn-light " id="sortByCooking">
            Сooking time
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-sort-down"
              viewBox="0 0 16 16"
            >
              <path id="sortSVGtwo" />
            </svg>
          </button>
        </div>
        <div className="row align-items-center" id="containerRecipes">
          {clearRecipes
            && clearRecipes.map((el) => (
              <div className="col-sm">
                <div
                  className="card"
                  key={el.recipeId}
                  style={{ width: '18rem' }}
                >
                  <img src={el.image} className="card-img-top" alt="" />
                  <div
                    className="card-body"
                    data-recipe={el.recipeId}
                    data-timecook={el.cookingTime}
                    data-ingredientsCount={el.ingredientsCount}
                  >
                    <a href={`/recipe/${el.recipeId}`}>
                      <h2 className="card-title">
                        {`${el.name.slice(0, 30)}...`}
                      </h2>
                    </a>
                    <p>
                      Count ingredients
                      {' '}
                      {el.ingredientsCount}
                      {' '}
                      unit/s
                    </p>
                    <p>
                      Cooking time
                      {' '}
                      {el.cookingTime}
                      {' '}
                      min
                    </p>
                    {/* <button type="button" className="btn btn-outline-primary">
                      Unlike
                    </button> */}
                    <div className="trashCont" />

                    {username ? (
                      recipesFav.find(
                        (elem) => elem.recipeId === el.recipeId,
                      ) ? (
                        <>
                          <svg className="heart" viewBox="0 0 256 256">
                            <path
                              id="favPath"
                              d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                              strokeWidth="0"
                              stroke="#FFF"
                              fill="#FF5353"
                            />
                          </svg>
                          <div className="favInput" data-fav="true">
                            {/* Удалить из Избранного */}
                          </div>
                        </>
                        ) : (
                          <>
                            <svg className="heart" viewBox="0 0 256 256">
                              <path
                                id="favPath"
                                d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                                strokeWidth="0"
                                stroke="#FFF"
                                fill="#bfb599"
                              />
                            </svg>
                            <div className="favInput" data-fav="false">
                              {/* Добавить в Избранное */}
                            </div>
                          </>
                        )
                    ) : (
                      ''
                    )}
                    {/* <button
                      type="button"
                      data-recipe={el.recipeId}
                      data-timecook={el.cookingTime}
                      data-ingredientsCount={el.ingredientsCount}
                      // className="btn btn-primary"
                      className="btn btn-primary disabled"
                      data-bs-toggle="button"
                      aria-pressed="false"
                    >
                      Like
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <div id="spinner" className="spinner">
          <div />
        </div> */}
      </div>
    </Layout>
  );
}
module.exports = Main;
