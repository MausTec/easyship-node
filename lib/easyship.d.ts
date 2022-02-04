import {
    IGetShipmentParams,
    IGetShipmentResponse, IListShipmentParams, IListShipmentResponse,
    IUpdateShipmentParams,
    IUpdateShipmentResponse
} from "./resources/Shipment";

import {
    ICreateLabelParams,
    ICreateLabelResponse,
} from './resources/Label';

import {IListBoxesResponse} from "./resources/Boxes";

export interface IEasyship {
    shipment: {
        get: (id: string, params?: IGetShipmentParams) => Promise<IGetShipmentResponse>;
        update: (id: string, params: IUpdateShipmentParams) => Promise<IUpdateShipmentResponse>;
        list: (params?: IListShipmentParams) => Promise<IListShipmentResponse>;
    };

    boxes: {
        list: () => Promise<IListBoxesResponse>;
    };

    label: {
        create: (params: ICreateLabelParams) => Promise<ICreateLabelResponse>;
    }
}

export * from "./resources/Shipment"
export * from "./resources/Boxes"
export * from "./resources/Label"

declare const Easyship: (token: string) => IEasyship;
export default Easyship;
