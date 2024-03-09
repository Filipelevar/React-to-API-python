import { useLocation, Outlet, Navigate } from "react-router-dom"



function AuthGuard() {

    const location = useLocation()

    return(
        isAuthenticate() ? <Outlet/> : <Navigate to={'/'} state={{from:location}} replace />  

    )
}

function NoAuthGuard() {

    const location = useLocation()

    return(
        isAuthenticate() ? <Navigate to={'/homescreen'} state={{from:location}} replace  /> : <Outlet/>

    )
}

function isAuthenticate() {
    const localUser = localStorage.getItem('auth')

    return localUser !== null && localUser !== undefined
    
}

export {AuthGuard, NoAuthGuard}