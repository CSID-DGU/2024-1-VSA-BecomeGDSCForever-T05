import {Route, Routes} from "react-router-dom";
import Entry from "@/pages/Entry";
import Home from "@/pages/Home";
import {CONSTANT} from "@/constants/Constant.ts";

export default function Router() {
    return (
        <Routes>
            <Route path={CONSTANT.ROUTER.ENTRY} element={<Entry/>}/>
            <Route path={CONSTANT.ROUTER.HOME} element={<Home/>}/>
        </Routes>
    )
}