import {IBox} from "./Boxes";

export interface IShipmentAddress {
    line_1: string;
    line_2?: string | null;
    state: string;
    city: string;
    postal_code: string | null;
    company_name?: string | null;
    contact_name: string;
    contact_phone: string;
    contact_email: string;
}

export interface IShipmentAddressWithCountry extends IShipmentAddress {
    country_alpha2: string;
}

export interface IShipmentInsurance {
    is_insured?: boolean;
    insured_amount?: number;
    insured_currency?: string;
}

export interface IShipmentOrderData {
    platform_name?: string | null;
    platform_order_number?: string | null;
    order_tag_list?: string[];
    seller_notes?: string | null;
    buyer_notes?: string | null;
}

export interface IShipmentCourierSelection {
    selected_courier_id?: string;
    allow_courier_fallback?: boolean;
    apply_shipping_rules?: boolean;
}

export interface IShipmentBox {
    slug?: string;
    length?: number;
    width?: number;
    height?: number;
}

export interface IShipmentItemDimensions {
    length?: number;
    width?: number;
    height?: number;
}

export interface IShipmentItem {
    quantity?: number;
    category: string;
    description: string;
    sku?: string;
    actual_weight: number;
    declared_currency: string;
    declared_customs_value: string;
    dimensions?: IShipmentItemDimensions;
}

export interface IShipmentParcel {
    total_actual_weight?: number;
    box?: IShipmentBox;
    items?: IShipmentItem[];
}

export interface IShipmentParcelResponse {
    total_actual_weight: number;
    items: IShipmentItem[];
    total_customs_value: number;
    total_dimensional_weight: number;
    total_volumetric_weight: number;
    box: IBox;
}

export interface IShipmentTracking {
    tracking_number: string;
    leg_number: number;
    handler: string;
    tracking_state: string;
}

export interface IShippingDocument {
    required: boolean;
    page_size: string | null;
    format: string | null;
    base64_encoded_strings: string[];
    url: string | null;
    category: string;
    message?: string | null;
}

export interface IShipmentRateDiscount {
    code: string | null;
    amount: number;
    expires_at: string | null;
    percentage: number | null;
}

export interface IShipmentRate {
    courier_id: string;
    courier_name: string;
    min_delivery_time: number;
    max_delivery_time: number;
    value_for_money_rank: number;
    delivery_time_rank: number;
    shipment_charge: number;
    fuel_surcharge: number;
    remote_area_surcharge: number;
    oversized_surcharge: number;
    additional_services_surcharge: number;
    residential_full_fee: number;
    residential_discounted_fee: number;
    shipment_charge_total: number;
    warehouse_handling_fee: number;
    insurance_fee: number;
    sales_tax: number;
    provincial_sales_tax: number;
    ddp_handling_fee: number;
    import_tax_charge: number;
    import_duty_charge: number;
    total_charge: number;
    is_above_threshold: boolean;
    incoterms: string;
    estimated_import_tax: number;
    estimated_import_duty: number;
    available_handover_options: string;
    tracking_rating: number;
    easyship_rating: number;
    courier_remarks: string | null;
    payment_recipient: string;
    discount: IShipmentRateDiscount;
}

export interface IUpdateShipmentParams {
    origin_address?: IShipmentAddress;
    sender_address?: IShipmentAddress | null;
    return_address?: IShipmentAddress | null;
    destination_address?: IShipmentAddressWithCountry;
    metadata?: object;
    set_as_residential?: boolean;
    consignee_tax_id?: string;
    eei_reference?: string;
    incoterms?: string;
    insurance?: IShipmentInsurance;
    order_data?: IShipmentOrderData;
    courier_selection?: IShipmentCourierSelection;
    parcels?: IShipmentParcel[];
    items?: IShipmentItem[];
}

export interface IShipment {
    easyship_shipment_id: string;
    created_at: string;
    updated_at: string;
    label_paid_at: string | null;
    label_generated_at: string | null;
    order_created_at: string | null;
    origin_address: IShipmentAddressWithCountry;
    sender_address: IShipmentAddressWithCountry | null;
    return_address: IShipmentAddressWithCountry | null;
    destination_address: IShipmentAddressWithCountry;
    order_data: IShipmentOrderData;
    set_as_residential: boolean;
    consignee_tax_id: string | null;
    eei_reference: string | null;
    incoterms: string | null;
    insurance: IShipmentInsurance;
    parcels_count: number;
    parcels: IShipmentParcelResponse[];
    total_customs_value: number;
    total_actual_weight: number;
    total_dimensional_weight: number;
    total_volumetric_weight: number;
    shipment_state: string;
    pickup_state: string;
    delivery_state: string;
    label_state: string;
    warehouse_state: string;
    trackings: IShipmentTracking[];
    tracking_page_url: string;
    shipping_documents_url: string;
    shipping_documents: IShippingDocument[];
    currency: string;
    selected_courier: {
        id: string;
    }
    rates: IShipmentRate[];
}

export interface IUpdateShipmentResponse {
    status: string;
    errors: string[] | string;
    shipment: IShipment;
}

export interface IGetShipmentParams {
    format?: string;
    label?: string;
    commercial_invoice?: string;
    packing_slip?: string;
}

export interface IGetShipmentResponse extends IShipment {}

export interface IListShipmentParams {
    easyship_shipment_id?: string;
    platform_order_number?: string;
    created_at_from?: string;
    created_at_to?: string;
    updated_at_from?: string;
    updated_at_to?: string;
    label_paid_at_from?: string;
    label_paid_at_to?: string;
    label_generated_at_from?: string;
    label_generated_at_to?: string;
    shipment_state?: string;
    label_state?: string;
    pickup_state?: string;
    delivery_state?: string;
    warehouse_state?: string;
    page?: number;
    per_page?: number;
}

export interface IListShipmentResponse {
    shipments: IShipment[];
}
