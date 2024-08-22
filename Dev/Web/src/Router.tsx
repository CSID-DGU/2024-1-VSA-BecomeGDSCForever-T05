import {Route, Routes} from "react-router-dom";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home";
import {CONSTANT} from "@/constants/Constant.ts";
import Code from "@/pages/Code";

export default function Router() {
    return (
        <Routes>
            <Route path={CONSTANT.ROUTER.ENTRY} element={<Auth/>}/>
            <Route path={CONSTANT.ROUTER.HOME} element={<Home/>}/>
            <Route path={CONSTANT.ROUTER.CODE} element={<Code/>}/>
        </Routes>
    )
}