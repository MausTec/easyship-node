export interface IBox {
    id: string;
    courier_umbrella_name: string;
    name: string;
    slug: string;
    outer_length: number;
    outer_width: number;
    outer_height: number;
    weight: number;
}

export interface IListBoxesResponse {
    boxes: IBox[];
}
