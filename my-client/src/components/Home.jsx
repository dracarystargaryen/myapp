import React from "react";

function Home() {
  return (
    <div className="home">
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
            <h1 class="font-weight-light">Home</h1>
            <p>
               This website is designed for individuals who want to enjoy fine arts and post their own artwork.
               It is designed for people of refined taste and not for those who do not have high-class art appreciation.
               In other words, this site is NOT for people of lower-class status. 
               Users are welcome to post their artwork, however opinions will be monitored and users will be 
               banned if the opinion is deemed unnecessary by the admin. Enjoy the website!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
