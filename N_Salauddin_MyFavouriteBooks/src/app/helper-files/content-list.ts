import {Content} from "./content-interface";

export class ContentList {
    private contentList: Content[];

    constructor(contentList: Content[]) {    
        this.contentList = []; // initialize array    
    }

    get content(): Content[] {
        return this.contentList;
    }

    add(content: Content) {
        this.contentList.push(content);
    }

    getLength():number {
        return this.contentList.length;
    }

    getContent(index: number): string {
        const contentIndex = this.contentList[index];
        return `<h2>${contentIndex.title}</h2>
                <p>${contentIndex.description}</p>
                <p>By: ${contentIndex.creator}</p>
                <img src=${contentIndex.imgURL}>
                <p>Type: ${contentIndex.type}</p>`;
    }
    
}