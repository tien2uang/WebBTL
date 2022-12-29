
import { Sidebar } from "../../components/Sidebar/Sidebar2"
import { Header } from "../../components/Header/Header"
import { ScSidebar } from "../../components/Sidebar/ScSidebar"
import { Route, BrowserRouter as Router, Switch, Routes } from "react-router-dom";
export default function Store(){

    return (
        <>
        {/* <h1>Store Page</h1> */}
        
        <div className="main-wrapper">
            <ScSidebar/>
            <div>
                <Header/>
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <Routes>
                        <Route path="/" element={"<h1>hello<h1/>"} />
                        </Routes>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
