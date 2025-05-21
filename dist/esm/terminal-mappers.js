import { BatteryStatus, DeviceType, LocationStatus, NetworkStatus } from './definitions';
export const mapFromCartToICart = (cart) => {
    return {
        line_items: cart.lineItems.map((item) => ({
            description: item.displayName,
            quantity: item.quantity,
            amount: item.amount,
        })),
        tax: cart.tax,
        total: cart.total,
        currency: cart.currency,
    };
};
export const mapFromConnectionStatus = (connectionStatus) => {
    switch (connectionStatus) {
        case ConnectionStatus.CONNECTED:
            return 'CONNECTED';
        case ConnectionStatus.CONNECTING:
            return 'CONNECTING';
        case ConnectionStatus.NOT_CONNECTED:
            return 'NOT_CONNECTED';
        default:
            return 'UNKNOWN';
    }
};
export const mapFromPaymentStatus = (paymentStatus) => {
    switch (paymentStatus) {
        case PaymentStatus.NOT_READY:
            return 'NOT_READY';
        case PaymentStatus.READY:
            return 'READY';
        case PaymentStatus.PROCESSING:
            return 'PROCESSING';
        case PaymentStatus.WAITING_FOR_INPUT:
            return 'WAITING_FOR_INPUT';
        default:
            return 'UNKNOWN';
    }
};
export const convertReaderInterface = (reader) => {
    let location = undefined;
    if (reader.location.id) {
        location = reader.location;
    }
    return {
        baseUrl: '',
        bootloaderVersion: '',
        configVersion: '',
        emvKeyProfileId: '',
        firmwareVersion: '',
        hardwareVersion: '',
        macKeyProfileId: '',
        pinKeyProfileId: '',
        pinKeysetId: '',
        settingsVersion: '',
        trackKeyProfileId: '',
        label: reader.label,
        batteryLevel: 0,
        batteryStatus: BatteryStatus.Unknown,
        simulated: !reader.livemode,
        serialNumber: reader.serial_number,
        isCharging: 0,
        id: 0,
        availableUpdate: undefined,
        locationId: reader.location.id,
        ipAddress: reader.ip_address || '',
        status: mapFromReaderNetworkStatus(reader.status),
        location: location || undefined,
        locationStatus: LocationStatus.Unknown,
        deviceType: mapFromDeviceType(reader.device_type),
        deviceSoftwareVersion: reader.device_sw_version,
    };
};
export const mapFromDeviceType = (type) => {
    switch (type) {
        case 'bbpos_chipper2x':
            return DeviceType.chipper2X;
        case 'stripe_m2':
            return DeviceType.stripeM2;
        case 'verifone_P400':
            return DeviceType.verifoneP400;
        case 'bbpos_wisepad3':
            return DeviceType.wisePad3;
        case 'bbpos_wisepos_e':
            return DeviceType.wisePosE;
        case 'stripe_s700':
            return DeviceType.stripeS700;
        default:
            return DeviceType.unknown;
    }
};
export const mapFromReaderNetworkStatus = (status) => {
    switch (status) {
        case 'offline':
            return NetworkStatus.Offline;
        case 'online':
            return NetworkStatus.Online;
        default:
            return NetworkStatus.Unknown;
    }
};
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NOT_READY"] = "not_ready";
    PaymentStatus["READY"] = "ready";
    PaymentStatus["WAITING_FOR_INPUT"] = "waiting_for_input";
    PaymentStatus["PROCESSING"] = "processing";
})(PaymentStatus || (PaymentStatus = {}));
export var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTING"] = "connecting";
    ConnectionStatus["CONNECTED"] = "connected";
    ConnectionStatus["NOT_CONNECTED"] = "not_connected";
})(ConnectionStatus || (ConnectionStatus = {}));
// import {
//   ConnectionStatus,
//   PaymentStatus,
// } from '@stripe/terminal-js/types/terminal';
//# sourceMappingURL=terminal-mappers.js.map