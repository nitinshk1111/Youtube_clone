import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import VideoContainer from "./components/VideoContainer";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="h-[98px]">
          <Header></Header>
          {/* <Navbar /> */}
        </div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
