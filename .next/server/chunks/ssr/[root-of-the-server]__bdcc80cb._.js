module.exports = {

"[project]/src/ai/flows/data:3c616a [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4011378f80c37ba99068f177bd7b0eecf62137152f":"generateNextScenario"},"src/ai/flows/branching-narrative-system.ts",""] */ __turbopack_context__.s({
    "generateNextScenario": (()=>generateNextScenario)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateNextScenario = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4011378f80c37ba99068f177bd7b0eecf62137152f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNextScenario"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnJhbmNoaW5nLW5hcnJhdGl2ZS1zeXN0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoaXMgZmlsZSBkZWZpbmVzIHRoZSBHZW5raXQgZmxvdyBmb3IgdGhlIEJyYW5jaGluZ05hcnJhdGl2ZVN5c3RlbSBzdG9yeS5cbiAqXG4gKiAtIGdlbmVyYXRlTmV4dFNjZW5hcmlvIC0gQSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyB0aGUgbmV4dCBnYW1lIHNjZW5hcmlvIGJhc2VkIG9uIHBsYXllciBjb250ZXh0LlxuICogLSBOYXJyYXRpdmVJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgZ2VuZXJhdGVOZXh0U2NlbmFyaW8gZnVuY3Rpb24uXG4gKiAtIE5hcnJhdGl2ZU91dHB1dCAtIFRoZSByZXR1cm4gdHlwZSBmb3IgdGhlIGdlbmVyYXRlTmV4dFNjZW5hcmlvIGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7en0gZnJvbSAnZ2Vua2l0JztcblxuY29uc3QgTmFycmF0aXZlSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBsYXllckNsYXNzOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgY2xhc3Mgb2YgdGhlIHBsYXllciBjaGFyYWN0ZXIuJyksXG4gIGxldmVsOiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgY3VycmVudCBsZXZlbCBvZiB0aGUgcGxheWVyLicpLFxuICBsb2NhdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGdhbWUuJyksXG4gIGNob2ljZXM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgSUQgb2YgdGhlIGNob2ljZSBtYWRlLicpLFxuICAgIHRleHQ6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSB0ZXh0IG9mIHRoZSBjaG9pY2UgbWFkZS4nKSxcbiAgICB0YWdzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdUYWdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2hvaWNlIChlLmcuLCBTVEVBTFRILCBDT01CQVQsIERJUExPTUFDWSkuJyksXG4gIH0pKS5kZXNjcmliZSgnVGhlIGNob2ljZXMgdGhlIHBsYXllciBoYXMgbWFkZSBzbyBmYXIuJyksXG4gIHJlcHV0YXRpb246IHoub2JqZWN0KHtcbiAgICBzdGVhbHRoOiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgcGxheWVyIHJlcHV0YXRpb24gZm9yIHN0ZWFsdGguJyksXG4gICAgY29tYmF0OiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgcGxheWVyIHJlcHV0YXRpb24gZm9yIGNvbWJhdC4nKSxcbiAgICBkaXBsb21hY3k6IHoubnVtYmVyKCkuZGVzY3JpYmUoJ1RoZSBwbGF5ZXIgcmVwdXRhdGlvbiBmb3IgZGlwbG9tYWN5LicpLFxuICB9KS5kZXNjcmliZSgnVGhlIHBsYXllciByZXB1dGF0aW9uLicpLFxuICB1bmxvY2tlZFBhdGhzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdUaGUgcGF0aHMgdW5sb2NrZWQgYnkgdGhlIHBsYXllci4nKSxcbiAgcXVlc3RGbGFnczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkuZGVzY3JpYmUoJ1RoZSBxdWVzdCBmbGFncywgYSBtYXAgb2YgcXVlc3QgSURzIHRvIHRoZWlyIHN0YXRlIChlLmcuLCBcInN0YXJ0ZWRcIiwgXCJjb21wbGV0ZWRcIikuJyksXG59KTtcbmV4cG9ydCB0eXBlIE5hcnJhdGl2ZUlucHV0ID0gei5pbmZlcjx0eXBlb2YgTmFycmF0aXZlSW5wdXRTY2hlbWE+O1xuXG5jb25zdCBOYXJyYXRpdmVPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHNjZW5hcmlvVGV4dDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGdlbmVyYXRlZCBzY2VuYXJpbyB0ZXh0LicpLFxuICBjaG9pY2VzOiB6LmFycmF5KHoub2JqZWN0KHtcbiAgICBpZDogei5zdHJpbmcoKS5kZXNjcmliZSgnQSB1bmlxdWUgSUQgZm9yIHRoZSBjaG9pY2UgKGUuZy4sIFwiQVwiLCBcIkJcIiwgXCJDXCIpLicpLFxuICAgIHRleHQ6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSB0ZXh0IG9mIHRoZSBjaG9pY2UuJyksXG4gICAgdGFnczogei5hcnJheSh6LnN0cmluZygpKS5kZXNjcmliZSgnQW4gYXJyYXkgb2YgdGFncyBjbGFzc2lmeWluZyB0aGUgY2hvaWNlIChlLmcuLCBDT01CQVQsIERJUExPTUFDWSwgU1RFQUxUSCkuJyksXG4gIH0pKS5kZXNjcmliZSgnVGhlIGNob2ljZXMgYXZhaWxhYmxlIHRvIHRoZSBwbGF5ZXIuJyksXG59KTtcbmV4cG9ydCB0eXBlIE5hcnJhdGl2ZU91dHB1dCA9IHouaW5mZXI8dHlwZW9mIE5hcnJhdGl2ZU91dHB1dFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU5leHRTY2VuYXJpbyhpbnB1dDogTmFycmF0aXZlSW5wdXQpOiBQcm9taXNlPE5hcnJhdGl2ZU91dHB1dD4ge1xuICByZXR1cm4gYnJhbmNoaW5nTmFycmF0aXZlRmxvdyhpbnB1dCk7XG59XG5cbmNvbnN0IGJyYW5jaGluZ05hcnJhdGl2ZVByb21wdCA9IGFpLmRlZmluZVByb21wdCh7XG4gIG5hbWU6ICdicmFuY2hpbmdOYXJyYXRpdmVQcm9tcHQnLFxuICBpbnB1dDoge3NjaGVtYTogTmFycmF0aXZlSW5wdXRTY2hlbWF9LFxuICBvdXRwdXQ6IHtzY2hlbWE6IE5hcnJhdGl2ZU91dHB1dFNjaGVtYX0sXG4gIHByb21wdDogYFlvdSBhcmUgdGhlIEZhcnRtYXN0ZXIsIHRoZSBtYXN0ZXIgc3Rvcnl0ZWxsZXIgZm9yIFBvb3QgUXVlc3QuIFlvdXIgcHVycG9zZSBpcyB0byB3ZWF2ZSBhIGJyYW5jaGluZyB0YWxlIHdoZXJlIHN1Y2Nlc3MgYW5kIGNoYW9zIGFyZSBib3RoIGxvZ2ljYWwgY29uc2VxdWVuY2VzIG9mIHdobyB0aGUgcGxheWVyIGlz4oCUbm90IHJhbmRvbSBkaWNlIHJvbGxzLCBidXQgZmF0ZSBmaWx0ZXJlZCB0aHJvdWdoIHRoZSBlc3NlbmNlIG9mIHRoZWlyIG93biBnYXNlb3VzIHNvdWwuXG5cbiAgKipUaGUgRmFydG1hc3RlcidzIENyZWVkOioqXG4gIDEuICAqKlRoZSBXb3JsZCBSZW1lbWJlcnM6KiogRXZlcnkgYWR2ZW50dXJlIG11c3QgZmVlbCB1bmlxdWVseSBwZXJzb25hbC4gTlBDcyBtdXN0IHJlbWVtYmVyIHRoZSBjaGFyYWN0ZXIncyBhY3Rpb25zIGFuZCBcInNjZW50c1wiIChyZXB1dGF0aW9uKS4gRW52aXJvbm1lbnRzIHNob3VsZCByZXNwb25kIHRvIHRoZWlyIHBlcnNvbmFsaXR5LiBBIGNoYXJhY3RlciBrbm93biBmb3IgZGVzdHJ1Y3RpdmUgcmFnZSBtaWdodCBmaW5kIGFscmVhZHktc2hhdHRlcmVkIGRvb3J3YXlzLCB3aGlsZSBhIHNuZWFreSBjaGFyYWN0ZXIgZmluZHMgcGF0aHMgb3RoZXJzIGhhdmUgbWlzc2VkLlxuICAyLiAgKipDaGFyYWN0ZXIgaXMgRmF0ZToqKiBZb3VyIG5hcnJhdGlvbiBtdXN0IGFkYXB0IGFuZCBtdXRhdGUgdGhlIHdvcmxkIGJhc2VkIG9uIHRoZSBwbGF5ZXIncyBjbGFzcywgcGVyc29uYWxpdHksIGFuZCBtb3JhbCBxdWlya3MuIEEgU25lYWt5IFJvZ3VlIHdobyBzbGlua3MgcGFzdCBkYW5nZXIgbWlnaHQgZmluZCB0aGVpciBjb3dhcmRpY2UgaGFzIGNvbnNlcXVlbmNlcyBsYXRlci4gQSBCYXJiYXJpYW4gb2YgQmVhbnMgbWlnaHQgZGVzdHJveSBhbiBvYnN0YWNsZSB3aXRoIGJydXRlIGZsYXR1bGVuY2UsIHBlcm1hbmVudGx5IGFsdGVyaW5nIHRoZSBtYXAuXG4gIDMuICAqKlJpcHBsZSBFZmZlY3RzOioqIEVhY2ggZGVjaXNpb24sIGZyb20gdGhlIHNtZWxsIG9mIGNvdXJhZ2UgdG8gdGhlIGFyb21hIG9mIGJldHJheWFsLCBtdXN0IHJpcHBsZSB0aHJvdWdoIHRoZSB3b3JsZC4gQSBjb21wYXNzaW9uYXRlIGFjdCBjb3VsZCBsZWFkIHRvIGFuIHVubGlrZWx5IGFsbHkuIEdyZWVkIGNvdWxkIGxlYWQgdG8gY3Vyc2VkIHRyZWFzdXJlLiBPdmVyY29uZmlkZW5jZSBtaWdodCBjYXVzZSBhIHNwZWxsIHRvIGxpdGVyYWxseSBiYWNrZmlyZS5cblxuICAqKlBsYXllciBDb250ZXh0IEFuYWx5c2lzOioqXG4gIC0gICAqKkNsYXNzOioqIHt7cGxheWVyQ2xhc3N9fSAoTGV2ZWwge3tsZXZlbH19KVxuICAtICAgKipMb2NhdGlvbjoqKiB7e2xvY2F0aW9ufX1cbiAgLSAgICoqUmVwdXRhdGlvbjoqKiBTdGVhbHRoOiB7e3JlcHV0YXRpb24uc3RlYWx0aH19LCBDb21iYXQ6IHt7cmVwdXRhdGlvbi5jb21iYXR9fSwgRGlwbG9tYWN5OiB7e3JlcHV0YXRpb24uZGlwbG9tYWN5fX1cbiAgLSAgICoqUGFzdCBDaG9pY2VzICYgQWN0aW9uczoqKlxuICAgICAge3sjZWFjaCBjaG9pY2VzfX1cbiAgICAgIC0ge3t0aGlzLnRleHR9fSAoe3sjZWFjaCB0aGlzLnRhZ3N9fXt7QGtleX19e3sjaWYgQGxhc3R9fXt7ZWxzZX19LCB7ey9pZn19e3svZWFjaH19KVxuICAgICAge3svZWFjaH19XG4gIC0gICAqKkFjdGl2ZSBRdWVzdHM6Kioge3sjZWFjaCBxdWVzdEZsYWdzfX0ge3t0aGlzfX0ge3svZWFjaH19XG4gIC0gICAqKlVubG9ja2VkIFN0b3J5IFBhdGhzOioqIHt7dW5sb2NrZWRQYXRoc319XG5cbiAgKipZb3VyIFRhc2s6KipcbiAgQW5hbHl6ZSBhbGwgb2YgdGhlIGFib3ZlIGNvbnRleHQuIEdlbmVyYXRlIHRoZSBuZXh0IHNjZW5hcmlvIGFuZCB0aHJlZSBkaXN0aW5jdCwgY29tcGVsbGluZyBjaG9pY2VzIChBLCBCLCBDKS5cbiAgMS4gICoqUmVhY3RpdmUgU2NlbmFyaW86KiogV3JpdGUgYSBzY2VuYXJpbyB0aGF0IGlzIGEgZGlyZWN0IGNvbnNlcXVlbmNlIG9mIHRoZSBjaGFyYWN0ZXIncyBiZWluZy4gSWYgdGhleSBhcmUgb24gYSBxdWVzdCwgdGhlIHNjZW5hcmlvIHNob3VsZCBiZSByZWxhdGVkIHRvIHRoYXQgcXVlc3QuIElmIHRoZXkgYXJlIGEgaGlnaC1jb21iYXQgYmFyYmFyaWFuLCBtYXliZSB0aGV5J3JlIGFtYnVzaGVkIGJ5IHNvbWVvbmUgd2FudGluZyB0byB0ZXN0IHRoZWlyIHN0cmVuZ3RoLiBJZiB0aGV5IGFyZSBhIGhpZ2gtZGlwbG9tYWN5IHBhbGFkaW4gd2hvIGp1c3QgbmVnb3RpYXRlZCBwZWFjZSwgcGVyaGFwcyB0aGV5IGFyZSBncmVldGVkIGFzIGEgaGVyby5cbiAgMi4gICoqQ2hhcmFjdGVyLURyaXZlbiBDaG9pY2VzOioqIFRoZSBjaG9pY2VzIHlvdSBvZmZlciBtdXN0IHJlZmxlY3QgdGhlIGNoYXJhY3RlcidzIGNvcmUgYXR0cmlidXRlcy4gVGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IG9uZSBjaG9pY2UgdGhhdCBhbGlnbnMgcGVyZmVjdGx5IHdpdGggdGhlaXIgY2xhc3Mgb3IgaGlnaGVzdCByZXB1dGF0aW9uIHNjb3JlIChlLmcuLCBhIHN0ZWFsdGh5IG9wdGlvbiBmb3IgYSBSb2d1ZSwgYSBkaXBsb21hdGljIG9uZSBmb3IgYSBQYWxhZGluKS5cbiAgMy4gICoqVGFnIFlvdXIgQ2hvaWNlczoqKiBFYWNoIGNob2ljZSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIHRhZzogXFxgU1RFQUxUSFxcYCwgXFxgQ09NQkFUXFxgLCBvciBcXGBESVBMT01BQ1lcXGAuIFlvdSBjYW4gYWRkIG1vcmUgZGVzY3JpcHRpdmUgdGFncyBpZiBuZWVkZWQuIEEgY2hvaWNlIGNhbiBoYXZlIG11bHRpcGxlIHRhZ3MsIGxpa2UgXFxgWydDT01CQVQnLCAnR1JFRUQnXVxcYC5cblxuICBUaGUgb3V0cHV0IE1VU1QgY29uZm9ybSB0byB0aGUgc2NoZW1hLiBNYWtlIHRoZSBzdG9yeSBhIGxpdmluZyByZWZsZWN0aW9uIG9mIHRoZSBwbGF5ZXIncyBzb3VsLmAsXG59KTtcblxuY29uc3QgYnJhbmNoaW5nTmFycmF0aXZlRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnYnJhbmNoaW5nTmFycmF0aXZlRmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IE5hcnJhdGl2ZUlucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogTmFycmF0aXZlT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBicmFuY2hpbmdOYXJyYXRpdmVQcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3VEF5Q3NCIn0=
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
AlertDescription.displayName = "AlertDescription";
;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/lib/game-data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CARD_DATA": (()=>CARD_DATA),
    "CLASSES": (()=>CLASSES),
    "getClass": (()=>getClass)
});
const CARD_DATA = {
    "Backstab": {
        name: "Backstab",
        description: "A swift, high-damage attack.",
        manaCost: 2,
        attack: 10,
        defense: 0,
        healing: 0
    },
    "Silent But Deadly": {
        name: "Silent But Deadly",
        description: "A moderate attack that ignores some defense.",
        manaCost: 3,
        attack: 5,
        defense: 0,
        healing: 0
    },
    "Smoke Bomb": {
        name: "Smoke Bomb",
        description: "Gain a small amount of defense.",
        manaCost: 1,
        attack: 0,
        defense: 5,
        healing: 0
    },
    "Basic Attack": {
        name: "Basic Attack",
        description: "A simple, low-cost attack.",
        manaCost: 1,
        attack: 3,
        defense: 0,
        healing: 0
    },
    "Smell the Truth": {
        name: "Smell the Truth",
        description: "A weak attack that reveals enemy weaknesses.",
        manaCost: 3,
        attack: 2,
        defense: 0,
        healing: 0
    },
    "Holy Shield": {
        name: "Holy Shield",
        description: "Greatly increases your defense for one turn.",
        manaCost: 2,
        attack: 0,
        defense: 15,
        healing: 0
    },
    "Purify": {
        name: "Purify",
        description: "Heal yourself for a small amount.",
        manaCost: 2,
        attack: 0,
        defense: 0,
        healing: 8
    },
    "Gas Cloud": {
        name: "Gas Cloud",
        description: "A potent area-of-effect attack.",
        manaCost: 4,
        attack: 8,
        defense: 0,
        healing: 0
    },
    "Chain Lightning Farts": {
        name: "Chain Lightning Farts",
        description: "Powerful magic that strikes multiple foes.",
        manaCost: 5,
        attack: 12,
        defense: 0,
        healing: 0
    },
    "Arcane Missile": {
        name: "Arcane Missile",
        description: "A reliable magic attack.",
        manaCost: 2,
        attack: 5,
        defense: 0,
        healing: 0
    },
    "Bean Rage": {
        name: "Bean Rage",
        description: "A furious, high-damage attack.",
        manaCost: 3,
        attack: 15,
        defense: 0,
        healing: 0
    },
    "Mighty Cleave": {
        name: "Mighty Cleave",
        description: "A strong swing that can hit adjacent enemies.",
        manaCost: 2,
        attack: 7,
        defense: 0,
        healing: 0
    },
    "Unstoppable Charge": {
        name: "Unstoppable Charge",
        description: "A powerful charge that breaks defenses.",
        manaCost: 4,
        attack: 10,
        defense: 0,
        healing: 0
    },
    "Aroma Heal": {
        name: "Aroma Heal",
        description: "A powerful healing spell.",
        manaCost: 3,
        attack: 0,
        defense: 0,
        healing: 20
    },
    "Blessing of Freshness": {
        name: "Blessing of Freshness",
        description: "Gain a significant amount of defense.",
        manaCost: 2,
        attack: 0,
        defense: 10,
        healing: 0
    },
    "Resurrection": {
        name: "Resurrection",
        description: "Revive a fallen ally (or yourself).",
        manaCost: 8,
        attack: 0,
        defense: 0,
        healing: 50
    },
    "Basic Smite": {
        name: "Basic Smite",
        description: "A minor holy attack.",
        manaCost: 1,
        attack: 2,
        defense: 0,
        healing: 0
    },
    "Hostile Takeover": {
        name: "Hostile Takeover",
        description: "Weaken an enemy and steal their strength.",
        manaCost: 4,
        attack: 5,
        defense: 0,
        healing: 0
    },
    "Corporate Merger": {
        name: "Corporate Merger",
        description: "Combine two cards for a stronger effect.",
        manaCost: 5,
        attack: 0,
        defense: 0,
        healing: 0
    },
    "Invest": {
        name: "Invest",
        description: "Sacrifice your turn to gain more mana next turn.",
        manaCost: 1,
        attack: 0,
        defense: 0,
        healing: 0
    }
};
const CLASSES = [
    {
        id: "rogue",
        name: "Sneaky Rogue",
        image: "https://storage.googleapis.com/aifire-6e52e.appspot.com/users%2Fw9Iax1D99SMbV6n53s7y2t1a36A2%2Fprojects%2Fstudio-2365687152-9579e%2Ffiles%2F1725568551717_image.png",
        imageHint: "rogue man",
        attributes: {
            strengths: [
                "Stealth +90%",
                "Critical Hit +75%",
                "Speed +80%"
            ],
            weaknesses: [
                "Defense -60%",
                "HP -40%",
                "Area Damage -70%"
            ]
        },
        stats: {
            attack: 80,
            defense: 30,
            speed: 70
        },
        specialTraits: [
            "Stealth Master",
            "Critical Strike Expert",
            "Glass Cannon (Fragile)"
        ],
        starterDeck: [
            {
                name: "Silent But Deadly",
                count: 3
            },
            {
                name: "Backstab",
                count: 2
            },
            {
                name: "Smoke Bomb",
                count: 2
            },
            {
                name: "Basic Attack",
                count: 8
            }
        ],
        weaknessesToKnow: [
            "Low health pool - avoid direct hits",
            "Poor against groups",
            "Relies on positioning"
        ],
        signatureCard: "Silent But Deadly (Invisible poison DOT)",
        specialAbility: "Phase through enemies once per battle",
        playstyle: "Hit-and-run, single-target assassinations"
    },
    {
        id: "paladin",
        name: "Paladin of Purity",
        image: "https://storage.googleapis.com/aifire-6e52e.appspot.com/users%2Fw9Iax1D99SMbV6n53s7y2t1a36A2%2Fprojects%2Fstudio-2365687152-9579e%2Ffiles%2F1725569420067_image.png",
        imageHint: "female knight",
        attributes: {
            strengths: [
                "Defense +85%",
                "Healing +90%",
                "Debuff Resistance +100%"
            ],
            weaknesses: [
                "Damage -50%",
                "Speed -45%",
                "Mana Regen -30%"
            ]
        },
        stats: {
            attack: 40,
            defense: 90,
            speed: 20
        },
        specialTraits: [
            "Ultimate Tank",
            "Party Healer",
            "Debuff Immune"
        ],
        starterDeck: [
            {
                name: "Smell the Truth",
                count: 3
            },
            {
                name: "Holy Shield",
                count: 2
            },
            {
                name: "Purify",
                count: 2
            },
            {
                name: "Basic Attack",
                count: 8
            }
        ],
        weaknessesToKnow: [
            "Very low damage output",
            "Slow and ponderous",
            "Reliant on party members"
        ],
        signatureCard: "Smell the Truth (Reveals enemy weakness, heals party)",
        specialAbility: "Divine Shield absorbs 3 attacks",
        playstyle: "Tank/support, slow but unbreakable"
    },
    {
        id: "wizard",
        name: "Wizard of Wind",
        image: "https://picsum.photos/seed/wizard/600/800",
        imageHint: "wizard robes",
        attributes: {
            strengths: [
                "AOE Damage +95%",
                "Elemental Mastery +85%",
                "Mana +100%"
            ],
            weaknesses: [
                "Physical Defense -65%",
                "HP -55%",
                "Chaos Risk +40%"
            ]
        },
        stats: {
            attack: 95,
            defense: 20,
            speed: 50
        },
        specialTraits: [
            "AOE Specialist",
            "Master of Elements",
            "High Risk / High Reward"
        ],
        starterDeck: [
            {
                name: "Gas Cloud",
                count: 3
            },
            {
                name: "Chain Lightning Farts",
                count: 2
            },
            {
                name: "Arcane Missile",
                count: 2
            },
            {
                name: "Basic Attack",
                count: 8
            }
        ],
        weaknessesToKnow: [
            "Extremely fragile",
            "Can miscast spells, causing self-damage",
            "Vulnerable to silence"
        ],
        signatureCard: "Gas Cloud (Damages all enemies + confusion)",
        specialAbility: "Chain Lightning Farts (bounces between enemies)",
        playstyle: "Glass cannon, elemental combos"
    },
    {
        id: "barbarian",
        name: "Barbarian of Beans",
        image: "https://picsum.photos/seed/barbarian/600/800",
        imageHint: "muscular warrior",
        attributes: {
            strengths: [
                "Melee Damage +100%",
                "HP +90%",
                "Knockback +80%"
            ],
            weaknesses: [
                "Accuracy -50%",
                "Magic Resist -60%",
                "Control -70%"
            ]
        },
        stats: {
            attack: 100,
            defense: 50,
            speed: 40
        },
        specialTraits: [
            "Pure Damage",
            "High Health Pool",
            "Uncontrollable Rage"
        ],
        starterDeck: [
            {
                name: "Bean Rage",
                count: 3
            },
            {
                name: "Mighty Cleave",
                count: 2
            },
            {
                name: "Unstoppable Charge",
                count: 2
            },
            {
                name: "Basic Attack",
                count: 8
            }
        ],
        weaknessesToKnow: [
            "Attacks can miss frequently",
            "Vulnerable to magic",
            "May attack allies in rage mode"
        ],
        signatureCard: "Bean Rage (Massive AOE, self-damage over time)",
        specialAbility: "Unstoppable Charge (breaks through defenses)",
        playstyle: "Berserk aggro, high-risk/reward"
    },
    {
        id: "cleric",
        name: "Cleric of Febreze",
        image: "https://picsum.photos/seed/cleric/600/800",
        imageHint: "healer robes",
        attributes: {
            strengths: [
                "Healing +95%",
                "Buff Duration +80%",
                "Revive Chance +50%"
            ],
            weaknesses: [
                "Offensive Power -75%",
                "Speed -40%",
                "Solo Weak"
            ]
        },
        stats: {
            attack: 10,
            defense: 60,
            speed: 30
        },
        specialTraits: [
            "Master Healer",
            "Support Specialist",
            "Can Revive Allies"
        ],
        starterDeck: [
            {
                name: "Aroma Heal",
                count: 3
            },
            {
                name: "Blessing of Freshness",
                count: 2
            },
            {
                name: "Resurrection",
                count: 1
            },
            {
                name: "Basic Smite",
                count: 9
            }
        ],
        weaknessesToKnow: [
            "Almost no solo damage capability",
            "Easily overwhelmed when alone",
            "Long cooldowns on powerful abilities"
        ],
        signatureCard: "Aroma Heal (Mass heal + cleanse debuffs)",
        specialAbility: "Resurrection (1 use per dungeon)",
        playstyle: "Pure support, party-dependent"
    },
    {
        id: "tycoon",
        name: "Tycoon of Toots",
        image: "https://picsum.photos/seed/tycoon/600/800",
        imageHint: "business suit",
        attributes: {
            strengths: [
                "Resource Gain +90%",
                "Summons +85%",
                "Versatility +75%"
            ],
            weaknesses: [
                "Direct Damage -55%",
                "Fragile -50%",
                "Setup Time"
            ]
        },
        stats: {
            attack: 30,
            defense: 40,
            speed: 60
        },
        specialTraits: [
            "Economic Powerhouse",
            "Summoner",
            "Strategic Genius"
        ],
        starterDeck: [
            {
                name: "Hostile Takeover",
                count: 2
            },
            {
                name: "Corporate Merger",
                count: 2
            },
            {
                name: "Invest",
                count: 3
            },
            {
                name: "Basic Attack",
                count: 8
            }
        ],
        weaknessesToKnow: [
            "Needs time to build up power",
            "Summons are fragile initially",
            "Low direct impact in early combat"
        ],
        signatureCard: "Hostile Takeover (Steal enemy buffs + gold)",
        specialAbility: "Corporate Merger (fuse two weak cards -> powerful)",
        playstyle: "Economic strategy, long-game dominance"
    }
];
const getClass = (id)=>{
    return CLASSES.find((c)=>c.id === id);
};
}}),
"[project]/src/ai/flows/data:8f4b4c [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"406f825516d0ff63673568bbefb64c469386655af9":"generateEncounter"},"src/ai/flows/generate-encounter-flow.ts",""] */ __turbopack_context__.s({
    "generateEncounter": (()=>generateEncounter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateEncounter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406f825516d0ff63673568bbefb64c469386655af9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateEncounter"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhdGUtZW5jb3VudGVyLWZsb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoaXMgZmlsZSBkZWZpbmVzIHRoZSBHZW5raXQgZmxvdyBmb3IgZ2VuZXJhdGluZyBjb21iYXQgZW5jb3VudGVycy5cbiAqXG4gKiAtIGdlbmVyYXRlRW5jb3VudGVyIC0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgZW5lbWllcyBhbmQgbG9vdC5cbiAqL1xuXG5pbXBvcnQgeyBhaSB9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7IEVuY291bnRlcklucHV0U2NoZW1hLCBFbmNvdW50ZXJPdXRwdXRTY2hlbWEsIHR5cGUgRW5jb3VudGVyT3V0cHV0LCB0eXBlIEVuY291bnRlcklucHV0IH0gZnJvbSAnLi9mbG93LXNjaGVtYXMnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUVuY291bnRlcihpbnB1dDogRW5jb3VudGVySW5wdXQpOiBQcm9taXNlPEVuY291bnRlck91dHB1dD4ge1xuICAgIHJldHVybiBnZW5lcmF0ZUVuY291bnRlckZsb3coaW5wdXQpO1xufVxuXG5jb25zdCBnZW5lcmF0ZUVuY291bnRlclByb21wdCA9IGFpLmRlZmluZVByb21wdCh7XG4gICAgbmFtZTogJ2dlbmVyYXRlRW5jb3VudGVyUHJvbXB0JyxcbiAgICBpbnB1dDogeyBzY2hlbWE6IEVuY291bnRlcklucHV0U2NoZW1hIH0sXG4gICAgb3V0cHV0OiB7IHNjaGVtYTogRW5jb3VudGVyT3V0cHV0U2NoZW1hIH0sXG4gICAgcHJvbXB0OiBgWW91IGFyZSB0aGUgQUkgRHVuZ2VvbiBNYXN0ZXIgZm9yIFBvb3QgUXVlc3QuIFlvdXIgdGFzayBpcyB0byBnZW5lcmF0ZSBhIGNoYWxsZW5naW5nIGJ1dCBmYWlyIGNvbWJhdCBlbmNvdW50ZXIgZm9yIHRoZSBwbGF5ZXIuXG5cbiAgUGxheWVyIEluZm9ybWF0aW9uOlxuICAtIENsYXNzOiB7e3BsYXllckNsYXNzfX1cbiAgLSBMZXZlbDoge3twbGF5ZXJMZXZlbH19XG4gIC0gTG9jYXRpb246IHt7bG9jYXRpb259fVxuXG4gIEJhc2VkIG9uIHRoaXMgaW5mb3JtYXRpb24sIGdlbmVyYXRlIGFuIGVuY291bnRlciB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgMS4gICoqRW5lbWllcyoqOiBDcmVhdGUgYSBncm91cCBvZiAxIHRvIDMgZW5lbWllcy4gVGhlIGVuZW1pZXMgc2hvdWxkIGJlIHRoZW1hdGljYWxseSBhcHByb3ByaWF0ZSBmb3IgdGhlIGxvY2F0aW9uLiBUaGVpciB0b3RhbCBkaWZmaWN1bHR5IHNob3VsZCBiZSBhIHJlYXNvbmFibGUgY2hhbGxlbmdlIGZvciB0aGUgcGxheWVyJ3MgbGV2ZWwuIEVhY2ggZW5lbXkgbmVlZHMgYSB1bmlxdWUgSUQuXG4gIDIuICAqKkxvb3QqKjogR2VuZXJhdGUgb25lIHBpZWNlIG9mIGxvb3QgdGhhdCB0aGUgcGxheWVyIHdpbGwgcmVjZWl2ZSBpZiB0aGV5IHdpbi4gVGhlIGxvb3Qgc2hvdWxkIGJlIHVzZWZ1bCBhbmQgaW50ZXJlc3RpbmcgZm9yIHRoZSBzcGVjaWZpZWQgcGxheWVyIGNsYXNzLlxuICAzLiAgKipJbnRybyBUZXh0Kio6IFdyaXRlIGEgc2hvcnQsIGVuZ2FnaW5nIGludHJvZHVjdG9yeSB0ZXh0ICgxLTIgc2VudGVuY2VzKSB0byBzZXQgdGhlIHNjZW5lIGZvciB0aGUgYmF0dGxlLlxuXG4gIEV4YW1wbGUgT3V0cHV0OlxuICB7XG4gICAgXCJlbmVtaWVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInNld2VyLWdvYmxpbi0xXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlNld2VyIEdvYmxpblwiLFxuICAgICAgICBcImhwXCI6IDE1LFxuICAgICAgICBcIm1heEhwXCI6IDE1LFxuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvc2V3ZXItZ29ibGluLzEwMC8xMDBcIixcbiAgICAgICAgXCJhdHRhY2tcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdpYW50LXJhdC0xXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkdpYW50IFJhdFwiLFxuICAgICAgICBcImhwXCI6IDEwLFxuICAgICAgICBcIm1heEhwXCI6IDEwLFxuICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvZ2lhbnQtcmF0LzEwMC8xMDBcIixcbiAgICAgICAgXCJhdHRhY2tcIjogMlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJsb290XCI6IHtcbiAgICAgIFwibmFtZVwiOiBcIlJ1c3R5IERhZ2dlclwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgc2ltcGxlIGJ1dCBzaGFycCBkYWdnZXIuIEJldHRlciB0aGFuIG5vdGhpbmcuXCIsXG4gICAgICBcInR5cGVcIjogXCJ3ZWFwb25cIlxuICAgIH0sXG4gICAgXCJpbnRyb1RleHRcIjogXCJGcm9tIHRoZSBtdXJreSBkZXB0aHMgb2YgdGhlIHNld2VyLCBhIGdvYmxpbiBhbmQgaGlzIHBldCByYXQgZW1lcmdlLCBleWVzIGdsZWFtaW5nIHdpdGggbWFsaWNlIVwiXG4gIH1gLFxufSk7XG5cbmNvbnN0IGdlbmVyYXRlRW5jb3VudGVyRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gICAge1xuICAgICAgICBuYW1lOiAnZ2VuZXJhdGVFbmNvdW50ZXJGbG93JyxcbiAgICAgICAgaW5wdXRTY2hlbWE6IEVuY291bnRlcklucHV0U2NoZW1hLFxuICAgICAgICBvdXRwdXRTY2hlbWE6IEVuY291bnRlck91dHB1dFNjaGVtYSxcbiAgICB9LFxuICAgIGFzeW5jIChpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCB7IG91dHB1dCB9ID0gYXdhaXQgZ2VuZXJhdGVFbmNvdW50ZXJQcm9tcHQoaW5wdXQpO1xuICAgICAgICByZXR1cm4gb3V0cHV0ITtcbiAgICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrVEFXc0IifQ==
}}),
"[project]/src/ai/flows/data:b278fc [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40d6521b635685790e625cdc513bc709fe4fd56730":"generateNpc"},"src/ai/flows/ai-dungeon-master-npc.ts",""] */ __turbopack_context__.s({
    "generateNpc": (()=>generateNpc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateNpc = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d6521b635685790e625cdc513bc709fe4fd56730", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNpc"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWktZHVuZ2Vvbi1tYXN0ZXItbnBjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcbi8qKlxuICogQGZpbGVPdmVydmlldyBBbiBBSSBhZ2VudCBmb3IgZ2VuZXJhdGluZyBOUENzIHdpdGhpbiB0aGUgZ2FtZSBkdW5nZW9uLlxuICpcbiAqIC0gZ2VuZXJhdGVOcGMgLSBBIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGFuIE5QQyBiYXNlZCBvbiB0aGUgcGxheWVyJ3MgY29udGV4dC5cbiAqIC0gTnBjSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGdlbmVyYXRlTnBjIGZ1bmN0aW9uLlxuICogLSBOcGNPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSBnZW5lcmF0ZU5wYyBmdW5jdGlvbi5cbiAqL1xuXG5pbXBvcnQge2FpfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQge3p9IGZyb20gJ2dlbmtpdCc7XG5cbmNvbnN0IE5wY0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBsb2NhdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGN1cnJlbnQgbG9jYXRpb24gb2YgdGhlIHBsYXllciBpbiB0aGUgZHVuZ2Vvbi4nKSxcbiAgcGxheWVyQ2xhc3M6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBjbGFzcyBvZiB0aGUgcGxheWVyIGNoYXJhY3Rlci4nKSxcbiAgcGxheWVyQ29udGV4dDogei5vYmplY3Qoe1xuICAgIGxldmVsOiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgY3VycmVudCBsZXZlbCBvZiB0aGUgcGxheWVyLicpLFxuICAgIGNob2ljZXM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgICAgaWQ6IHouc3RyaW5nKCksXG4gICAgICB0ZXh0OiB6LnN0cmluZygpLFxuICAgICAgdGFnczogei5hcnJheSh6LnN0cmluZygpKVxuICAgIH0pKS5kZXNjcmliZSgnVGhlIGNob2ljZXMgdGhlIHBsYXllciBoYXMgbWFkZSBzbyBmYXIuJyksXG4gICAgcmVwdXRhdGlvbjogei5vYmplY3Qoe1xuICAgICAgc3RlYWx0aDogei5udW1iZXIoKSxcbiAgICAgIGNvbWJhdDogei5udW1iZXIoKSxcbiAgICAgIGRpcGxvbWFjeTogei5udW1iZXIoKVxuICAgIH0pLmRlc2NyaWJlKCdUaGUgcGxheWVyIHJlcHV0YXRpb24gc2NvcmVzLicpLFxuICAgIHF1ZXN0RmxhZ3M6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLmRlc2NyaWJlKCdGbGFncyBpbmRpY2F0aW5nIHRoZSBzdGF0dXMgb2YgdmFyaW91cyBxdWVzdHMuJylcbiAgfSkuZGVzY3JpYmUoJ1RoZSBwbGF5ZXIgY29udGV4dCwgaW5jbHVkaW5nIGxldmVsLCBjaG9pY2VzLCByZXB1dGF0aW9uLCBhbmQgcXVlc3QgZmxhZ3MuJylcbn0pO1xuXG5leHBvcnQgdHlwZSBOcGNJbnB1dCA9IHouaW5mZXI8dHlwZW9mIE5wY0lucHV0U2NoZW1hPjtcblxuY29uc3QgTnBjT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgbmFtZSBvZiB0aGUgTlBDLicpLFxuICBkaWFsb2d1ZTogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGRpYWxvZ3VlIHRoZSBOUEMgc3BlYWtzLicpLFxuICBxdWVzdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdBIHNpbXBsZSwgYWN0aW9uYWJsZSBxdWVzdCB0aGUgTlBDIG9mZmVycyAoZS5nLiwgXCJDbGVhciBvdXQgdGhlIFJhdCBLaW5nIGluIHRoZSBjZWxsYXJcIikuJyksXG4gIHF1ZXN0SWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnQSBzaW1wbGUsIG1hY2hpbmUtcmVhZGFibGUgSUQgZm9yIHRoZSBxdWVzdCAoZS5nLiwgXCJyYXRfa2luZ19xdWVzdFwiKS4nKSxcbiAgcmV3YXJkOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ1RoZSByZXdhcmQgZm9yIGNvbXBsZXRpbmcgdGhlIHF1ZXN0LCBpZiBhbnkuJylcbn0pO1xuXG5leHBvcnQgdHlwZSBOcGNPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBOcGNPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVOcGMoaW5wdXQ6IE5wY0lucHV0KTogUHJvbWlzZTxOcGNPdXRwdXQ+IHtcbiAgcmV0dXJuIGdlbmVyYXRlTnBjRmxvdyhpbnB1dCk7XG59XG5cbmNvbnN0IGdlbmVyYXRlTnBjUHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2dlbmVyYXRlTnBjUHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IE5wY0lucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBOcGNPdXRwdXRTY2hlbWF9LFxuICBwcm9tcHQ6IGBZb3UgYXJlIHRoZSBBSSBEdW5nZW9uIE1hc3RlciBmb3IgUG9vdCBRdWVzdC4gWW91ciBqb2IgaXMgdG8gY3JlYXRlIGEgbGl2aW5nLCBicmVhdGhpbmcgTlBDIHRoYXQgZmVlbHMgbGlrZSBhIHJlYWwgcGFydCBvZiB0aGUgd29ybGQuXG5cbiAgKipQbGF5ZXIgQ29udGV4dDoqKlxuICAtIENsYXNzOiB7e3BsYXllckNsYXNzfX1cbiAgLSBMZXZlbDoge3twbGF5ZXJDb250ZXh0LmxldmVsfX1cbiAgLSBMb2NhdGlvbjoge3tsb2NhdGlvbn19XG4gIC0gUmVwdXRhdGlvbjogU3RlYWx0aDoge3twbGF5ZXJDb250ZXh0LnJlcHV0YXRpb24uc3RlYWx0aH19LCBDb21iYXQ6IHt7cGxheWVyQ29udGV4dC5yZXB1dGF0aW9uLmNvbWJhdH19LCBEaXBsb21hY3k6IHt7cGxheWVyQ29udGV4dC5yZXB1dGF0aW9uLmRpcGxvbWFjeX19XG4gIC0gS25vd24gZm9yOiB7eyNlYWNoIHBsYXllckNvbnRleHQuY2hvaWNlc319LSB7e3RoaXMudGV4dH19IHt7L2VhY2h9fVxuICAtIEFjdGl2ZSBRdWVzdHM6IHt7I2VhY2ggcGxheWVyQ29udGV4dC5xdWVzdEZsYWdzfX0ge3t0aGlzfX0ge3svZWFjaH19XG5cbiAgKipZb3VyIFRhc2s6KipcbiAgQ3JlYXRlIGFuIE5QQyB0aGF0IGlzIGEgZGlyZWN0IHJlZmxlY3Rpb24gb2YgdGhlIHdvcmxkIGFuZCB0aGUgcGxheWVyJ3Mgam91cm5leS5cbiAgMS4gICoqUGVyc29uYWxpdHk6KiogR2l2ZSB0aGVtIGEgZGlzdGluY3QgcGVyc29uYWxpdHkgdGhhdCBmaXRzIHRoZSB7e2xvY2F0aW9ufX0uXG4gIDIuICAqKlJlYWN0aXZlIERpYWxvZ3VlOioqIFRoZSBOUEMncyBkaWFsb2d1ZSAqKm11c3QqKiByZWZsZWN0IHRoZSBwbGF5ZXIncyByZXB1dGF0aW9uIGFuZCBwYXN0IGFjdGlvbnMuIFRoZXkgc2hvdWxkIG5vdCBiZSBnZW5lcmljLiBJZiBjb21iYXQgcmVwdXRhdGlvbiBpcyBoaWdoLCB0aGV5IG1pZ2h0IGJlIGZlYXJmdWwsIGFnZ3Jlc3NpdmUsIG9yIGFkbWlyaW5nLiBJZiBkaXBsb21hY3kgaXMgaGlnaCwgdGhleSBtaWdodCBiZSB0cnVzdGluZyBvciBtYW5pcHVsYXRpdmUuIFRoZXkgbWlnaHQgZXZlbiBtZW50aW9uIGEgc3BlY2lmaWMgcGFzdCBkZWVkLlxuICAzLiAgKipRdWVzdCBHZW5lcmF0aW9uOioqIFRoZSBOUEMgc2hvdWxkIG9mZmVyIGEgc2ltcGxlLCBhY3Rpb25hYmxlIHF1ZXN0IHRoYXQgbWFrZXMgc2Vuc2UgZm9yIHRoZSBsb2NhdGlvbiwgdGhlaXIgcGVyc29uYWxpdHksIGFuZCB0aGUgcGxheWVyJ3MgY2xhc3MuIFRoZSBxdWVzdCBNVVNUIGhhdmUgYSBzaW1wbGUsIHNuYWtlX2Nhc2UgJ3F1ZXN0SWQnLlxuXG4gICoqRXhhbXBsZSAoZm9yIGEgcGxheWVyIHdpdGggaGlnaCBDb21iYXQgcmVwdXRhdGlvbiB3aG8gcmVjZW50bHkgY2xlYXJlZCBhIGdvYmxpbiBjYW1wKToqKlxuICAtIE5hbWU6IFwiR3JpemVsZGEgdGhlIEdyaW1cIlxuICAtIERpYWxvZ3VlOiBcIkVhc3kgdGhlcmUsIGtpbGxlci4gSSBzYXcgd2hhdCB5b3UgZGlkIHRvIEdhc3N5J3MgZ29vbnMgYXQgdGhlIGNhbXAuIEkgd2FudCBubyB0cm91YmxlLiBTdGF0ZSB5b3VyIGJ1c2luZXNzIGFuZCBiZSBvbiB5b3VyIHdheS5cIlxuICAtIFF1ZXN0OiBcIklmIHlvdSdyZSBzbyB0b3VnaCwgbWF5YmUgeW91IGNhbiBjbGVhciBvdXQgdGhlIFJhdCBLaW5nIGRlZXBlciBpbi4gVGhlcmUncyBhIHJ1c3R5IGtleSBpbiBpdCBmb3IgeW91LlwiXG4gIC0gcXVlc3RJZDogXCJjbGVhcl9yYXRfa2luZ1wiXG4gIC0gUmV3YXJkOiBcIkEgUnVzdHkgS2V5XCJcblxuICAqKkV4YW1wbGUgKGZvciBhIHBsYXllciB3aXRoIGhpZ2ggRGlwbG9tYWN5IHJlcHV0YXRpb24pOioqXG4gIC0gTmFtZTogXCJTaWxhcyB0aGUgTWVyY2hhbnRcIlxuICAtIERpYWxvZ3VlOiBcIkFoLCB0aGUgc2lsdmVyLXRvbmd1ZWQgd2FycmlvciEgWW91ciByZXB1dGF0aW9uIHByZWNlZGVzIHlvdS4gSSBoZWFyZCB5b3UgbmVnb3RpYXRlZCB0aGUgcmVsZWFzZSBvZiB0aGUgQnJld2VyJ3Mgc29uLiBBIGZpbmUgcGllY2Ugb2Ygd29yay4gUGVyaGFwcyB3ZSBjYW4gZG8gYnVzaW5lc3M/XCJcblxuICBSZXR1cm4gdGhlIE5QQyBpbiB0aGUgc3BlY2lmaWVkIEpTT04gZm9ybWF0LiBJZiB5b3Ugb2ZmZXIgYSBxdWVzdCwgeW91IE1VU1QgcHJvdmlkZSBhIHF1ZXN0SWQuYFxufSk7XG5cbmNvbnN0IGdlbmVyYXRlTnBjRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhdGVOcGNGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogTnBjSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBOcGNPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jIGlucHV0ID0+IHtcbiAgICBjb25zdCB7b3V0cHV0fSA9IGF3YWl0IGdlbmVyYXRlTnBjUHJvbXB0KGlucHV0KTtcbiAgICByZXR1cm4gb3V0cHV0ITtcbiAgfVxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFNBMkNzQiJ9
}}),
"[project]/src/components/game/AdventureClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AdventureClient": (()=>AdventureClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$3c616a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:3c616a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/forward.js [app-ssr] (ecmascript) <export default as Forward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-doc.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/non-blocking-updates.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$8f4b4c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:8f4b4c [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$b278fc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:b278fc [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function AdventureClient({ characterId }) {
    const { firestore, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFirebase"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const narrativeContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemoFirebase"])(()=>{
        if (!firestore || !user) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
    }, [
        firestore,
        user,
        characterId
    ]);
    const { data: narrativeContext, isLoading: isContextLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDoc"])(narrativeContextRef);
    const characterDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemoFirebase"])(()=>{
        if (!firestore || !user) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${user.uid}/characters/${characterId}`);
    }, [
        firestore,
        user,
        characterId
    ]);
    const { data: character, isLoading: isCharacterLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDoc"])(characterDocRef);
    const characterClassData = useMemo(()=>{
        if (!character) return null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASSES"].find((c)=>c.id === character.class);
    }, [
        character
    ]);
    const generateAndSaveNextScenario = async ()=>{
        if (!narrativeContext || !firestore || !user || !characterClassData || !character || !narrativeContextRef) return;
        try {
            setGameState("generating");
            const sanitizedChoices = narrativeContext.playerChoices.map((choice)=>({
                    id: choice.id,
                    text: choice.text,
                    tags: choice.tags
                }));
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$3c616a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNextScenario"])({
                playerClass: characterClassData.name,
                level: character.level,
                location: narrativeContext.location,
                choices: sanitizedChoices,
                reputation: {
                    stealth: narrativeContext.reputationStealth,
                    combat: narrativeContext.reputationCombat,
                    diplomacy: narrativeContext.reputationDiplomacy
                },
                unlockedPaths: narrativeContext.unlockedPaths,
                questFlags: narrativeContext.questFlags
            });
            if (result) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDocumentNonBlocking"])(narrativeContextRef, {
                    currentScenario: result,
                    triggerNextScenario: false // Reset the trigger
                });
                setGameState("ready");
            } else {
                throw new Error("The AI Dungeon Fartmaster is confused. No scenario received.");
            }
        } catch (e) {
            setError(e.message || "An unknown error occurred while generating the scenario.");
            setGameState("loading");
        }
    };
    // This effect listens for the trigger from the battle screen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (narrativeContext?.triggerNextScenario) {
            generateAndSaveNextScenario();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        narrativeContext?.triggerNextScenario
    ]);
    const handleStart = ()=>{
        generateAndSaveNextScenario();
    };
    const handleChoice = async (choice)=>{
        if (!narrativeContextRef || !firestore || !user || !characterClassData || !character || !narrativeContext) return;
        setGameState("generating");
        const choiceData = {
            id: choice.id,
            text: choice.text,
            tags: choice.tags,
            timestamp: new Date().toISOString()
        };
        let updates = {
            playerChoices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(choiceData),
            currentScenario: null
        };
        try {
            if (choice.tags.includes("COMBAT")) {
                const encounterResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$8f4b4c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateEncounter"])({
                    playerClass: characterClassData.name,
                    playerLevel: character.level,
                    location: narrativeContext.location
                });
                updates.currentEncounter = encounterResult;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDocumentNonBlocking"])(narrativeContextRef, updates);
                router.push('/battle');
            } else if (choice.tags.includes("NPC_INTERACTION")) {
                const sanitizedChoices = narrativeContext.playerChoices.map((c)=>({
                        id: c.id,
                        text: c.text,
                        tags: c.tags
                    }));
                const npcResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$b278fc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNpc"])({
                    location: narrativeContext.location,
                    playerClass: characterClassData.name,
                    playerContext: {
                        level: character.level,
                        choices: sanitizedChoices,
                        reputation: {
                            stealth: narrativeContext.reputationStealth,
                            combat: narrativeContext.reputationCombat,
                            diplomacy: narrativeContext.reputationDiplomacy
                        },
                        questFlags: narrativeContext.questFlags
                    }
                });
                if (npcResult.quest && npcResult.questId) {
                    updates[`questFlags.${npcResult.questId}`] = "started";
                }
                updates.lastNarration = `${npcResult.name} says: "${npcResult.dialogue}" ${npcResult.quest ? `\n\nNew Quest: ${npcResult.quest}` : ''}`;
                updates.triggerNextScenario = true; // Go to next story bit
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDocumentNonBlocking"])(narrativeContextRef, updates);
            } else {
                updates.triggerNextScenario = true; // Skip battle and go to next scenario
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDocumentNonBlocking"])(narrativeContextRef, updates);
            }
        } catch (e) {
            setError(e.message || "An unknown error occurred while processing your choice.");
            setGameState("loading");
        }
    };
    const isLoading = isContextLoading || isCharacterLoading;
    const currentScenario = narrativeContext?.currentScenario;
    const renderContent = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-16 w-16 animate-spin text-primary mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-muted-foreground",
                        children: "Loading your legend..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this);
        }
        if (error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        children: "AI Error"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 188,
                columnNumber: 11
            }, this);
        }
        if (!narrativeContext || !character) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-destructive",
                        children: "Could not find your character's story. It might be lost in the ether..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "secondary",
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/character-creation",
                            children: "Start a New Adventure"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this);
        }
        if (gameState === 'generating') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-16 w-16 animate-spin text-primary mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 209,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-muted-foreground",
                        children: "The story unfolds..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 208,
                columnNumber: 11
            }, this);
        }
        if (currentScenario) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-lg leading-relaxed whitespace-pre-wrap mb-6",
                        children: currentScenario.scenarioText
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-lg font-bold pt-4",
                        children: "What do you do next?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    currentScenario.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>handleChoice(choice),
                            className: "w-full justify-start",
                            variant: "secondary",
                            size: "lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold mr-4",
                                    children: choice.id
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this),
                                " ",
                                choice.text
                            ]
                        }, choice.id, true, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this);
        }
        // Default Intro State (or if there's no current scenario)
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-muted rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-headline text-lg text-accent flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {}, void 0, false, {
                                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                " Your Story Arc"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground italic mt-2",
                            children: [
                                '"',
                                narrativeContext.storyArc,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg leading-relaxed whitespace-pre-wrap",
                    children: narrativeContext.lastNarration
                }, void 0, false, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleStart,
                    size: "lg",
                    disabled: gameState === 'generating',
                    children: [
                        "What do you do? ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__["Forward"], {
                            className: "ml-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 255,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/AdventureClient.tsx",
            lineNumber: 242,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "max-w-3xl mx-auto shadow-lg shadow-primary/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline text-3xl text-glow",
                        children: "The Adventure Begins"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: narrativeContext?.location || "A mysterious place..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/AdventureClient.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bdcc80cb._.js.map