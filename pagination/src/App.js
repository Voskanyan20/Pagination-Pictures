import React, {Component} from 'react';
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import Gallery from "./pages/Gallery";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path={'/gallery/:page'} element={<Gallery/>}/>
                    <Route path="/picture" element={<Navigate to={'/'}/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;