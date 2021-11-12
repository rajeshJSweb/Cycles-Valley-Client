import { useEffect } from "react";
import { useState } from "react"

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dark-vault-77373.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices];
}

export default useService;