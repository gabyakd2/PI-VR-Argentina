import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home';
import Faqs from '../components/Faqs/Faqs';

function RouteController() {
    return (
        <div>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route path='/faqs' element={<Faqs />} />
            </Routes>
        </div>
    )
}

export { RouteController }