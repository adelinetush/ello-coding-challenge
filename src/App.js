import './App.css'
import {Route, Routes} from 'react-router-dom'
import PageContent from './pages/PageContent'
import TokenPage from './pages/TokenPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route strict exact path='/' element={< PageContent />}></Route>
                <Route strict exact path='/:token' element={< TokenPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
