import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route element={<AppLayout />}>
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
