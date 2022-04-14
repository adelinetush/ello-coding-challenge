import './App.css'
import {Route, Routes} from 'react-router-dom'
import TokenView from './pages/TokenView';
import PageComponent from './components/PageComponent';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route strict exact path='/' element={< PageComponent />}></Route>
                <Route strict exact path='/:token' element={< TokenView />}></Route>
            </Routes>
        </div>
    );
}

export default App;
