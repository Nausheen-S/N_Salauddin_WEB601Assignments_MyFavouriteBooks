export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    image?: string;
    type?: string;
    tags?: string[];
}