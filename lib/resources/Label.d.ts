export interface ICreateLabelShipmentParams {
    easyship_shipment_id: string;
    courier_id?: string | null;
}

export interface ICreateLabelParams {
    shipments: ICreateLabelShipmentParams[];
}

export interface ICreateLabelLabelResponse {
    easyship_shipment_id: string;
    label_state: string;
    label_url: string | null;
    status: string;
    tracking_number: string | null;
    tracking_page_url: string;
}

export interface ICreateLabelResponse {
    message: string;
    errors: string[] | string;
    total_cost: number;
    available_balance: number;
    labels: ICreateLabelLabelResponse[];
}
