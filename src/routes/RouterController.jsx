import { Route, Routes } from 'react-router-dom'
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