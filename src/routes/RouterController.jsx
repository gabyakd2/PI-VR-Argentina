import { Route, Routes } from 'react-router-dom'
import NavBar from "../components/Home/Home";
import Home from '../components/Home/Home';

function RouteController() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export { RouteController }