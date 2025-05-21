import { WebPlugin } from '@capacitor/core';
import { loadStripeTerminal } from '@stripe/terminal-js';
import { TerminalConnectTypes } from './definitions';
import { TerminalEventsEnum } from './events.enum';
import { convertReaderInterface, mapFromCartToICart, mapFromConnectionStatus, mapFromPaymentStatus, } from './terminal-mappers';
export class StripeTerminalWeb extends WebPlugin {
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
        const stripeTerminal = await loadStripeTerminal();
        this.stripeTerminal = stripeTerminal === null || stripeTerminal === void 0 ? void 0 : stripeTerminal.create({
            onFetchConnectionToken: async () => {
                this.notifyListeners(TerminalEventsEnum.RequestedConnectionToken, null);
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
                this.notifyListeners(TerminalEventsEnum.ConnectionStatusChange, {
                    status: mapFromConnectionStatus(status.status),
                });
            },
            onPaymentStatusChange: (status) => {
                this.notifyListeners(TerminalEventsEnum.PaymentStatusChange, {
                    status: mapFromPaymentStatus(status.status),
                });
            },
            onUnexpectedReaderDisconnect: () => {
                this.notifyListeners(TerminalEventsEnum.UnexpectedReaderDisconnect, {
                    reader: null,
                });
            },
        });
        this.notifyListeners(TerminalEventsEnum.Loaded, null);
    }
    async discoverReaders(options) {
        if (this.stripeTerminal === undefined) {
            throw new Error('Stripe Terminal has not been initialized');
        }
        if (options.type !== TerminalConnectTypes.Internet) {
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
        this.notifyListeners(TerminalEventsEnum.DiscoveredReaders, {
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
        this.notifyListeners(TerminalEventsEnum.ConnectedReader, null);
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
        this.notifyListeners(TerminalEventsEnum.DisconnectedReader, null);
    }
    async collectPaymentMethod(options) {
        var _a;
        const collectResult = await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.collectPaymentMethod(options.paymentIntent));
        if (collectResult.error) {
            throw new Error(collectResult.error.message);
        }
        this.cachedPaymentIntent = collectResult.paymentIntent;
        this.notifyListeners(TerminalEventsEnum.CollectedPaymentIntent, null);
    }
    async cancelCollectPaymentMethod() {
        var _a;
        await ((_a = this.stripeTerminal) === null || _a === void 0 ? void 0 : _a.cancelCollectPaymentMethod());
        this.notifyListeners(TerminalEventsEnum.Canceled, null);
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
        this.notifyListeners(TerminalEventsEnum.ConfirmedPaymentIntent, processResult);
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
//# sourceMappingURL=web.js.map