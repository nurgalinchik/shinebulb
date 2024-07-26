import React from "react";
import {
    Routes,
    Route,
    useLocation 
} from 'react-router-dom';
import Home from './Home';
import Play from './Play';
import Settings from './Settings';
import About from './About';   
import Support from './Support';
import Explore from './Explore';
import SavedThemes from './SavedThemes';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />}/>
                <Route path="/play" element={<Play />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/support" element={<Support />}/>
                <Route path="/explore" element={<Explore />}/>
                <Route path="/saved" element={<SavedThemes />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes