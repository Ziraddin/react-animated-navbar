import './App.scss'
import 'boxicons/css/boxicons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Post from './pages/Post'
import { posts } from './pages/data'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    {posts.map(post => <Route path={"/post/" + post.id} element={<Post img={post.img} title={post.title} desc={post.desc} longDesc={post.longDesc}/>} />)}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
