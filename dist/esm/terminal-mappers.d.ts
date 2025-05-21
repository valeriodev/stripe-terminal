import type { Reader } from '@stripe/terminal-js/types/terminal';
import type { Cart, ReaderInterface } from './definitions';
import { DeviceType, NetworkStatus } from './definitions';
import type { ICart } from './stripe-types/proto';
export declare const mapFromCartToICart: (cart: Cart) => ICart;
export declare const mapFromConnectionStatus: (connectionStatus: ConnectionStatus) => string;
export declare const mapFromPaymentStatus: (paymentStatus: PaymentStatus) => string;
export declare const convertReaderInterface: (reader: Reader) => ReaderInterface;
export declare const mapFromDeviceType: (type: ReaderDeviceType) => DeviceType;
export declare const mapFromReaderNetworkStatus: (status: string | null) => NetworkStatus;
type ReaderDeviceType = 'bbpos_chipper2x' | 'bbpos_wisepad3' | 'bbpos_wisepos_e' | 'stripe_m2' | 'verifone_P400' | 'stripe_s700';
export declare enum PaymentStatus {
    NOT_READY = "not_ready",
    READY = "ready",
    WAITING_FOR_INPUT = "waiting_for_input",
    PROCESSING = "processing"
}
export declare enum ConnectionStatus {
    CONNECTING = "connecting",
    CONNECTED = "connected",
    NOT_CONNECTED = "not_connected"
}
export {};
