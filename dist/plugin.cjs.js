'use strict';

var core = require('@capacitor/core');
var terminalJs = require('@stripe/terminal-js');

exports.TerminalEventsEnum = void 0;
(function (TerminalEventsEnum) {
    TerminalEventsEnum["Loaded"] = "terminalLoaded";
    TerminalEventsEnum["DiscoveredReaders"] = "terminalDiscoveredReaders";
    TerminalEventsEnum["DiscoveringReaders"] = "terminalDiscoveringReaders";
    TerminalEventsEnum["CancelDiscoveredReaders"] = "terminalCancelDiscoveredReaders";
    TerminalEventsEnum["ConnectedReader"] = "terminalConnectedReader";
    TerminalEventsEnum["DisconnectedReader"] = "terminalDisconnectedReader";
    TerminalEventsEnum["ConnectionStatusChange"] = "terminalConnectionStatusChange";
    TerminalEventsEnum["UnexpectedReaderDisconnect"] = "terminalUnexpectedReaderDisconnect";
    TerminalEventsEnum["ConfirmedPaymentIntent"] = "terminalConfirmedPaymentIntent";
    TerminalEventsEnum["CollectedPaymentIntent"] = "terminalCollectedPaymentIntent";
    TerminalEventsEnum["Canceled"] = "terminalCanceled";
    TerminalEventsEnum["Failed"] = "terminalFailed";
    TerminalEventsEnum["RequestedConnectionToken"] = "terminalRequestedConnectionToken";
    TerminalEventsEnum["ReportAvailableUpdate"] = "terminalReportAvailableUpdate";
    TerminalEventsEnum["StartInstallingUpdate"] = "terminalStartInstallingUpdate";
    TerminalEventsEnum["ReaderSoftwareUpdateProgress"] = "terminalReaderSoftwareUpdateProgress";
    TerminalEventsEnum["FinishInstallingUpdate"] = "terminalFinishInstallingUpdate";
    TerminalEventsEnum["BatteryLevel"] = "terminalBatteryLevel";
    TerminalEventsEnum["ReaderEvent"] = "terminalReaderEvent";
    TerminalEventsEnum["RequestDisplayMessage"] = "terminalRequestDisplayMessage";
    TerminalEventsEnum["RequestReaderInput"] = "terminalRequestReaderInput";
    TerminalEventsEnum["PaymentStatusChange"] = "terminalPaymentStatusChange";
    TerminalEventsEnum["ReaderReconnectStarted"] = "terminalReaderReconnectStarted";
    TerminalEventsEnum["ReaderReconnectSucceeded"] = "terminalReaderReconnectSucceeded";
    TerminalEventsEnum["ReaderReconnectFailed"] = "terminalReaderReconnectFailed";
})(exports.TerminalEventsEnum || (exports.TerminalEventsEnum = {}));

exports.TerminalConnectTypes = void 0;
(function (TerminalConnectTypes) {
    TerminalConnectTypes["Simulated"] = "simulated";
    TerminalConnectTypes["Internet"] = "internet";
    TerminalConnectTypes["Bluetooth"] = "bluetooth";
    TerminalConnectTypes["Usb"] = "usb";
    TerminalConnectTypes["TapToPay"] = "tap-to-pay";
    TerminalConnectTypes["HandOff"] = "hand-off";
})(exports.TerminalConnectTypes || (exports.TerminalConnectTypes = {}));
/**
 * Note: Don't need to use this enum. It's just for reference.
 */
exports.DeviceType = void 0;
(function (DeviceType) {
    DeviceType["tapToPayDevice"] = "tapToPayDevice";
    DeviceType["wisePad3s"] = "wisePad3s";
    DeviceType["appleBuiltIn"] = "appleBuiltIn";
    DeviceType["chipper1X"] = "chipper1X";
    DeviceType["chipper2X"] = "chipper2X";
    DeviceType["etna"] = "etna";
    DeviceType["stripeM2"] = "stripeM2";
    DeviceType["stripeS700"] = "stripeS700";
    DeviceType["stripeS700DevKit"] = "stripeS700Devkit";
    DeviceType["verifoneP400"] = "verifoneP400";
    DeviceType["wiseCube"] = "wiseCube";
    DeviceType["wisePad3"] = "wisePad3";
    DeviceType["wisePosE"] = "wisePosE";
    DeviceType["wisePosEDevKit"] = "wisePosEDevkit";
    DeviceType["unknown"] = "unknown";
})(exports.DeviceType || (exports.DeviceType = {}));
/**
 * This group is useful for pick image.
 * Reference: https://github.com/stripe/stripe-terminal-ios/blob/fc571ab441b14639243a11d19d8f62bbe93feea5/Example/Example/ReaderHeaderView.swift#L95-L113
 */
exports.DeviceGroup = void 0;
(function (DeviceGroup) {
    DeviceGroup["stripeM2"] = "stripe_m2";
    DeviceGroup["chipper1X"] = "chipper";
    DeviceGroup["chipper2X"] = "chipper";
    DeviceGroup["wiseCube"] = "chipper";
    DeviceGroup["verifoneP400"] = "verifone";
    DeviceGroup["wisePad3s"] = "wisepad";
    DeviceGroup["wisePad3"] = "wisepad";
    DeviceGroup["wisePosEDevKit"] = "wisepose";
    DeviceGroup["etna"] = "wisepose";
    DeviceGroup["wisePosE"] = "wisepose";
    DeviceGroup["stripeS700DevKit"] = "s700";
    DeviceGroup["stripeS700"] = "s700";
    DeviceGroup["appleBuiltIn"] = "apple";
    DeviceGroup["tapToPayDevice"] = "tapToPayDevice";
    DeviceGroup["unknown"] = "unknown";
})(exports.DeviceGroup || (exports.DeviceGroup = {}));
exports.UpdateTimeEstimate = void 0;
(function (UpdateTimeEstimate) {
    UpdateTimeEstimate["LessThanOneMinute"] = "LESS_THAN_ONE_MINUTE";
    UpdateTimeEstimate["OneToTwoMinutes"] = "ONE_TO_TWO_MINUTES";
    UpdateTimeEstimate["TwoToFiveMinutes"] = "TWO_TO_FIVE_MINUTES";
    UpdateTimeEstimate["FiveToFifteenMinutes"] = "FIVE_TO_FIFTEEN_MINUTES";
})(exports.UpdateTimeEstimate || (exports.UpdateTimeEstimate = {}));
exports.SimulateReaderUpdate = void 0;
(function (SimulateReaderUpdate) {
    SimulateReaderUpdate["UpdateAvailable"] = "UPDATE_AVAILABLE";
    SimulateReaderUpdate["None"] = "NONE";
    SimulateReaderUpdate["Required"] = "REQUIRED";
    SimulateReaderUpdate["Random"] = "RANDOM";
    SimulateReaderUpdate["LowBattery"] = "LOW_BATTERY";
    SimulateReaderUpdate["LowBatterySucceedConnect"] = "LOW_BATTERY_SUCCEED_CONNECT";
})(exports.SimulateReaderUpdate || (exports.SimulateReaderUpdate = {}));
exports.SimulatedCardType = void 0;
(function (SimulatedCardType) {
    SimulatedCardType["Visa"] = "VISA";
    SimulatedCardType["VisaDebit"] = "VISA_DEBIT";
    SimulatedCardType["Mastercard"] = "MASTERCARD";
    SimulatedCardType["MastercardDebit"] = "MASTERCARD_DEBIT";
    SimulatedCardType["MastercardPrepaid"] = "MASTERCARD_PREPAID";
    SimulatedCardType["Amex"] = "AMEX";
    SimulatedCardType["Amex2"] = "AMEX_2";
    SimulatedCardType["Discover"] = "DISCOVER";
    SimulatedCardType["Discover2"] = "DISCOVER_2";
    SimulatedCardType["DinersClub"] = "DINERS";
    SimulatedCardType["DinersClulb14Digits"] = "DINERS_14_DIGITS";
    SimulatedCardType["JCB"] = "JCB";
    SimulatedCardType["UnionPay"] = "UNION_PAY";
    SimulatedCardType["Interac"] = "INTERAC";
    SimulatedCardType["EftposAustraliaDebit"] = "EFTPOS_AU_DEBIT";
    SimulatedCardType["VisaUsCommonDebit"] = "VISA_US_COMMON_DEBIT";
    SimulatedCardType["ChargeDeclined"] = "CHARGE_DECLINED";
    SimulatedCardType["ChargeDeclinedInsufficientFunds"] = "CHARGE_DECLINED_INSUFFICIENT_FUNDS";
    SimulatedCardType["ChargeDeclinedLostCard"] = "CHARGE_DECLINED_LOST_CARD";
    SimulatedCardType["ChargeDeclinedStolenCard"] = "CHARGE_DECLINED_STOLEN_CARD";
    SimulatedCardType["ChargeDeclinedExpiredCard"] = "CHARGE_DECLINED_EXPIRED_CARD";
    SimulatedCardType["ChargeDeclinedProcessingError"] = "CHARGE_DECLINED_PROCESSING_ERROR";
    SimulatedCardType["EftposAustraliaVisaDebit"] = "EFTPOS_AU_VISA_DEBIT";
    SimulatedCardType["EftposAustraliaMastercardDebit"] = "EFTPOS_AU_DEBIT_MASTERCARD";
    SimulatedCardType["OfflinePinCVM"] = "OFFLINE_PIN_CVM";
    SimulatedCardType["OfflinePinSCARetry"] = "OFFLINE_PIN_SCA_RETRY";
    SimulatedCardType["OnlinePinCVM"] = "ONLINE_PIN_CVM";
    SimulatedCardType["OnlinePinSCARetry"] = "ONLINE_PIN_SCA_RETRY";
})(exports.SimulatedCardType || (exports.SimulatedCardType = {}));
exports.BatteryStatus = void 0;
(function (BatteryStatus) {
    BatteryStatus["Unknown"] = "UNKNOWN";
    BatteryStatus["Critical"] = "CRITICAL";
    BatteryStatus["Low"] = "LOW";
    BatteryStatus["Nominal"] = "NOMINAL";
})(exports.BatteryStatus || (exports.BatteryStatus = {}));
exports.LocationStatus = void 0;
(function (LocationStatus) {
    LocationStatus["NotSet"] = "NOT_SET";
    LocationStatus["Set"] = "SET";
    LocationStatus["Unknown"] = "UNKNOWN";
})(exports.LocationStatus || (exports.LocationStatus = {}));
exports.NetworkStatus = void 0;
(function (NetworkStatus) {
    NetworkStatus["Unknown"] = "UNKNOWN";
    NetworkStatus["Online"] = "ONLINE";
    NetworkStatus["Offline"] = "OFFLINE";
})(exports.NetworkStatus || (exports.NetworkStatus = {}));
exports.ReaderEvent = void 0;
(function (ReaderEvent) {
    ReaderEvent["Unknown"] = "UNKNOWN";
    ReaderEvent["CardInserted"] = "CARD_INSERTED";
    ReaderEvent["CardRemoved"] = "CARD_REMOVED";
})(exports.ReaderEvent || (exports.ReaderEvent = {}));
exports.ReaderDisplayMessage = void 0;
(function (ReaderDisplayMessage) {
    ReaderDisplayMessage["CheckMobileDevice"] = "CHECK_MOBILE_DEVICE";
    ReaderDisplayMessage["RetryCard"] = "RETRY_CARD";
    ReaderDisplayMessage["InsertCard"] = "INSERT_CARD";
    ReaderDisplayMessage["InsertOrSwipeCard"] = "INSERT_OR_SWIPE_CARD";
    ReaderDisplayMessage["SwipeCard"] = "SWIPE_CARD";
    ReaderDisplayMessage["RemoveCard"] = "REMOVE_CARD";
    ReaderDisplayMessage["MultipleContactlessCardsDetected"] = "MULTIPLE_CONTACTLESS_CARDS_DETECTED";
    ReaderDisplayMessage["TryAnotherReadMethod"] = "TRY_ANOTHER_READ_METHOD";
    ReaderDisplayMessage["TryAnotherCard"] = "TRY_ANOTHER_CARD";
    ReaderDisplayMessage["CardRemovedTooEarly"] = "CARD_REMOVED_TOO_EARLY";
})(exports.ReaderDisplayMessage || (exports.ReaderDisplayMessage = {}));
exports.ReaderInputOption = void 0;
(function (ReaderInputOption) {
    ReaderInputOption["None"] = "NONE";
    ReaderInputOption["Insert"] = "INSERT";
    ReaderInputOption["Swipe"] = "SWIPE";
    ReaderInputOption["Tap"] = "TAP";
    ReaderInputOption["ManualEntry"] = "MANUAL_ENTRY";
})(exports.ReaderInputOption || (exports.ReaderInputOption = {}));
exports.PaymentStatus = void 0;
(function (PaymentStatus) {
    PaymentStatus["Unknown"] = "UNKNOWN";
    PaymentStatus["NotReady"] = "NOT_READY";
    PaymentStatus["Ready"] = "READY";
    PaymentStatus["WaitingForInput"] = "WAITING_FOR_INPUT";
    PaymentStatus["Processing"] = "PROCESSING";
})(exports.PaymentStatus || (exports.PaymentStatus = {}));
exports.DisconnectReason = void 0;
(function (DisconnectReason) {
    DisconnectReason["Unknown"] = "UNKNOWN";
    DisconnectReason["DisconnectRequested"] = "DISCONNECT_REQUESTED";
    DisconnectReason["RebootRequested"] = "REBOOT_REQUESTED";
    DisconnectReason["SecurityReboot"] = "SECURITY_REBOOT";
    DisconnectReason["CriticallyLowBattery"] = "CRITICALLY_LOW_BATTERY";
    DisconnectReason["PoweredOff"] = "POWERED_OFF";
    DisconnectReason["BluetoothDisabled"] = "BLUETOOTH_DISABLED";
})(exports.DisconnectReason || (exports.DisconnectReason = {}));
exports.ConnectionStatus = void 0;
(function (ConnectionStatus) {
    ConnectionStatus["Unknown"] = "UNKNOWN";
    ConnectionStatus["NotConnected"] = "NOT_CONNECTED";
    ConnectionStatus["Connecting"] = "CONNECTING";
    ConnectionStatus["Connected"] = "CONNECTED";
})(exports.ConnectionStatus || (exports.ConnectionStatus = {}));

const StripeTerminal = core.registerPlugin('StripeTerminal', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.StripeTerminalWeb()),
});

const mapFromCartToICart = (cart) => {
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
const mapFromConnectionStatus = (connectionStatus) => {
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
const mapFromPaymentStatus = (paymentStatus) => {
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
const convertReaderInterface = (reader) => {
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
        batteryStatus: exports.BatteryStatus.Unknown,
        simulated: !reader.livemode,
        serialNumber: reader.serial_number,
        isCharging: 0,
        id: 0,
        availableUpdate: undefined,
        locationId: reader.location.id,
        ipAddress: reader.ip_address || '',
        status: mapFromReaderNetworkStatus(reader.status),
        location: location || undefined,
        locationStatus: exports.LocationStatus.Unknown,
        deviceType: mapFromDeviceType(reader.device_type),
        deviceSoftwareVersion: reader.device_sw_version,
    };
};
const mapFromDeviceType = (type) => {
    switch (type) {
        case 'bbpos_chipper2x':
            return exports.DeviceType.chipper2X;
        case 'stripe_m2':
            return exports.DeviceType.stripeM2;
        case 'verifone_P400':
            return exports.DeviceType.verifoneP400;
        case 'bbpos_wisepad3':
            return exports.DeviceType.wisePad3;
        case 'bbpos_wisepos_e':
            return exports.DeviceType.wisePosE;
        case 'stripe_s700':
            return exports.DeviceType.stripeS700;
        default:
            return exports.DeviceType.unknown;
    }
};
const mapFromReaderNetworkStatus = (status) => {
    switch (status) {
        case 'offline':
            return exports.NetworkStatus.Offline;
        case 'online':
            return exports.NetworkStatus.Online;
        default:
            return exports.NetworkStatus.Unknown;
    }
};
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NOT_READY"] = "not_ready";
    PaymentStatus["READY"] = "ready";
    PaymentStatus["WAITING_FOR_INPUT"] = "waiting_for_input";
    PaymentStatus["PROCESSING"] = "processing";
})(PaymentStatus || (PaymentStatus = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTING"] = "connecting";
    ConnectionStatus["CONNECTED"] = "connected";
    ConnectionStatus["NOT_CONNECTED"] = "not_connected";
})(ConnectionStatus || (ConnectionStatus = {}));
// import {
//   ConnectionStatus,
//   PaymentStatus,
// } from '@stripe/terminal-js/types/terminal';

class StripeTerminalWeb extends core.WebPlugin {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.stripeTerminal = undefined;
        this.tokenProviderPromiseResolve = [];
        this.discoveredReaders = [];
        this.cachedFindReaders = [];
        this.cachedPaymentIntent = undefined;
        this.isTest = false;
        this.collect = 'deprecated';
        this.cancelCollect = 'deprecated';
    }
    async initialize(options) {
        if (this.stripeTerminal !== undefined) {
            throw new Error('Stripe Terminal has already been initialized');
        }
        this.isTest = options.isTest;
        const stripeTerminal = await terminalJs.loadStripeTerminal();
        this.stripeTerminal = stripeTerminal === null || stripeTerminal === void 0 ? void 0 : stripeTerminal.create({
            onFetchConnectionToken: async () => {
                this.notifyListeners(exports.TerminalEventsEnum.RequestedConnectionToken, null);
                if (options.tokenProviderEndpoint) {
                    const response = await fetch(options.tokenProviderEndpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    const data = await response.json();
                    return data.secret;
                }
                else {
                    return new Promise((resolve) => this.tokenProviderPromiseResolve.push(resolve));
                }
            },
            onConnectionStatusChange: (status) => {
                this.notifyListeners(exports.TerminalEventsEnum.ConnectionStatusChange, {
                    status: mapFromConnectionStatus(status.status),
                });
            },
            onPaymentStatusChange: (status) => {
                this.notifyListeners(exports.TerminalEventsEnum.PaymentStatusChange, {
                    status: mapFromPaymentStatus(status.status),
                });
            },
            onUnexpectedReaderDisconnect: () => {
                this.notifyListeners(exports.TerminalEventsEnum.UnexpectedReaderDisconnect, {
                    reader: null,
                });
            },
        });
        this.notifyListeners(exports.TerminalEventsEnum.Loaded, null);
    }
    async discoverReaders(options) {
        if (this.stripeTerminal === undefined) {
            throw new Error('Stripe Terminal has not been initialized');
        }
        if (options.type !== exports.TerminalConnectTypes.Internet) {
            throw this.unavailable(`${options.type} is selected. Web platform is supported only internet connection.`);
        }
        const discoverResult = await this.stripeTerminal.discoverReaders({
            simulated: this.isTest,
            location: options.locationId,
        });
        if (discoverResult.error) {
            throw new Error(discoverResult.error.message);
        }
        this.cachedFindReaders = discoverResult.discoveredReaders;
        this.discoveredReaders = discoverResult.discoveredReaders.map((reader) => convertReaderInterface(reader));
        this.notifyListeners(exports.TerminalEventsEnum.DiscoveredReaders, {
            readers: this.discoveredReaders,
        });
        return {
            readers: this.discoveredReaders,
        };
    }
    /**
     * This method is not supported in the web platform.
     */
    async cancelDiscoverReaders() {
        console.log('cancelDiscoverReaders');
    }
    async setConnectionToken(options) {
        if (this.tokenProviderPromiseResolve.length === 0) {
            return;
        }
        console.log('setConnectionToken', options);
        const resolve = this.tokenProviderPromiseResolve.shift();
        if (resolve === undefined) {
            throw new Error('tokenProviderPromiseResolve is empty.');
        }
        resolve(options.token);
    }
    async setSimulatorConfiguration(options) {
        console.log('setSimulatorConfiguration', options);
    }
    async connectReader(options) {
        var _a;
        const reader = this.cachedFindReaders.find((reader) => reader.serial_number === options.reader.serialNumber);
        if (reader === undefined) {
            throw new Error('reader is not match from descovered readers.');
        }
        const connectedResult = await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.connectReader(reader));
        if (connectedResult.error) {
            throw new Error(connectedResult.error.message);
        }
        this.notifyListeners(exports.TerminalEventsEnum.ConnectedReader, null);
    }
    async getConnectedReader() {
        var _a;
        const reader = (_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.getConnectedReader();
        if (reader === undefined) {
            return {
                reader: null,
            };
        }
        return {
            reader: convertReaderInterface(reader),
        };
    }
    async disconnectReader() {
        var _a;
        await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.disconnectReader());
        this.notifyListeners(exports.TerminalEventsEnum.DisconnectedReader, null);
    }
    async collectPaymentMethod(options) {
        var _a;
        const collectResult = await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.collectPaymentMethod(options.paymentIntent));
        if (collectResult.error) {
            throw new Error(collectResult.error.message);
        }
        this.cachedPaymentIntent = collectResult.paymentIntent;
        this.notifyListeners(exports.TerminalEventsEnum.CollectedPaymentIntent, null);
    }
    async cancelCollectPaymentMethod() {
        var _a;
        await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.cancelCollectPaymentMethod());
        this.notifyListeners(exports.TerminalEventsEnum.Canceled, null);
    }
    async confirmPaymentIntent() {
        var _a;
        if (this.cachedPaymentIntent === undefined) {
            throw new Error('PaymentIntent is not cached.');
        }
        const processResult = await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.processPayment(this.cachedPaymentIntent));
        if (processResult.error) {
            throw new Error(processResult.error.message);
        }
        console.log("Confirm payment", processResult);
        this.notifyListeners(exports.TerminalEventsEnum.ConfirmedPaymentIntent, processResult);
    }
    async installAvailableUpdate() {
        console.log('installAvailableUpdate');
    }
    async cancelInstallUpdate() {
        console.log('cancelInstallUpdate');
    }
    async setReaderDisplay(options) {
        var _a;
        await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.setReaderDisplay({
            type: 'cart',
            cart: mapFromCartToICart(options),
        }));
        console.log('setReaderDisplay', options);
    }
    async clearReaderDisplay() {
        var _a;
        await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.clearReaderDisplay());
    }
    async rebootReader() {
        console.log('rebootReader');
    }
    async cancelReaderReconnection() {
        console.log('cancelReaderReconnection');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    StripeTerminalWeb: StripeTerminalWeb
});

exports.StripeTerminal = StripeTerminal;
//# sourceMappingURL=plugin.cjs.js.map
