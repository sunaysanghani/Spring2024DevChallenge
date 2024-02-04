import React from "react";
import pfp from "./img/woman.jpeg" 

function Navbar() {
  return (
    <div class="navbar">
    <div class="logo">hive</div>
    <div class="profile-picture" onClick={() => alert("Clicked!")}>
    <img src={pfp} />
    </div>
  </div>
  );
}

export { Navbar };
