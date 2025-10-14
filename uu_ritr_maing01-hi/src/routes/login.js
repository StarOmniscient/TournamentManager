//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import Calls from "../calls.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers

//@@viewOff:helpers

let login = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "login",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  setError(null);


}
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
          <button type="submit" disabled={loading}>Login</button>
          {error && <div style={{color: 'red'}}>{error}</div>}
        </form>
      </div>
      
    );
    //@@viewOff:render
  },
});

login = withRoute(login, { authenticated: false });

//@@viewOn:exports
export { login };
export default login;
//@@viewOff:exports
