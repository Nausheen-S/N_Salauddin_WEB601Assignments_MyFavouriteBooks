export interface Content {
    id: number | null ;
    title: string;
    description: string;
    creator: string;
    image?: string;
    type?: string;
    tags?: string[];
}