import { registerPlugin } from '@capacitor/core';
const StripeTerminal = registerPlugin('StripeTerminal', {
    web: () => import('./web').then((m) => new m.StripeTerminalWeb()),
});
export * from './definitions';
export { StripeTerminal };
//# sourceMappingURL=index.js.map