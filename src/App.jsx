import { React } from "react";

const App = () => {
  return (
    <div className="title">
      <h1>Welcome to UnderNet!</h1>
      <main>
        <form class="form">
           
          <label for="name">Username:</label>
          <br class="break"></br>
          <input class="full-width" type="text" id="name" name="name"></input>
          <br class="break"></br>
          <label for="content"></label>
          <textarea
            class="full-width"
            type="text"
            id="content"
            name="content"
            placeholder="Say something..."
          ></textarea>
          <br class="break"></br>
          <button class="button-primary">Send It</button>
        </form>

        <div class="card-body">
          <h5 class="card-Username">
            <img
              src="https://icon-library.net//images/sans-icon/sans-icon-23.jpg"
              width="100"
            />
            @funnybone
          </h5>
          <p class="card-text">Hey @CoolSkeleton95, wanna hear a joke?</p>
          <p class="card-text">
            <small class="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div class="card-body">
          <h5 class="card-Username">
            <img
              src="http://pixelartmaker.com/art/72e737cdd6e34dc.png"
              width="100"
            />
            @CoolSkeleton95
          </h5>
          <p class="card-text">Sure, Why Not?</p>
          <p class="card-text">
            <small class="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div class="card-body">
          <h5 class="card-Username">
            <img
              src="https://icon-library.net//images/sans-icon/sans-icon-23.jpg"
              width="100"
            />
            @funnybone
          </h5>
          <p class="card-text">Why did the skeleton go to the restaurant?</p>
          <p class="card-text">
            <small class="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div class="card-body">
          <h5 class="card-Username">
            <img
              src="http://pixelartmaker.com/art/72e737cdd6e34dc.png"
              width="100"
            />
            @CoolSkeleton95
          </h5>
          <p class="card-text">Hmmm... I don't know, why did they go to the restaurant?</p>
          <p class="card-text">
            <small class="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div class="card-body">
          <h5 class="card-Username">
            <img
              src="https://icon-library.net//images/sans-icon/sans-icon-23.jpg"
              width="100"
            />
            @funnybone
          </h5>
          <p class="card-text">So he could get a BONE meal!</p>
          <p class="card-text">
            <small class="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

        <div class="card-body">
          <h5 class="card-Username">
            <img
              src="http://pixelartmaker.com/art/72e737cdd6e34dc.png"
              width="100"
            />
            @CoolSkeleton95
          </h5>
          <p class="card-text">*INTERNAL SCREAMING*</p>
          <p class="card-text">
            <small class="text-muted">Today at 3:00 PM</small>
          </p>
        </div>

      </main>
    </div>
  );
};
export default App;
