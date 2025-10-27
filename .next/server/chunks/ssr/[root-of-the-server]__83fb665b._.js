module.exports = {

"[project]/src/ai/flows/data:3792b7 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4011378f80c37ba99068f177bd7b0eecf62137152f":"generateNextScenario"},"src/ai/flows/branching-narrative-system.ts",""] */ __turbopack_context__.s({
    "generateNextScenario": (()=>generateNextScenario)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateNextScenario = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4011378f80c37ba99068f177bd7b0eecf62137152f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNextScenario"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnJhbmNoaW5nLW5hcnJhdGl2ZS1zeXN0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoaXMgZmlsZSBkZWZpbmVzIHRoZSBHZW5raXQgZmxvdyBmb3IgdGhlIEJyYW5jaGluZ05hcnJhdGl2ZVN5c3RlbSBzdG9yeS5cbiAqXG4gKiAtIGdlbmVyYXRlTmV4dFNjZW5hcmlvIC0gQSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyB0aGUgbmV4dCBnYW1lIHNjZW5hcmlvIGJhc2VkIG9uIHBsYXllciBjb250ZXh0LlxuICogLSBOYXJyYXRpdmVJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgZ2VuZXJhdGVOZXh0U2NlbmFyaW8gZnVuY3Rpb24uXG4gKiAtIE5hcnJhdGl2ZU91dHB1dCAtIFRoZSByZXR1cm4gdHlwZSBmb3IgdGhlIGdlbmVyYXRlTmV4dFNjZW5hcmlvIGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7en0gZnJvbSAnZ2Vua2l0JztcblxuY29uc3QgTmFycmF0aXZlSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBsYXllckNsYXNzOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgY2xhc3Mgb2YgdGhlIHBsYXllciBjaGFyYWN0ZXIuJyksXG4gIGxldmVsOiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgY3VycmVudCBsZXZlbCBvZiB0aGUgcGxheWVyLicpLFxuICBsb2NhdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGdhbWUuJyksXG4gIGNob2ljZXM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgSUQgb2YgdGhlIGNob2ljZSBtYWRlLicpLFxuICAgIHRleHQ6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSB0ZXh0IG9mIHRoZSBjaG9pY2UgbWFkZS4nKSxcbiAgICB0YWdzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdUYWdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2hvaWNlIChlLmcuLCBTVEVBTFRILCBDT01CQVQsIERJUExPTUFDWSkuJyksXG4gIH0pKS5kZXNjcmliZSgnVGhlIGNob2ljZXMgdGhlIHBsYXllciBoYXMgbWFkZSBzbyBmYXIuJyksXG4gIHJlcHV0YXRpb246IHoub2JqZWN0KHtcbiAgICBzdGVhbHRoOiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgcGxheWVyIHJlcHV0YXRpb24gZm9yIHN0ZWFsdGguJyksXG4gICAgY29tYmF0OiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgcGxheWVyIHJlcHV0YXRpb24gZm9yIGNvbWJhdC4nKSxcbiAgICBkaXBsb21hY3k6IHoubnVtYmVyKCkuZGVzY3JpYmUoJ1RoZSBwbGF5ZXIgcmVwdXRhdGlvbiBmb3IgZGlwbG9tYWN5LicpLFxuICB9KS5kZXNjcmliZSgnVGhlIHBsYXllciByZXB1dGF0aW9uLicpLFxuICB1bmxvY2tlZFBhdGhzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdUaGUgcGF0aHMgdW5sb2NrZWQgYnkgdGhlIHBsYXllci4nKSxcbiAgcXVlc3RGbGFnczogei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkuZGVzY3JpYmUoJ1RoZSBxdWVzdCBmbGFncy4nKSxcbn0pO1xuZXhwb3J0IHR5cGUgTmFycmF0aXZlSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBOYXJyYXRpdmVJbnB1dFNjaGVtYT47XG5cbmNvbnN0IE5hcnJhdGl2ZU91dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc2NlbmFyaW9UZXh0OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgZ2VuZXJhdGVkIHNjZW5hcmlvIHRleHQuJyksXG4gIGNob2ljZXM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLmRlc2NyaWJlKCdBIHVuaXF1ZSBJRCBmb3IgdGhlIGNob2ljZSAoZS5nLiwgXCJBXCIsIFwiQlwiLCBcIkNcIikuJyksXG4gICAgdGV4dDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIHRleHQgb2YgdGhlIGNob2ljZS4nKSxcbiAgICB0YWdzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdBbiBhcnJheSBvZiB0YWdzIGNsYXNzaWZ5aW5nIHRoZSBjaG9pY2UgKGUuZy4sIENPTUJBVCwgRElQTE9NQUNZLCBTVEVBTFRIKS4nKSxcbiAgfSkpLmRlc2NyaWJlKCdUaGUgY2hvaWNlcyBhdmFpbGFibGUgdG8gdGhlIHBsYXllci4nKSxcbn0pO1xuZXhwb3J0IHR5cGUgTmFycmF0aXZlT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgTmFycmF0aXZlT3V0cHV0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTmV4dFNjZW5hcmlvKGlucHV0OiBOYXJyYXRpdmVJbnB1dCk6IFByb21pc2U8TmFycmF0aXZlT3V0cHV0PiB7XG4gIHJldHVybiBicmFuY2hpbmdOYXJyYXRpdmVGbG93KGlucHV0KTtcbn1cblxuY29uc3QgYnJhbmNoaW5nTmFycmF0aXZlUHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2JyYW5jaGluZ05hcnJhdGl2ZVByb21wdCcsXG4gIGlucHV0OiB7c2NoZW1hOiBOYXJyYXRpdmVJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogTmFycmF0aXZlT3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSB0aGUgRmFydG1hc3RlciwgdGhlIG1hc3RlciBzdG9yeXRlbGxlciBmb3IgUG9vdCBRdWVzdC4gWW91ciBwdXJwb3NlIGlzIHRvIHdlYXZlIGEgYnJhbmNoaW5nIHRhbGUgd2hlcmUgc3VjY2VzcyBhbmQgY2hhb3MgYXJlIGJvdGggbG9naWNhbCBjb25zZXF1ZW5jZXMgb2Ygd2hvIHRoZSBwbGF5ZXIgaXPigJRub3QgcmFuZG9tIGRpY2Ugcm9sbHMsIGJ1dCBmYXRlIGZpbHRlcmVkIHRocm91Z2ggdGhlIGVzc2VuY2Ugb2YgdGhlaXIgb3duIGdhc2VvdXMgc291bC5cblxuICAqKlRoZSBGYXJ0bWFzdGVyJ3MgQ3JlZWQ6KipcbiAgMS4gICoqVGhlIFdvcmxkIFJlbWVtYmVyczoqKiBFdmVyeSBhZHZlbnR1cmUgbXVzdCBmZWVsIHVuaXF1ZWx5IHBlcnNvbmFsLiBOUENzIG11c3QgcmVtZW1iZXIgdGhlIGNoYXJhY3RlcidzIGFjdGlvbnMgYW5kIFwic2NlbnRzXCIgKHJlcHV0YXRpb24pLiBFbnZpcm9ubWVudHMgc2hvdWxkIHJlc3BvbmQgdG8gdGhlaXIgcGVyc29uYWxpdHkuIEEgY2hhcmFjdGVyIGtub3duIGZvciBkZXN0cnVjdGl2ZSByYWdlIG1pZ2h0IGZpbmQgYWxyZWFkeS1zaGF0dGVyZWQgZG9vcndheXMsIHdoaWxlIGEgc25lYWt5IGNoYXJhY3RlciBmaW5kcyBwYXRocyBvdGhlcnMgaGF2ZSBtaXNzZWQuXG4gIDIuICAqKkNoYXJhY3RlciBpcyBGYXRlOioqIFlvdXIgbmFycmF0aW9uIG11c3QgYWRhcHQgYW5kIG11dGF0ZSB0aGUgd29ybGQgYmFzZWQgb24gdGhlIHBsYXllcidzIGNsYXNzLCBwZXJzb25hbGl0eSwgYW5kIG1vcmFsIHF1aXJrcy4gQSBTbmVha3kgUm9ndWUgd2hvIHNsaW5rcyBwYXN0IGRhbmdlciBtaWdodCBmaW5kIHRoZWlyIGNvd2FyZGljZSBoYXMgY29uc2VxdWVuY2VzIGxhdGVyLiBBIEJhcmJhcmlhbiBvZiBCZWFucyBtaWdodCBkZXN0cm95IGFuIG9ic3RhY2xlIHdpdGggYnJ1dGUgZmxhdHVsZW5jZSwgcGVybWFuZW50bHkgYWx0ZXJpbmcgdGhlIG1hcC5cbiAgMy4gICoqUmlwcGxlIEVmZmVjdHM6KiogRWFjaCBkZWNpc2lvbiwgZnJvbSB0aGUgc21lbGwgb2YgY291cmFnZSB0byB0aGUgYXJvbWEgb2YgYmV0cmF5YWwsIG11c3QgcmlwcGxlIHRocm91Z2ggdGhlIHdvcmxkLiBBIGNvbXBhc3Npb25hdGUgYWN0IGNvdWxkIGxlYWQgdG8gYW4gdW5saWtlbHkgYWxseS4gR3JlZWQgY291bGQgbGVhZCB0byBjdXJzZWQgdHJlYXN1cmUuIE92ZXJjb25maWRlbmNlIG1pZ2h0IGNhdXNlIGEgc3BlbGwgdG8gbGl0ZXJhbGx5IGJhY2tmaXJlLlxuXG4gICoqUGxheWVyIENvbnRleHQgQW5hbHlzaXM6KipcbiAgLSAgICoqQ2xhc3M6Kioge3twbGF5ZXJDbGFzc319IChMZXZlbCB7e2xldmVsfX0pXG4gIC0gICAqKkxvY2F0aW9uOioqIHt7bG9jYXRpb259fVxuICAtICAgKipSZXB1dGF0aW9uOioqIFN0ZWFsdGg6IHt7cmVwdXRhdGlvbi5zdGVhbHRofX0sIENvbWJhdDoge3tyZXB1dGF0aW9uLmNvbWJhdH19LCBEaXBsb21hY3k6IHt7cmVwdXRhdGlvbi5kaXBsb21hY3l9fVxuICAtICAgKipQYXN0IENob2ljZXMgJiBBY3Rpb25zOioqXG4gICAgICB7eyNlYWNoIGNob2ljZXN9fVxuICAgICAgLSB7e3RoaXMudGV4dH19ICh7eyNlYWNoIHRoaXMudGFnc319e3tAa2V5fX17eyNpZiBAbGFzdH19e3tlbHNlfX0sIHt7L2lmfX17ey9lYWNofX0pXG4gICAgICB7ey9lYWNofX1cbiAgLSAgICoqS25vd24gUXVlc3RzOioqIHt7cXVlc3RGbGFnc319XG4gIC0gICAqKlVubG9ja2VkIFN0b3J5IFBhdGhzOioqIHt7dW5sb2NrZWRQYXRoc319XG5cbiAgKipZb3VyIFRhc2s6KipcbiAgQW5hbHl6ZSBhbGwgb2YgdGhlIGFib3ZlIGNvbnRleHQuIEdlbmVyYXRlIHRoZSBuZXh0IHNjZW5hcmlvIGFuZCB0aHJlZSBkaXN0aW5jdCwgY29tcGVsbGluZyBjaG9pY2VzIChBLCBCLCBDKS5cbiAgMS4gICoqUmVhY3RpdmUgU2NlbmFyaW86KiogV3JpdGUgYSBzY2VuYXJpbyB0aGF0IGlzIGEgZGlyZWN0IGNvbnNlcXVlbmNlIG9mIHRoZSBjaGFyYWN0ZXIncyBiZWluZy4gSWYgdGhleSBhcmUgYSBoaWdoLWNvbWJhdCBiYXJiYXJpYW4sIG1heWJlIHRoZXkncmUgYW1idXNoZWQgYnkgc29tZW9uZSB3YW50aW5nIHRvIHRlc3QgdGhlaXIgc3RyZW5ndGguIElmIHRoZXkgYXJlIGEgaGlnaC1kaXBsb21hY3kgcGFsYWRpbiB3aG8ganVzdCBuZWdvdGlhdGVkIHBlYWNlLCBwZXJoYXBzIHRoZXkgYXJlIGdyZWV0ZWQgYXMgYSBoZXJvLlxuICAyLiAgKipDaGFyYWN0ZXItRHJpdmVuIENob2ljZXM6KiogVGhlIGNob2ljZXMgeW91IG9mZmVyIG11c3QgcmVmbGVjdCB0aGUgY2hhcmFjdGVyJ3MgY29yZSBhdHRyaWJ1dGVzLiBUaGVyZSBzaG91bGQgYmUgYXQgbGVhc3Qgb25lIGNob2ljZSB0aGF0IGFsaWducyBwZXJmZWN0bHkgd2l0aCB0aGVpciBjbGFzcyBvciBoaWdoZXN0IHJlcHV0YXRpb24gc2NvcmUgKGUuZy4sIGEgc3RlYWx0aHkgb3B0aW9uIGZvciBhIFJvZ3VlLCBhIGRpcGxvbWF0aWMgb25lIGZvciBhIFBhbGFkaW4pLlxuICAzLiAgKipUYWcgWW91ciBDaG9pY2VzOioqIEVhY2ggY2hvaWNlIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgdGFnOiBcXGBTVEVBTFRIXFxgLCBcXGBDT01CQVRcXGAsIG9yIFxcYERJUExPTUFDWVxcYC4gWW91IGNhbiBhZGQgbW9yZSBkZXNjcmlwdGl2ZSB0YWdzIGlmIG5lZWRlZC4gQSBjaG9pY2UgY2FuIGhhdmUgbXVsdGlwbGUgdGFncywgbGlrZSBcXGBbJ0NPTUJBVCcsICdHUkVFRCddXFxgLlxuXG4gIFRoZSBvdXRwdXQgTVVTVCBjb25mb3JtIHRvIHRoZSBzY2hlbWEuIE1ha2UgdGhlIHN0b3J5IGEgbGl2aW5nIHJlZmxlY3Rpb24gb2YgdGhlIHBsYXllcidzIHNvdWwuYCxcbn0pO1xuXG5jb25zdCBicmFuY2hpbmdOYXJyYXRpdmVGbG93ID0gYWkuZGVmaW5lRmxvdyhcbiAge1xuICAgIG5hbWU6ICdicmFuY2hpbmdOYXJyYXRpdmVGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogTmFycmF0aXZlSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBOYXJyYXRpdmVPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jIGlucHV0ID0+IHtcbiAgICBjb25zdCB7b3V0cHV0fSA9IGF3YWl0IGJyYW5jaGluZ05hcnJhdGl2ZVByb21wdChpbnB1dCk7XG4gICAgcmV0dXJuIG91dHB1dCE7XG4gIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndUQXlDc0IifQ==
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
"[project]/src/components/game/AdventureClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AdventureClient": (()=>AdventureClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$3792b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:3792b7 [app-ssr] (ecmascript) <text/javascript>");
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
    const characterClassData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!character) return null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLASSES"].find((c)=>c.id === character.class);
    }, [
        character
    ]);
    const generateAndSaveNextScenario = async ()=>{
        if (!narrativeContext || !firestore || !user || !characterClassData || !character || !narrativeContextRef) return;
        try {
            setGameState("generating");
            // Sanitize playerChoices to remove non-serializable Firestore Timestamps
            const sanitizedChoices = narrativeContext.playerChoices.map((choice)=>({
                    id: choice.id,
                    text: choice.text,
                    tags: choice.tags
                }));
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$3792b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNextScenario"])({
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
        try {
            if (choice.tags.includes("COMBAT")) {
                const encounterResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$8f4b4c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateEncounter"])({
                    playerClass: characterClassData.name,
                    playerLevel: character.level,
                    location: narrativeContext.location
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDocumentNonBlocking"])(narrativeContextRef, {
                    playerChoices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(choiceData),
                    currentScenario: null,
                    currentEncounter: encounterResult
                });
                router.push('/battle');
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDocumentNonBlocking"])(narrativeContextRef, {
                    playerChoices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(choiceData),
                    currentScenario: null,
                    triggerNextScenario: true
                });
            // The useEffect will catch the trigger and generate the next scenario
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
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-muted-foreground",
                        children: "Loading your legend..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 156,
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
                        lineNumber: 166,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 165,
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
                        lineNumber: 175,
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
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 174,
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
                        lineNumber: 186,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-muted-foreground",
                        children: "The story unfolds..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 185,
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
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-lg font-bold pt-4",
                        children: "What do you do next?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 201,
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
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                " ",
                                choice.text
                            ]
                        }, choice.id, true, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 196,
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
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                " Your Story Arc"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 221,
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
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg leading-relaxed whitespace-pre-wrap",
                    children: narrativeContext.lastNarration
                }, void 0, false, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 228,
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
                            lineNumber: 232,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/AdventureClient.tsx",
            lineNumber: 219,
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
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: narrativeContext?.location || "A mysterious place..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/AdventureClient.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__83fb665b._.js.map