import figma from "./img/figma.png"
import airtable from "./img/airtable.png"
import confluence from "./img/confluence.jpg"
import dovetail from "./img/dovetail.png"
import drive from "./img/drive.png"
import miro from "./img/miro.png"
import notion from "./img/notion.png"
import slack from "./img/slack.png"
import "./App.css";
import { Navbar } from "./navbar";
import { ToolCard } from "./card";
import { Navigation } from "./navigation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="header">
        <h1>Connect your favorite tools.</h1>
      </div>
      <div class="tools-grid">
        <ToolCard
          img={figma}
          serviceName="Figma"
          serviceDescription="Stay up to date with your team’s latest designs."
        />
        <ToolCard
          img={drive}
          serviceName="Google Drive"
          serviceDescription="Access all of your documents and information."
        />
        <ToolCard
          img={slack}
          serviceName="Slack"
          serviceDescription="Communicate seamlessly with your teammates."
        />

        <ToolCard
          img={notion}
          serviceName="Notion"
          serviceDescription="Sync all of your notes, team docs, and other important information."
        />
      </div>
      <div class="tools-grid">
        <ToolCard
          img={miro}
          serviceName="Miro"
          serviceDescription="Unlock the power of collaboration to distill insights from data."
        />
        <ToolCard
          img={airtable}
          serviceName="Airtable"
          serviceDescription="Keep your data organized in a spreadsheet-database format."
        />
        <ToolCard
          img={confluence}
          serviceName="Confluence"
          serviceDescription="Create content, collaborate on work, and organize and share information."
        />

        <ToolCard
          img={dovetail}
          serviceName="Dovetail"
          serviceDescription="Organize and tag your research in a collaborative platform."
        />
      </div>
      <Navigation/>
    </div>
  );
}

export default App;
