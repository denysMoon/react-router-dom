import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
