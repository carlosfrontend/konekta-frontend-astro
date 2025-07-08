import type { Heading } from "../types"

const infoHeading: Heading = {
    title: ['INFORMACIÓN', 'DEL', 'EVENTO'],
    classNames: [

        'bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',

        'bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',

        'bg-linear-to-r from-amber-300 to-red-300 bg-clip-text text-transparent'
    ]
}


const speakersHeading: Heading = {
    title: ['NUESTROS', 'PONENTES'],
    classNames: [
        'bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',
        'bg-linear-to-r from-amber-300 to-red-300 bg-clip-text text-transparent'
    ]
}

const scheduleHeading: Heading = {
    title: ['AGENDA', 'DEL', 'EVENTO'],
    classNames: [
        'bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',
        'bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',
        'bg-linear-to-r from-amber-300 to-red-300 bg-clip-text text-transparent'
    ]
}

const registrationHeading = {
    title: ['REGÍSTRATE', 'GRATIS!'],
    classNames: [
        'bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',
        'bg-linear-to-r from-amber-300 to-red-300 bg-clip-text text-transparent'
    ]
}

export { infoHeading, speakersHeading, scheduleHeading, registrationHeading }