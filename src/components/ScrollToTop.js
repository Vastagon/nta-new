import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

///Not using for now. It's a wrapper that moves scroll back to top of page when changing page
export default function ScrollToTop({children}){
    const location = useLocation()
    useLayoutEffect(() =>{
        document.documentElement.scrollTo(0,0)
    }, [location.pathname])
    return children
}

