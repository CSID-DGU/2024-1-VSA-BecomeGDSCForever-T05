import {Route, Routes} from "react-router-dom";
import Entry from "@/pages/Entry";
import Home from "@/pages/Home";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Entry/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}