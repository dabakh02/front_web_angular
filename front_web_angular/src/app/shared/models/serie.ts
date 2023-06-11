import { Media } from "./media";

export interface Serie {
    id?:number
    titre?: string;
    image?: string;    
    episode?: number;
    note?: number;
    description?: string;
    media?: Media;
}
