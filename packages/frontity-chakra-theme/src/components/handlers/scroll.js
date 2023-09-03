
import { useState, useEffect } from "react"

export default function scroll() {
    const [top, setTop] = useState(false);
    const [hero, setHero] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setTop(window.scrollY > 57);
        });
        window.addEventListener("scroll", () => {
            setHero(window.scrollY > (window.innerHeight - 61));
        });
    }, []);

    return {
        top,
        hero,
    };
}