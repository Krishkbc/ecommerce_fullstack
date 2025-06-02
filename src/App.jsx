import MainHeader from "./component/Header/MainHeader";
import AppRouter from "./routes/AppRouter";

import FooterComponent from "./component/Footer/FooterComponent";
import { Provider } from "react-redux";
import store from "./Store/ReduxStore";

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <MainHeader />
        <div className="flex-grow">
          <AppRouter />
        </div>
        <FooterComponent />
      </div>
    </Provider>
  );
}
