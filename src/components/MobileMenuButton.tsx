import { useEffect, useState } from "react";

export default function MobilemenuButton() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // Add click event listener to each link in the mobile menu
    useEffect(() => {
        if (window.innerWidth >= 768) return
        const links = document.querySelectorAll('#mobile-menu > li > a');
        links.forEach((link) => {
            link.addEventListener('click', handleClickClose);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleClickClose);
            });
        };
    }, [menuIsOpen]);

    const handleClickOpen = () => {
        const menu = document.getElementById('mobile-menu');
        if (menuIsOpen === false) {
            document.documentElement.classList.add('overflow-hidden');
            menu?.classList.remove('animate-fade-out-right');
            menu?.classList.add('animate-fade-in-right');
            setMenuIsOpen(true);
        } else {
            menu?.classList.remove('animate-fade-in-right');
            menu?.classList.add('animate-fade-out-right');
            setMenuIsOpen(false);
        }
    }
    const handleClickClose = () => {
        document.documentElement.classList.remove('overflow-hidden');
        const menu = document.getElementById('mobile-menu');
        menu?.classList.remove('animate-fade-in-right');
        menu?.classList.add('animate-fade-out-right');
        setMenuIsOpen(false);
    }



    if (!menuIsOpen) {
        return <button aria-label="Abrir menu" onClick={handleClickOpen} className="z-50 md:hidden absolute top-4 right-4 cursor-pointer">
            <svg viewBox="0 0 24 24" fill="#343841" className="size-8 z-50">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
        </button>
    }
    return (
        <button aria-label="Cerrar menu" onClick={handleClickClose} className="z-50 md:hidden absolute top-4 right-4 cursor-pointer animate-rotate-left duration-1000">
            <svg viewBox="0 0 24 24" fill="#343841" className="size-8 z-50">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>

        </button>

    )
}