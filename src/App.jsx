import { React } from "react";

const App = () => {
  return (
    <div className="title">
      <h1>Welcome to UnderNet!</h1>
      <main>
        <form className="form">
          <label for="name">Username:</label>
          <br className="break"></br>
          <input className="full-width" type="text" id="name" name="name"></input>
          <br className="break"></br>
          <label for="content"></label>
          <textarea
            className="full-width"
            type="text"
            id="content"
            name="content"
            placeholder="Say something..."
          ></textarea>
          <br className="break"></br>
          <button className="button-primary">Send It</button>
        </form>

        <div className="card-body">
          <h5 className="card-Username">
            <img
              src="https://icon-library.net//images/sans-icon/sans-icon-23.jpg"
              width="100"
            />
            @funnybone
          </h5>
          <p className="card-text">Hey @CoolSkeleton95, wanna hear a joke?</p>
          <p className="card-text">
            <small className="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-Username">
            <img
              src="http://pixelartmaker.com/art/72e737cdd6e34dc.png"
              width="100"
            />
            @CoolSkeleton95
          </h5>
          <p className="card-text">Sure, Why Not?</p>
          <p className="card-text">
            <small className="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-Username">
            <img
              src="https://icon-library.net//images/sans-icon/sans-icon-23.jpg"
              width="100"
            />
            @funnybone
          </h5>
          <p className="card-text">Why did the skeleton go to the restaurant?</p>
          <p className="card-text">
            <small className="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-Username">
            <img
              src="http://pixelartmaker.com/art/72e737cdd6e34dc.png"
              width="100"
            />
            @CoolSkeleton95
          </h5>
          <p className="card-text">Hmmm... I don't know, why did they go to the restaurant?</p>
          <p className="card-text">
            <small className="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-Username">
            <img
              src="https://icon-library.net//images/sans-icon/sans-icon-23.jpg"
              width="100"
            />
            @funnybone
          </h5>
          <p className="card-text">So he could get a BONE meal!</p>
          <p className="card-text">
            <small className="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div className="card-body">
          <h5 className="card-Username">
            <img
              src="http://pixelartmaker.com/art/72e737cdd6e34dc.png"
              width="100"
            />
            @CoolSkeleton95
          </h5>
          <p className="card-text">*INTERNAL SCREAMING*</p>
          <p className="card-text">
            <small className="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

      </main>
    </div>
  );
};
export default App;
