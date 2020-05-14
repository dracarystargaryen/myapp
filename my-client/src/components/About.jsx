import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Jane is a 23 year old adventurous programmer who has nothing better to do in her life than to play on her gaming consoles,
              draw, tweet stuff on Twitter and debate on Tumblr. When she is not busy arguing with strangers on the Internet,
              Jane is most likely focused on her studies, building new softwares, and updating Github with her new projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
