import React from "react";

function Navigation() {


  return (
    <div class="navigation">
		  <button class="navbutton1" onClick={() => alert("Clicked!")}>Back</button>
		  <button class="navbutton2" onClick={() => alert("Clicked!")}>Finish</button>
		</div>
  );
}

export { Navigation };
