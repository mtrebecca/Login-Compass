import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import PageSucess from "./Pages/PageSucess/PageSucess";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/sucess" exact component={<PageSucess />} />
            </Routes>
        </BrowserRouter>
    )
}