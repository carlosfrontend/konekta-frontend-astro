import type { Heading } from "../types"

const COMMON_CLASS = 'text-sky-700'

const infoHeading: Heading = {
    title: 'INFORMACIÓN DEL EVENTO',
    className:
        COMMON_CLASS

}


const speakersHeading: Heading = {
    title: 'NUESTROS PONENTES',
    className:
        COMMON_CLASS
}

const scheduleHeading: Heading = {
    title: 'AGENDA DEL EVENTO',
    className:
        COMMON_CLASS
}

const registrationHeading = {
    title: 'REGISTRATE GRATIS!',
    className:
        COMMON_CLASS
}

export { infoHeading, speakersHeading, scheduleHeading, registrationHeading }