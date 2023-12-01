import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/login'
import PrivateRoute from './components/PrivateRoute'
import Cadastro from './pages/cadastro'
import Benchmark from './pages/benchmark/Benchmark'
import Redes from './pages/benchmark/Redes'
import Adserver from './pages/benchmark/Adserver'
import Campanhas from './pages/Campanhas'


const Routers = () => {
    
    return (
        <>
                    <Routes>

                        <Route path="/home"  element={<PrivateRoute />}>
                            <Route path="/home" element={<Benchmark />} />
                        </Route>

                        <Route path="/"  element={<PrivateRoute />}>
                            <Route path="/" element={<Benchmark />} />
                        </Route>

                        <Route path="/benchmark"  element={<PrivateRoute />}>
                            <Route path="/benchmark" element={<Benchmark />} />
                        </Route>
                        <Route path="/benchmark/redes"  element={<PrivateRoute />}>
                            <Route path="/benchmark/redes" element={<Redes />} />
                        </Route>
                        <Route path="/benchmark/adserver"  element={<PrivateRoute />}>
                            <Route path="/benchmark/adserver" element={<Adserver />} />
                        </Route>
                        <Route path="/campanhas"  element={<PrivateRoute />}>
                            <Route path="/campanhas" element={<Campanhas />} />
                        </Route>

                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />

                       
                    </Routes>
        </>
    )
}

export default Routers