import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home';
import Faqs from '../components/Faqs/Faqs';
import Manual from '../components/Manual/Manual';
import Contact from '../components/Contact/Contact';
import Media from '../components/Media/Media';

function RouteController() {
    return (
        <div>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route path='/faqs' element={<Faqs />} />
                <Route path='/usermanual' element={<Manual />} />
                <Route path='/contact' element={<Contact />}/>
                <Route path='/media' element={<Media />} />       
            </Routes>
        </div>
    )
}

export { RouteController }