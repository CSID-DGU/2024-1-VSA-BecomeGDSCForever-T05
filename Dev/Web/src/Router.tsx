import {Route, Routes} from "react-router-dom";
import Entry from "@/pages/Entry";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Entry/>}/>
        </Routes>
    )
}