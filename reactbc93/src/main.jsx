//import { createRoot } from "react-dom/client";
// import ShoppingPhone from "./page/shopping-phone";
// import store from "./store";
// import { Provider } from "react-redux";

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>

//     <ShoppingPhone />
//   </Provider>,
// );
import { createRoot } from "react-dom/client";
import Homepage from "./page/Homepage";
import Binding from "./page/Binding";
import EventHandler from "./page/EventHandler";
import LayoutBuoi1 from "./page/LayoutBuoi1";
import RenderCondition from "./page/RenderCondition";
import State from "./page/State";
import LayoutStateBuoi2 from "./page/LayoutStateBuoi2";
import RenderList from "./page/RenderList";
import LayoutList from "./page/LayoutList";
import index from "./page/Communication";
import Communication from "./page/Communication";
import ShoppingPhone from "./page/shopping-phone";
import ThucHanhLayoutB1 from "./page/ThucHanhLayoutB1";
import ThucHanhLayoutB2 from "./page/ThucHanhLayoutB2";


createRoot(document.getElementById("root")).render(
  //<Homepage />
  //<Binding/>
  //<LayoutBuoi1/>
  // <ThucHanhLayoutB1/>,
  <ThucHanhLayoutB2/>
  //<EventHandler />
  // <RenderCondition />
  //<State />,
  // <LayoutStateBuoi2 />
  //<RenderList />,
  // <LayoutList />,
  // <Communication />,
  //<ShoppingPhone />,
);
