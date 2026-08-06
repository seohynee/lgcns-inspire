import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./features/user/page/SignUpPage";
import SignInPage from "./features/user/page/SignInpage";
import BlogIndexPage from "./features/blog/page/BlogIndexPage";
import BlogWritePage from "./features/blog/page/BlogWritePage";
import BlogReadPage from "./features/blog/page/BlogReadPage";
import ErrorPage from "./pages/event/ErrorPage";
import ViewPage from "./pages/event/ViewPage";

const ToyApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* user */}
                <Route path="/"                     element={<SignUpPage/>} />
                <Route path="/users/signIn"         element={<SignInPage/>} />

                {/* blog */}
                <Route path="/blog/index"          element={<BlogIndexPage/>} />
                <Route path="/blog/write"          element={<BlogWritePage/>} />
                <Route path="/blog/read/:blogId"   element={<BlogReadPage/>} />
                
                {/* blog - comment */}               
                <Route path="/error"               element={<ErrorPage/>} />
                <Route path="/read/:id"            element={<ViewPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default ToyApp;