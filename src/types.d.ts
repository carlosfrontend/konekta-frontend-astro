export type Link = {
    title: string,
    path: string,
    className?: string | undefined,
    isDesktop?: boolean,
    listElementClassName?: string
}

export type Speaker = {
    id: number;
    name: string;
    position: string;
    image: ImageMetadata;
}


export type Session = {
    time: string;
    title: string;
    speakerId?: number | number[];
    type: string;
    description: string
}


export type Schedule = {
    day: string;
    date: string;
    sessions: Session[]
}
