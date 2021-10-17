export interface FatherInterface {
    babys: Child;
    child: Child;
    teens: Child;
}

export interface Child {
    title: string;
    imgs: Img[];
}

export interface Img {
        src: string;
        alt: string;
}
