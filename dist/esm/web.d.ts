import { WebPlugin } from '@capacitor/core';
import { TerminalConnectTypes } from './definitions';
import type { StripeTerminalPlugin, ReaderInterface, SimulateReaderUpdate, SimulatedCardType, Cart } from './definitions';
export declare class StripeTerminalWeb extends WebPlugin implements StripeTerminalPlugin {
    private stripeTerminal;
    private tokenProviderPromiseResolve;
    private discoveredReaders;
    private cachedFindReaders;
    private cachedPaymentIntent;
    private isTest;
    initialize(options: {
        tokenProviderEndpoint: string;
        isTest: boolean;
    }): Promise<void>;
    discoverReaders(options: {
        type: TerminalConnectTypes;
        locationId?: string;
    }): Promise<{
        readers: ReaderInterface[];
    }>;
    /**
     * This method is not supported in the web platform.
     */
    cancelDiscoverReaders(): Promise<void>;
    setConnectionToken(options: {
        token: string;
    }): Promise<void>;
    setSimulatorConfiguration(options: {
        update?: SimulateReaderUpdate | undefined;
        simulatedCard?: SimulatedCardType | undefined;
        simulatedTipAmount?: number | undefined;
    }): Promise<void>;
    connectReader(options: {
        reader: ReaderInterface;
    }): Promise<void>;
    getConnectedReader(): Promise<{
        reader: ReaderInterface | null;
    }>;
    disconnectReader(): Promise<void>;
    collectPaymentMethod(options: {
        paymentIntent: string;
    }): Promise<void>;
    cancelCollectPaymentMethod(): Promise<void>;
    confirmPaymentIntent(): Promise<void>;
    installAvailableUpdate(): Promise<void>;
    cancelInstallUpdate(): Promise<void>;
    setReaderDisplay(options: Cart): Promise<void>;
    clearReaderDisplay(): Promise<void>;
    rebootReader(): Promise<void>;
    cancelReaderReconnection(): Promise<void>;
    collect: string;
    cancelCollect: string;
}
