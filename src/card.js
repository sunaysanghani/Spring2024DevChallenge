import { useState } from "react";

function ToolCard({ img, serviceName, serviceDescription }) {
  const [connected, setConnected] = useState(false);
  console.log(connected);
  return (
    <div class="tool-card">
      <div class="img-and-connect">
        <img src={img} alt={serviceName + " Logo"} />
        {!connected ? (
          <button onClick={() => setConnected(!connected)}>Connect</button>
        ) : (
          <button
            class="connected"
            style={{ color: "green", backgroundColor: "#C9EBC6", borderRadius:"0px"}}
            onClick={() => setConnected(!connected)}
          >
            Connected
          </button>
        )}
      </div>
      <div class="card-title">
        <p>{serviceName}</p>
      </div>

      <div class="card-info">
        <p>{serviceDescription}</p>
      </div>
    </div>
  );
}

export { ToolCard };
