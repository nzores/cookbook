const React = require('react');

module.exports = function Registration() {
  return (
    <div id="modalTwo" className="modal">
      <div className="modal-content">
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white" id="regmodall">
          <form name="signup" id="signupformm">
            <a className="close">&times;</a>
            <h2 className="enter">Регистрация</h2>
            <div id="signupdiv">
              <label htmlFor="username" className="block mar-b-1">
                Логин
              </label>
              <input
                id="title-input1"
                className="title-input"
                name="username"
                type="text"
                required
                pattern="[A-Za-z]\w+"
                minLength={4}
                title="Латинские буквы, цифры и _"
              />

              <label htmlFor="password" className="block mar-b-1">
                Пароль
              </label>
              <input
                id="title-input2"
                className="title-input"
                name="password"
                type="password"
                required
                minLength={3}
              />
              <label htmlFor="email" className="block mar-b-1">
                Электронная почта
              </label>
              <input
                id="title-input3"
                className="title-input"
                name="email"
                type="text"
                pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
                required
              />
            </div>

            <input
              id="registerForm"
              type="submit"
              value="Register"
              tabIndex="3"
              className="generalButton"
              // className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
