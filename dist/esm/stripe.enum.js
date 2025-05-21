export var TerminalConnectTypes;
(function (TerminalConnectTypes) {
    TerminalConnectTypes["Simulated"] = "simulated";
    TerminalConnectTypes["Internet"] = "internet";
    TerminalConnectTypes["Bluetooth"] = "bluetooth";
    TerminalConnectTypes["Usb"] = "usb";
    TerminalConnectTypes["TapToPay"] = "tap-to-pay";
    TerminalConnectTypes["HandOff"] = "hand-off";
})(TerminalConnectTypes || (TerminalConnectTypes = {}));
/**
 * Note: Don't need to use this enum. It's just for reference.
 */
export var DeviceType;
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
})(DeviceType || (DeviceType = {}));
/**
 * This group is useful for pick image.
 * Reference: https://github.com/stripe/stripe-terminal-ios/blob/fc571ab441b14639243a11d19d8f62bbe93feea5/Example/Example/ReaderHeaderView.swift#L95-L113
 */
export var DeviceGroup;
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
})(DeviceGroup || (DeviceGroup = {}));
export var UpdateTimeEstimate;
(function (UpdateTimeEstimate) {
    UpdateTimeEstimate["LessThanOneMinute"] = "LESS_THAN_ONE_MINUTE";
    UpdateTimeEstimate["OneToTwoMinutes"] = "ONE_TO_TWO_MINUTES";
    UpdateTimeEstimate["TwoToFiveMinutes"] = "TWO_TO_FIVE_MINUTES";
    UpdateTimeEstimate["FiveToFifteenMinutes"] = "FIVE_TO_FIFTEEN_MINUTES";
})(UpdateTimeEstimate || (UpdateTimeEstimate = {}));
export var SimulateReaderUpdate;
(function (SimulateReaderUpdate) {
    SimulateReaderUpdate["UpdateAvailable"] = "UPDATE_AVAILABLE";
    SimulateReaderUpdate["None"] = "NONE";
    SimulateReaderUpdate["Required"] = "REQUIRED";
    SimulateReaderUpdate["Random"] = "RANDOM";
    SimulateReaderUpdate["LowBattery"] = "LOW_BATTERY";
    SimulateReaderUpdate["LowBatterySucceedConnect"] = "LOW_BATTERY_SUCCEED_CONNECT";
})(SimulateReaderUpdate || (SimulateReaderUpdate = {}));
export var SimulatedCardType;
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
})(SimulatedCardType || (SimulatedCardType = {}));
export var BatteryStatus;
(function (BatteryStatus) {
    BatteryStatus["Unknown"] = "UNKNOWN";
    BatteryStatus["Critical"] = "CRITICAL";
    BatteryStatus["Low"] = "LOW";
    BatteryStatus["Nominal"] = "NOMINAL";
})(BatteryStatus || (BatteryStatus = {}));
export var LocationStatus;
(function (LocationStatus) {
    LocationStatus["NotSet"] = "NOT_SET";
    LocationStatus["Set"] = "SET";
    LocationStatus["Unknown"] = "UNKNOWN";
})(LocationStatus || (LocationStatus = {}));
export var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus["Unknown"] = "UNKNOWN";
    NetworkStatus["Online"] = "ONLINE";
    NetworkStatus["Offline"] = "OFFLINE";
})(NetworkStatus || (NetworkStatus = {}));
export var ReaderEvent;
(function (ReaderEvent) {
    ReaderEvent["Unknown"] = "UNKNOWN";
    ReaderEvent["CardInserted"] = "CARD_INSERTED";
    ReaderEvent["CardRemoved"] = "CARD_REMOVED";
})(ReaderEvent || (ReaderEvent = {}));
export var ReaderDisplayMessage;
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
})(ReaderDisplayMessage || (ReaderDisplayMessage = {}));
export var ReaderInputOption;
(function (ReaderInputOption) {
    ReaderInputOption["None"] = "NONE";
    ReaderInputOption["Insert"] = "INSERT";
    ReaderInputOption["Swipe"] = "SWIPE";
    ReaderInputOption["Tap"] = "TAP";
    ReaderInputOption["ManualEntry"] = "MANUAL_ENTRY";
})(ReaderInputOption || (ReaderInputOption = {}));
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Unknown"] = "UNKNOWN";
    PaymentStatus["NotReady"] = "NOT_READY";
    PaymentStatus["Ready"] = "READY";
    PaymentStatus["WaitingForInput"] = "WAITING_FOR_INPUT";
    PaymentStatus["Processing"] = "PROCESSING";
})(PaymentStatus || (PaymentStatus = {}));
export var DisconnectReason;
(function (DisconnectReason) {
    DisconnectReason["Unknown"] = "UNKNOWN";
    DisconnectReason["DisconnectRequested"] = "DISCONNECT_REQUESTED";
    DisconnectReason["RebootRequested"] = "REBOOT_REQUESTED";
    DisconnectReason["SecurityReboot"] = "SECURITY_REBOOT";
    DisconnectReason["CriticallyLowBattery"] = "CRITICALLY_LOW_BATTERY";
    DisconnectReason["PoweredOff"] = "POWERED_OFF";
    DisconnectReason["BluetoothDisabled"] = "BLUETOOTH_DISABLED";
})(DisconnectReason || (DisconnectReason = {}));
export var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["Unknown"] = "UNKNOWN";
    ConnectionStatus["NotConnected"] = "NOT_CONNECTED";
    ConnectionStatus["Connecting"] = "CONNECTING";
    ConnectionStatus["Connected"] = "CONNECTED";
})(ConnectionStatus || (ConnectionStatus = {}));
//# sourceMappingURL=stripe.enum.js.map