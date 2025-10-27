(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/ai/flows/data:39ce82 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4011378f80c37ba99068f177bd7b0eecf62137152f":"generateNextScenario"},"src/ai/flows/branching-narrative-system.ts",""] */ __turbopack_context__.s({
    "generateNextScenario": (()=>generateNextScenario)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateNextScenario = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4011378f80c37ba99068f177bd7b0eecf62137152f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNextScenario"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnJhbmNoaW5nLW5hcnJhdGl2ZS1zeXN0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgdGhlIEdlbmtpdCBmbG93IGZvciB0aGUgQnJhbmNoaW5nTmFycmF0aXZlU3lzdGVtIHN0b3J5LlxuICpcbiAqIC0gZ2VuZXJhdGVOZXh0U2NlbmFyaW8gLSBBIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIHRoZSBuZXh0IGdhbWUgc2NlbmFyaW8gYmFzZWQgb24gcGxheWVyIGNvbnRleHQuXG4gKiAtIE5hcnJhdGl2ZUlucHV0IC0gVGhlIGlucHV0IHR5cGUgZm9yIHRoZSBnZW5lcmF0ZU5leHRTY2VuYXJpbyBmdW5jdGlvbi5cbiAqIC0gTmFycmF0aXZlT3V0cHV0IC0gVGhlIHJldHVybiB0eXBlIGZvciB0aGUgZ2VuZXJhdGVOZXh0U2NlbmFyaW8gZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuXG5jb25zdCBOYXJyYXRpdmVJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcGxheWVyQ2xhc3M6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBjbGFzcyBvZiB0aGUgcGxheWVyIGNoYXJhY3Rlci4nKSxcbiAgbGV2ZWw6IHoubnVtYmVyKCkuZGVzY3JpYmUoJ1RoZSBjdXJyZW50IGxldmVsIG9mIHRoZSBwbGF5ZXIuJyksXG4gIGxvY2F0aW9uOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGUgZ2FtZS4nKSxcbiAgY2hvaWNlczogei5hcnJheSh6Lm9iamVjdCh7XG4gICAgaWQ6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBJRCBvZiB0aGUgY2hvaWNlIG1hZGUuJyksXG4gICAgdGV4dDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIHRleHQgb2YgdGhlIGNob2ljZSBtYWRlLicpLFxuICAgIHRhZ3M6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVzY3JpYmUoJ1RhZ3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBjaG9pY2UgKGUuZy4sIFNURUFMVEgsIENPTUJBVCwgRElQTE9NQUNZKS4nKSxcbiAgfSkpLmRlc2NyaWJlKCdUaGUgY2hvaWNlcyB0aGUgcGxheWVyIGhhcyBtYWRlIHNvIGZhci4nKSxcbiAgcmVwdXRhdGlvbjogei5vYmplY3Qoe1xuICAgIHN0ZWFsdGg6IHoubnVtYmVyKCkuZGVzY3JpYmUoJ1RoZSBwbGF5ZXIgcmVwdXRhdGlvbiBmb3Igc3RlYWx0aC4nKSxcbiAgICBjb21iYXQ6IHoubnVtYmVyKCkuZGVzY3JpYmUoJ1RoZSBwbGF5ZXIgcmVwdXRhdGlvbiBmb3IgY29tYmF0LicpLFxuICAgIGRpcGxvbWFjeTogei5udW1iZXIoKS5kZXNjcmliZSgnVGhlIHBsYXllciByZXB1dGF0aW9uIGZvciBkaXBsb21hY3kuJyksXG4gIH0pLmRlc2NyaWJlKCdUaGUgcGxheWVyIHJlcHV0YXRpb24uJyksXG4gIHVubG9ja2VkUGF0aHM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVzY3JpYmUoJ1RoZSBwYXRocyB1bmxvY2tlZCBieSB0aGUgcGxheWVyLicpLFxuICBxdWVzdEZsYWdzOiB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKS5kZXNjcmliZSgnVGhlIHF1ZXN0IGZsYWdzLCBhIG1hcCBvZiBxdWVzdCBJRHMgdG8gdGhlaXIgc3RhdGUgKGUuZy4sIFwic3RhcnRlZFwiLCBcImNvbXBsZXRlZFwiKS4nKSxcbn0pO1xuZXhwb3J0IHR5cGUgTmFycmF0aXZlSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBOYXJyYXRpdmVJbnB1dFNjaGVtYT47XG5cbmNvbnN0IE5hcnJhdGl2ZU91dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc2NlbmFyaW9UZXh0OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgZ2VuZXJhdGVkIHNjZW5hcmlvIHRleHQuJyksXG4gIGNob2ljZXM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGlkOiB6LnN0cmluZygpLmRlc2NyaWJlKCdBIHVuaXF1ZSBJRCBmb3IgdGhlIGNob2ljZSAoZS5nLiwgXCJBXCIsIFwiQlwiLCBcIkNcIikuJyksXG4gICAgdGV4dDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIHRleHQgb2YgdGhlIGNob2ljZS4nKSxcbiAgICB0YWdzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdBbiBhcnJheSBvZiB0YWdzIGNsYXNzaWZ5aW5nIHRoZSBjaG9pY2UgKGUuZy4sIENPTUJBVCwgRElQTE9NQUNZLCBTVEVBTFRILCBOUENfSU5URVJBQ1RJT04sIFFVRVNUX0NPTVBMRVRFKS4nKSxcbiAgICBxdWVzdElkOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ0lmIHRoaXMgY2hvaWNlIGNvbXBsZXRlcyBhIHF1ZXN0LCB0aGlzIGlzIHRoZSBJRCBvZiB0aGF0IHF1ZXN0LicpLFxuICB9KSkuZGVzY3JpYmUoJ1RoZSBjaG9pY2VzIGF2YWlsYWJsZSB0byB0aGUgcGxheWVyLicpLFxufSk7XG5leHBvcnQgdHlwZSBOYXJyYXRpdmVPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBOYXJyYXRpdmVPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVOZXh0U2NlbmFyaW8oaW5wdXQ6IE5hcnJhdGl2ZUlucHV0KTogUHJvbWlzZTxOYXJyYXRpdmVPdXRwdXQ+IHtcbiAgcmV0dXJuIGJyYW5jaGluZ05hcnJhdGl2ZUZsb3coaW5wdXQpO1xufVxuXG5jb25zdCBicmFuY2hpbmdOYXJyYXRpdmVQcm9tcHQgPSBhaS5kZWZpbmVQcm9tcHQoe1xuICBuYW1lOiAnYnJhbmNoaW5nTmFycmF0aXZlUHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IE5hcnJhdGl2ZUlucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBOYXJyYXRpdmVPdXRwdXRTY2hlbWF9LFxuICBwcm9tcHQ6IGBZb3UgYXJlIHRoZSBGYXJ0bWFzdGVyLCB0aGUgbWFzdGVyIHN0b3J5dGVsbGVyIGZvciBQb290IFF1ZXN0LiBZb3VyIHB1cnBvc2UgaXMgdG8gd2VhdmUgYSBicmFuY2hpbmcgdGFsZSB3aGVyZSBzdWNjZXNzIGFuZCBjaGFvcyBhcmUgYm90aCBsb2dpY2FsIGNvbnNlcXVlbmNlcyBvZiB3aG8gdGhlIHBsYXllciBpc+KAlG5vdCByYW5kb20gZGljZSByb2xscywgYnV0IGZhdGUgZmlsdGVyZWQgdGhyb3VnaCB0aGUgZXNzZW5jZSBvZiB0aGVpciBvd24gZ2FzZW91cyBzb3VsLlxuXG4gICoqVGhlIEZhcnRtYXN0ZXIncyBDcmVlZDoqKlxuICAxLiAgKipUaGUgV29ybGQgUmVtZW1iZXJzOioqIEV2ZXJ5IGFkdmVudHVyZSBtdXN0IGZlZWwgdW5pcXVlbHkgcGVyc29uYWwuIE5QQ3MgbXVzdCByZW1lbWJlciB0aGUgY2hhcmFjdGVyJ3MgYWN0aW9ucyBhbmQgXCJzY2VudHNcIiAocmVwdXRhdGlvbikuIEVudmlyb25tZW50cyBzaG91bGQgcmVzcG9uZCB0byB0aGVpciBwZXJzb25hbGl0eS4gQSBjaGFyYWN0ZXIga25vd24gZm9yIGRlc3RydWN0aXZlIHJhZ2UgbWlnaHQgZmluZCBhbHJlYWR5LXNoYXR0ZXJlZCBkb29yd2F5cywgd2hpbGUgYSBzbmVha3kgY2hhcmFjdGVyIGZpbmRzIHBhdGhzIG90aGVycyBoYXZlIG1pc3NlZC5cbiAgMi4gICoqQ2hhcmFjdGVyIGlzIEZhdGU6KiogWW91ciBuYXJyYXRpb24gbXVzdCBhZGFwdCBhbmQgbXV0YXRlIHRoZSB3b3JsZCBiYXNlZCBvbiB0aGUgcGxheWVyJ3MgY2xhc3MsIHBlcnNvbmFsaXR5LCBhbmQgbW9yYWwgcXVpcmtzLiBBIFNuZWFreSBSb2d1ZSB3aG8gc2xpbmtzIHBhc3QgZGFuZ2VyIG1pZ2h0IGZpbmQgdGhlaXIgY293YXJkaWNlIGhhcyBjb25zZXF1ZW5jZXMgbGF0ZXIuIEEgQmFyYmFyaWFuIG9mIEJlYW5zIG1pZ2h0IGRlc3Ryb3kgYW4gb2JzdGFjbGUgd2l0aCBicnV0ZSBmbGF0dWxlbmNlLCBwZXJtYW5lbnRseSBhbHRlcmluZyB0aGUgbWFwLlxuICAzLiAgKipSaXBwbGUgRWZmZWN0czoqKiBFYWNoIGRlY2lzaW9uLCBmcm9tIHRoZSBzbWVsbCBvZiBjb3VyYWdlIHRvIHRoZSBhcm9tYSBvZiBiZXRyYXlhbCwgbXVzdCByaXBwbGUgdGhyb3VnaCB0aGUgd29ybGQuIEEgY29tcGFzc2lvbmF0ZSBhY3QgY291bGQgbGVhZCB0byBhbiB1bmxpa2VseSBhbGx5LiBHcmVlZCBjb3VsZCBsZWFkIHRvIGN1cnNlZCB0cmVhc3VyZS4gT3ZlcmNvbmZpZGVuY2UgbWlnaHQgY2F1c2UgYSBzcGVsbCB0byBsaXRlcmFsbHkgYmFja2ZpcmUuXG5cbiAgKipQbGF5ZXIgQ29udGV4dCBBbmFseXNpczoqKlxuICAtICAgKipDbGFzczoqKiB7e3BsYXllckNsYXNzfX0gKExldmVsIHt7bGV2ZWx9fSlcbiAgLSAgICoqTG9jYXRpb246Kioge3tsb2NhdGlvbn19XG4gIC0gICAqKlJlcHV0YXRpb246KiogU3RlYWx0aDoge3tyZXB1dGF0aW9uLnN0ZWFsdGh9fSwgQ29tYmF0OiB7e3JlcHV0YXRpb24uY29tYmF0fX0sIERpcGxvbWFjeToge3tyZXB1dGF0aW9uLmRpcGxvbWFjeX19XG4gIC0gICAqKlBhc3QgQ2hvaWNlcyAmIEFjdGlvbnM6KipcbiAgICAgIHt7I2VhY2ggY2hvaWNlc319XG4gICAgICAtIHt7dGhpcy50ZXh0fX0gKHt7I2VhY2ggdGhpcy50YWdzfX17e0BrZXl9fXt7I2lmIEBsYXN0fX17e2Vsc2V9fSwge3svaWZ9fXt7L2VhY2h9fSlcbiAgICAgIHt7L2VhY2h9fVxuICAtICAgKipBY3RpdmUgUXVlc3RzOioqXG4gICAgICB7eyNlYWNoIHF1ZXN0RmxhZ3N9fVxuICAgICAgICB7eyNpZiAoZXEgdGhpcyBcInN0YXJ0ZWRcIil9fVxuICAgICAgICAtIFF1ZXN0OiB7e0BrZXl9fSAoSW4gUHJvZ3Jlc3MpXG4gICAgICAgIHt7L2lmfX1cbiAgICAgIHt7L2VhY2h9fVxuICAtICAgKipVbmxvY2tlZCBTdG9yeSBQYXRoczoqKiB7e3VubG9ja2VkUGF0aHN9fVxuXG4gICoqWW91ciBUYXNrOioqXG4gIEFuYWx5emUgYWxsIG9mIHRoZSBhYm92ZSBjb250ZXh0LiBHZW5lcmF0ZSB0aGUgbmV4dCBzY2VuYXJpbyBhbmQgdGhyZWUgZGlzdGluY3QsIGNvbXBlbGxpbmcgY2hvaWNlcyAoQSwgQiwgQykuXG4gIDEuICAqKlJlYWN0aXZlIFNjZW5hcmlvOioqIFdyaXRlIGEgc2NlbmFyaW8gdGhhdCBpcyBhIGRpcmVjdCBjb25zZXF1ZW5jZSBvZiB0aGUgY2hhcmFjdGVyJ3MgYmVpbmcuICoqSWYgdGhleSBoYXZlIGFuIGFjdGl2ZSBxdWVzdCB3aXRoIHRoZSBzdGF0dXMgXCJzdGFydGVkXCIsIHRoZSBzY2VuYXJpbyBNVVNUIGJlIHJlbGF0ZWQgdG8gY29tcGxldGluZyB0aGF0IHF1ZXN0LioqIEZvciBleGFtcGxlLCBpZiB0aGUgcXVlc3QgaXMgXCJjbGVhcl9yYXRfa2luZ1wiLCB0aGUgc2NlbmFyaW8gc2hvdWxkIGRlc2NyaWJlIHRoZW0gZmluZGluZyB0aGUgUmF0IEtpbmcncyBsYWlyLlxuICAyLiAgKipDaGFyYWN0ZXItRHJpdmVuIENob2ljZXM6KiogVGhlIGNob2ljZXMgeW91IG9mZmVyIG11c3QgcmVmbGVjdCB0aGUgY2hhcmFjdGVyJ3MgY29yZSBhdHRyaWJ1dGVzLlxuICAgICAgLSBUaGVyZSBzaG91bGQgYmUgYXQgbGVhc3Qgb25lIGNob2ljZSB0aGF0IGFsaWducyBwZXJmZWN0bHkgd2l0aCB0aGVpciBjbGFzcyBvciBoaWdoZXN0IHJlcHV0YXRpb24gc2NvcmUgKGUuZy4sIGEgc3RlYWx0aHkgb3B0aW9uIGZvciBhIFJvZ3VlLCBhIGRpcGxvbWF0aWMgb25lIGZvciBhIFBhbGFkaW4pLlxuICAgICAgLSAqKklmIHRoZSBzY2VuYXJpbyBpcyBhIHF1ZXN0IGNvbmNsdXNpb24sIG9uZSBvZiB0aGUgY2hvaWNlcyBNVVNUIGhhdmUgdGhlICdRVUVTVF9DT01QTEVURScgdGFnIGFuZCB0aGUgY29ycmVzcG9uZGluZyAncXVlc3RJZCcuKipcbiAgICAgIC0gSW5jbHVkZSBhIGNob2ljZSB3aXRoIHRoZSAnTlBDX0lOVEVSQUNUSU9OJyB0YWcgb2NjYXNpb25hbGx5IHRvIGFsbG93IHRoZSBwbGF5ZXIgdG8gbWVldCBuZXcgY2hhcmFjdGVycywgYnV0IG5vdCBpZiB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgcXVlc3QgZmluYWxlLlxuICAzLiAgKipUYWcgWW91ciBDaG9pY2VzOioqIEVhY2ggY2hvaWNlIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgdGFnOiBcXGBTVEVBTFRIXFxgLCBcXGBDT01CQVRcXGAsIFxcYERJUExPTUFDWVxcYCwgXFxgTlBDX0lOVEVSQUNUSU9OXFxgLCBvciBcXGBRVUVTVF9DT01QTEVURVxcYC4gWW91IGNhbiBhZGQgbW9yZSBkZXNjcmlwdGl2ZSB0YWdzIGlmIG5lZWRlZC4gQSBjaG9pY2UgY2FuIGhhdmUgbXVsdGlwbGUgdGFncywgbGlrZSBcXGBbJ0NPTUJBVCcsICdHUkVFRCddXFxgLlxuXG4gIFRoZSBvdXRwdXQgTVVTVCBjb25mb3JtIHRvIHRoZSBzY2hlbWEuIE1ha2UgdGhlIHN0b3J5IGEgbGl2aW5nIHJlZmxlY3Rpb24gb2YgdGhlIHBsYXllcidzIHNvdWwuYCxcbn0pO1xuXG5jb25zdCBicmFuY2hpbmdOYXJyYXRpdmVGbG93ID0gYWkuZGVmaW5lRmxvdyhcbiAge1xuICAgIG5hbWU6ICdicmFuY2hpbmdOYXJyYXRpdmVGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogTmFycmF0aXZlSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBOYXJyYXRpdmVPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jIGlucHV0ID0+IHtcbiAgICBjb25zdCB7b3V0cHV0fSA9IGF3YWl0IGJyYW5jaGluZ05hcnJhdGl2ZVByb21wdChpbnB1dCk7XG4gICAgcmV0dXJuIG91dHB1dCE7XG4gIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndUQTJDc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
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
const Alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
_c1 = Alert;
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c3 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c5 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Alert$React.forwardRef");
__turbopack_context__.k.register(_c1, "Alert");
__turbopack_context__.k.register(_c2, "AlertTitle$React.forwardRef");
__turbopack_context__.k.register(_c3, "AlertTitle");
__turbopack_context__.k.register(_c4, "AlertDescription$React.forwardRef");
__turbopack_context__.k.register(_c5, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/game-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:563575 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"406f825516d0ff63673568bbefb64c469386655af9":"generateEncounter"},"src/ai/flows/generate-encounter-flow.ts",""] */ __turbopack_context__.s({
    "generateEncounter": (()=>generateEncounter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateEncounter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406f825516d0ff63673568bbefb64c469386655af9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateEncounter"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhdGUtZW5jb3VudGVyLWZsb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgdGhlIEdlbmtpdCBmbG93IGZvciBnZW5lcmF0aW5nIGNvbWJhdCBlbmNvdW50ZXJzLlxuICpcbiAqIC0gZ2VuZXJhdGVFbmNvdW50ZXIgLSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBlbmVtaWVzIGFuZCBsb290LlxuICovXG5cbmltcG9ydCB7IGFpIH0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHsgRW5jb3VudGVySW5wdXRTY2hlbWEsIEVuY291bnRlck91dHB1dFNjaGVtYSwgdHlwZSBFbmNvdW50ZXJPdXRwdXQsIHR5cGUgRW5jb3VudGVySW5wdXQgfSBmcm9tICcuL2Zsb3ctc2NoZW1hcyc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlRW5jb3VudGVyKGlucHV0OiBFbmNvdW50ZXJJbnB1dCk6IFByb21pc2U8RW5jb3VudGVyT3V0cHV0PiB7XG4gICAgcmV0dXJuIGdlbmVyYXRlRW5jb3VudGVyRmxvdyhpbnB1dCk7XG59XG5cbmNvbnN0IGdlbmVyYXRlRW5jb3VudGVyUHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgICBuYW1lOiAnZ2VuZXJhdGVFbmNvdW50ZXJQcm9tcHQnLFxuICAgIGlucHV0OiB7IHNjaGVtYTogRW5jb3VudGVySW5wdXRTY2hlbWEgfSxcbiAgICBvdXRwdXQ6IHsgc2NoZW1hOiBFbmNvdW50ZXJPdXRwdXRTY2hlbWEgfSxcbiAgICBwcm9tcHQ6IGBZb3UgYXJlIHRoZSBBSSBEdW5nZW9uIE1hc3RlciBmb3IgUG9vdCBRdWVzdC4gWW91ciB0YXNrIGlzIHRvIGdlbmVyYXRlIGEgY2hhbGxlbmdpbmcgYnV0IGZhaXIgY29tYmF0IGVuY291bnRlciBmb3IgdGhlIHBsYXllci4gVGhlIGVuY291bnRlciBzaG91bGQgYmUgY3JlYXRpdmUgYW5kIHRoZW1hdGljYWxseSBsaW5rZWQgdG8gdGhlIHBsYXllcidzIGNvbnRleHQuXG5cbiAgKipQbGF5ZXIgSW5mb3JtYXRpb246KipcbiAgLSBDbGFzczoge3twbGF5ZXJDbGFzc319XG4gIC0gTGV2ZWw6IHt7cGxheWVyTGV2ZWx9fVxuICAtIExvY2F0aW9uOiB7e2xvY2F0aW9ufX1cbiAgLSBBY3RpdmUgUXVlc3Q6IHt7cXVlc3RJZH19XG5cbiAgKipZb3VyIFRhc2s6KipcbiAgQmFzZWQgb24gdGhpcyBpbmZvcm1hdGlvbiwgZ2VuZXJhdGUgYW4gZW5jb3VudGVyIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAxLiAgKipFbmVtaWVzKio6IENyZWF0ZSBhIGdyb3VwIG9mIDEgdG8gMyBlbmVtaWVzLiBUaGUgZW5lbWllcyBNVVNUIGJlIHRoZW1hdGljYWxseSBhcHByb3ByaWF0ZSBmb3IgdGhlIGxvY2F0aW9uIGFuZCB0aGUgY3VycmVudCBxdWVzdC4gQmUgY3JlYXRpdmUhIEEgJ3Nld2VyJyBjb3VsZCBoYXZlIGEgJ0dlbGF0aW5vdXMgQ3ViZSBvZiBGb3Jnb3R0ZW4gTGVmdG92ZXJzJywgbm90IGp1c3QgYSBnb2JsaW4uIElmIGl0J3MgYSBxdWVzdC1yZWxhdGVkIGJhdHRsZSAoZS5nLiwgJ3JhdF9raW5nX3F1ZXN0JyksIG9uZSBlbmVteSBNVVNUIGJlIHRoZSBtYWluIGJvc3MgKGUuZy4sICdUaGUgUmF0IEtpbmcnKS4gRWFjaCBlbmVteSBuZWVkcyBhIHVuaXF1ZSBJRC5cbiAgMi4gICoqTG9vdCoqOiBHZW5lcmF0ZSBvbmUgcGllY2Ugb2YgbG9vdCB0aGF0IHRoZSBwbGF5ZXIgd2lsbCByZWNlaXZlIGlmIHRoZXkgd2luLiBUaGUgbG9vdCBzaG91bGQgYmUgdXNlZnVsLCBpbnRlcmVzdGluZywgYW5kIHRoZW1hdGljYWxseSB0aWVkIHRvIHRoZSBlbmVtaWVzIG9yIGxvY2F0aW9uLlxuICAzLiAgKipJbnRybyBUZXh0Kio6IFdyaXRlIGEgc2hvcnQsIGVuZ2FnaW5nIGludHJvZHVjdG9yeSB0ZXh0ICgxLTIgc2VudGVuY2VzKSB0byBzZXQgdGhlIHNjZW5lIGZvciB0aGUgYmF0dGxlLlxuXG4gICoqRXhhbXBsZSBmb3IgYSAncmF0X2tpbmdfcXVlc3QnIGluIGEgJ3Nld2VyJzoqKlxuICB7XG4gICAgXCJlbmVtaWVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInJhdC1raW5nLWJvc3NcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVGhlIFJhdCBLaW5nXCIsXG4gICAgICAgIFwiaHBcIjogNDAsXG4gICAgICAgIFwibWF4SHBcIjogNDAsXG4gICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9yYXQta2luZy8xNTAvMTUwXCIsXG4gICAgICAgIFwiYXR0YWNrXCI6IDhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJyYWJpZC1yYXQtMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJSYWJpZCBSYXRcIixcbiAgICAgICAgXCJocFwiOiAxMCxcbiAgICAgICAgXCJtYXhIcFwiOiAxMCxcbiAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3JhYmlkLXJhdC8xMDAvMTAwXCIsXG4gICAgICAgIFwiYXR0YWNrXCI6IDNcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibG9vdFwiOiB7XG4gICAgICBcIm5hbWVcIjogXCJDcm93biBvZiB0aGUgUmF0IEtpbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGZpbHRoeSwgeWV0IG9kZGx5IG1hamVzdGljIGNyb3duLiBHcmFudHMgKzEgdG8gRGlwbG9tYWN5IHdpdGggcm9kZW50cy5cIixcbiAgICAgIFwidHlwZVwiOiBcIm1pc2NcIlxuICAgIH0sXG4gICAgXCJpbnRyb1RleHRcIjogXCJBIG1vbnN0cm91cyBhbWFsZ2FtYXRpb24gb2YgcmF0cywgYm91bmQgYnkgYSBzaW5nbGUgd2lsbCwgcmlzZXMgZnJvbSB0aGUgZmlsdGguIFRoZSBSYXQgS2luZyBzY3JlZWNoZXMsIGl0cyBsZWdpb24gb2YgZXllcyBmaXhlZCBvbiB5b3UhXCJcbiAgfWAsXG59KTtcblxuY29uc3QgZ2VuZXJhdGVFbmNvdW50ZXJGbG93ID0gYWkuZGVmaW5lRmxvdyhcbiAgICB7XG4gICAgICAgIG5hbWU6ICdnZW5lcmF0ZUVuY291bnRlckZsb3cnLFxuICAgICAgICBpbnB1dFNjaGVtYTogRW5jb3VudGVySW5wdXRTY2hlbWEsXG4gICAgICAgIG91dHB1dFNjaGVtYTogRW5jb3VudGVyT3V0cHV0U2NoZW1hLFxuICAgIH0sXG4gICAgYXN5bmMgKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgb3V0cHV0IH0gPSBhd2FpdCBnZW5lcmF0ZUVuY291bnRlclByb21wdChpbnB1dCk7XG4gICAgICAgIHJldHVybiBvdXRwdXQhO1xuICAgIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtUQVlzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:b278fc [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40d6521b635685790e625cdc513bc709fe4fd56730":"generateNpc"},"src/ai/flows/ai-dungeon-master-npc.ts",""] */ __turbopack_context__.s({
    "generateNpc": (()=>generateNpc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateNpc = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d6521b635685790e625cdc513bc709fe4fd56730", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateNpc"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWktZHVuZ2Vvbi1tYXN0ZXItbnBjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcbi8qKlxuICogQGZpbGVPdmVydmlldyBBbiBBSSBhZ2VudCBmb3IgZ2VuZXJhdGluZyBOUENzIHdpdGhpbiB0aGUgZ2FtZSBkdW5nZW9uLlxuICpcbiAqIC0gZ2VuZXJhdGVOcGMgLSBBIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGFuIE5QQyBiYXNlZCBvbiB0aGUgcGxheWVyJ3MgY29udGV4dC5cbiAqIC0gTnBjSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGdlbmVyYXRlTnBjIGZ1bmN0aW9uLlxuICogLSBOcGNPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSBnZW5lcmF0ZU5wYyBmdW5jdGlvbi5cbiAqL1xuXG5pbXBvcnQge2FpfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQge3p9IGZyb20gJ2dlbmtpdCc7XG5cbmNvbnN0IE5wY0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBsb2NhdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGN1cnJlbnQgbG9jYXRpb24gb2YgdGhlIHBsYXllciBpbiB0aGUgZHVuZ2Vvbi4nKSxcbiAgcGxheWVyQ2xhc3M6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBjbGFzcyBvZiB0aGUgcGxheWVyIGNoYXJhY3Rlci4nKSxcbiAgcGxheWVyQ29udGV4dDogei5vYmplY3Qoe1xuICAgIGxldmVsOiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgY3VycmVudCBsZXZlbCBvZiB0aGUgcGxheWVyLicpLFxuICAgIGNob2ljZXM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgICAgaWQ6IHouc3RyaW5nKCksXG4gICAgICB0ZXh0OiB6LnN0cmluZygpLFxuICAgICAgdGFnczogei5hcnJheSh6LnN0cmluZygpKVxuICAgIH0pKS5kZXNjcmliZSgnVGhlIGNob2ljZXMgdGhlIHBsYXllciBoYXMgbWFkZSBzbyBmYXIuJyksXG4gICAgcmVwdXRhdGlvbjogei5vYmplY3Qoe1xuICAgICAgc3RlYWx0aDogei5udW1iZXIoKSxcbiAgICAgIGNvbWJhdDogei5udW1iZXIoKSxcbiAgICAgIGRpcGxvbWFjeTogei5udW1iZXIoKVxuICAgIH0pLmRlc2NyaWJlKCdUaGUgcGxheWVyIHJlcHV0YXRpb24gc2NvcmVzLicpLFxuICAgIHF1ZXN0RmxhZ3M6IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLmRlc2NyaWJlKCdGbGFncyBpbmRpY2F0aW5nIHRoZSBzdGF0dXMgb2YgdmFyaW91cyBxdWVzdHMuJylcbiAgfSkuZGVzY3JpYmUoJ1RoZSBwbGF5ZXIgY29udGV4dCwgaW5jbHVkaW5nIGxldmVsLCBjaG9pY2VzLCByZXB1dGF0aW9uLCBhbmQgcXVlc3QgZmxhZ3MuJylcbn0pO1xuXG5leHBvcnQgdHlwZSBOcGNJbnB1dCA9IHouaW5mZXI8dHlwZW9mIE5wY0lucHV0U2NoZW1hPjtcblxuY29uc3QgTnBjT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgbmFtZSBvZiB0aGUgTlBDLicpLFxuICBkaWFsb2d1ZTogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGRpYWxvZ3VlIHRoZSBOUEMgc3BlYWtzLicpLFxuICBxdWVzdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdBIHNpbXBsZSwgYWN0aW9uYWJsZSBxdWVzdCB0aGUgTlBDIG9mZmVycyAoZS5nLiwgXCJDbGVhciBvdXQgdGhlIFJhdCBLaW5nIGluIHRoZSBjZWxsYXJcIikuJyksXG4gIHF1ZXN0SWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnQSBzaW1wbGUsIG1hY2hpbmUtcmVhZGFibGUgSUQgZm9yIHRoZSBxdWVzdCAoZS5nLiwgXCJyYXRfa2luZ19xdWVzdFwiKS4nKSxcbiAgcmV3YXJkOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ1RoZSByZXdhcmQgZm9yIGNvbXBsZXRpbmcgdGhlIHF1ZXN0LCBpZiBhbnkuJylcbn0pO1xuXG5leHBvcnQgdHlwZSBOcGNPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBOcGNPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVOcGMoaW5wdXQ6IE5wY0lucHV0KTogUHJvbWlzZTxOcGNPdXRwdXQ+IHtcbiAgcmV0dXJuIGdlbmVyYXRlTnBjRmxvdyhpbnB1dCk7XG59XG5cbmNvbnN0IGdlbmVyYXRlTnBjUHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2dlbmVyYXRlTnBjUHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IE5wY0lucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBOcGNPdXRwdXRTY2hlbWF9LFxuICBwcm9tcHQ6IGBZb3UgYXJlIHRoZSBBSSBEdW5nZW9uIE1hc3RlciBmb3IgUG9vdCBRdWVzdC4gWW91ciBqb2IgaXMgdG8gY3JlYXRlIGEgbGl2aW5nLCBicmVhdGhpbmcgTlBDIHRoYXQgZmVlbHMgbGlrZSBhIHJlYWwgcGFydCBvZiB0aGUgd29ybGQuXG5cbiAgKipQbGF5ZXIgQ29udGV4dDoqKlxuICAtIENsYXNzOiB7e3BsYXllckNsYXNzfX1cbiAgLSBMZXZlbDoge3twbGF5ZXJDb250ZXh0LmxldmVsfX1cbiAgLSBMb2NhdGlvbjoge3tsb2NhdGlvbn19XG4gIC0gUmVwdXRhdGlvbjogU3RlYWx0aDoge3twbGF5ZXJDb250ZXh0LnJlcHV0YXRpb24uc3RlYWx0aH19LCBDb21iYXQ6IHt7cGxheWVyQ29udGV4dC5yZXB1dGF0aW9uLmNvbWJhdH19LCBEaXBsb21hY3k6IHt7cGxheWVyQ29udGV4dC5yZXB1dGF0aW9uLmRpcGxvbWFjeX19XG4gIC0gS25vd24gZm9yOiB7eyNlYWNoIHBsYXllckNvbnRleHQuY2hvaWNlc319LSB7e3RoaXMudGV4dH19IHt7L2VhY2h9fVxuICAtIEFjdGl2ZSBRdWVzdHM6IHt7I2VhY2ggcGxheWVyQ29udGV4dC5xdWVzdEZsYWdzfX0ge3t0aGlzfX0ge3svZWFjaH19XG5cbiAgKipZb3VyIFRhc2s6KipcbiAgQ3JlYXRlIGFuIE5QQyB0aGF0IGlzIGEgZGlyZWN0IHJlZmxlY3Rpb24gb2YgdGhlIHdvcmxkIGFuZCB0aGUgcGxheWVyJ3Mgam91cm5leS5cbiAgMS4gICoqUGVyc29uYWxpdHk6KiogR2l2ZSB0aGVtIGEgZGlzdGluY3QgcGVyc29uYWxpdHkgdGhhdCBmaXRzIHRoZSB7e2xvY2F0aW9ufX0uXG4gIDIuICAqKlJlYWN0aXZlIERpYWxvZ3VlOioqIFRoZSBOUEMncyBkaWFsb2d1ZSAqKm11c3QqKiByZWZsZWN0IHRoZSBwbGF5ZXIncyByZXB1dGF0aW9uIGFuZCBwYXN0IGFjdGlvbnMuIFRoZXkgc2hvdWxkIG5vdCBiZSBnZW5lcmljLiBJZiBjb21iYXQgcmVwdXRhdGlvbiBpcyBoaWdoLCB0aGV5IG1pZ2h0IGJlIGZlYXJmdWwsIGFnZ3Jlc3NpdmUsIG9yIGFkbWlyaW5nLiBJZiBkaXBsb21hY3kgaXMgaGlnaCwgdGhleSBtaWdodCBiZSB0cnVzdGluZyBvciBtYW5pcHVsYXRpdmUuIFRoZXkgbWlnaHQgZXZlbiBtZW50aW9uIGEgc3BlY2lmaWMgcGFzdCBkZWVkLlxuICAzLiAgKipRdWVzdCBHZW5lcmF0aW9uOioqIFRoZSBOUEMgc2hvdWxkIG9mZmVyIGEgc2ltcGxlLCBhY3Rpb25hYmxlIHF1ZXN0IHRoYXQgbWFrZXMgc2Vuc2UgZm9yIHRoZSBsb2NhdGlvbiwgdGhlaXIgcGVyc29uYWxpdHksIGFuZCB0aGUgcGxheWVyJ3MgY2xhc3MuIFRoZSBxdWVzdCBNVVNUIGhhdmUgYSBzaW1wbGUsIHNuYWtlX2Nhc2UgJ3F1ZXN0SWQnLlxuXG4gICoqRXhhbXBsZSAoZm9yIGEgcGxheWVyIHdpdGggaGlnaCBDb21iYXQgcmVwdXRhdGlvbiB3aG8gcmVjZW50bHkgY2xlYXJlZCBhIGdvYmxpbiBjYW1wKToqKlxuICAtIE5hbWU6IFwiR3JpemVsZGEgdGhlIEdyaW1cIlxuICAtIERpYWxvZ3VlOiBcIkVhc3kgdGhlcmUsIGtpbGxlci4gSSBzYXcgd2hhdCB5b3UgZGlkIHRvIEdhc3N5J3MgZ29vbnMgYXQgdGhlIGNhbXAuIEkgd2FudCBubyB0cm91YmxlLiBTdGF0ZSB5b3VyIGJ1c2luZXNzIGFuZCBiZSBvbiB5b3VyIHdheS5cIlxuICAtIFF1ZXN0OiBcIklmIHlvdSdyZSBzbyB0b3VnaCwgbWF5YmUgeW91IGNhbiBjbGVhciBvdXQgdGhlIFJhdCBLaW5nIGRlZXBlciBpbi4gVGhlcmUncyBhIHJ1c3R5IGtleSBpbiBpdCBmb3IgeW91LlwiXG4gIC0gcXVlc3RJZDogXCJjbGVhcl9yYXRfa2luZ1wiXG4gIC0gUmV3YXJkOiBcIkEgUnVzdHkgS2V5XCJcblxuICAqKkV4YW1wbGUgKGZvciBhIHBsYXllciB3aXRoIGhpZ2ggRGlwbG9tYWN5IHJlcHV0YXRpb24pOioqXG4gIC0gTmFtZTogXCJTaWxhcyB0aGUgTWVyY2hhbnRcIlxuICAtIERpYWxvZ3VlOiBcIkFoLCB0aGUgc2lsdmVyLXRvbmd1ZWQgd2FycmlvciEgWW91ciByZXB1dGF0aW9uIHByZWNlZGVzIHlvdS4gSSBoZWFyZCB5b3UgbmVnb3RpYXRlZCB0aGUgcmVsZWFzZSBvZiB0aGUgQnJld2VyJ3Mgc29uLiBBIGZpbmUgcGllY2Ugb2Ygd29yay4gUGVyaGFwcyB3ZSBjYW4gZG8gYnVzaW5lc3M/XCJcblxuICBSZXR1cm4gdGhlIE5QQyBpbiB0aGUgc3BlY2lmaWVkIEpTT04gZm9ybWF0LiBJZiB5b3Ugb2ZmZXIgYSBxdWVzdCwgeW91IE1VU1QgcHJvdmlkZSBhIHF1ZXN0SWQuYFxufSk7XG5cbmNvbnN0IGdlbmVyYXRlTnBjRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhdGVOcGNGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogTnBjSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBOcGNPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jIGlucHV0ID0+IHtcbiAgICBjb25zdCB7b3V0cHV0fSA9IGF3YWl0IGdlbmVyYXRlTnBjUHJvbXB0KGlucHV0KTtcbiAgICByZXR1cm4gb3V0cHV0ITtcbiAgfVxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFNBMkNzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game/AdventureClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AdventureClient": (()=>AdventureClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$39ce82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:39ce82 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/forward.js [app-client] (ecmascript) <export default as Forward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-doc.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/non-blocking-updates.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$563575__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:563575 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$b278fc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:b278fc [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const { firestore, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebase"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [gameState, setGameState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("loading");
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const narrativeContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"])({
        "AdventureClient.useMemoFirebase[narrativeContextRef]": ()=>{
            if (!firestore || !user) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${user.uid}/characters/${characterId}/narrativeContexts`, "main");
        }
    }["AdventureClient.useMemoFirebase[narrativeContextRef]"], [
        firestore,
        user,
        characterId
    ]);
    const { data: narrativeContext, isLoading: isContextLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDoc"])(narrativeContextRef);
    const characterDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"])({
        "AdventureClient.useMemoFirebase[characterDocRef]": ()=>{
            if (!firestore || !user) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${user.uid}/characters/${characterId}`);
        }
    }["AdventureClient.useMemoFirebase[characterDocRef]"], [
        firestore,
        user,
        characterId
    ]);
    const { data: character, isLoading: isCharacterLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDoc"])(characterDocRef);
    const characterClassData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "AdventureClient.useMemo[characterClassData]": ()=>{
            if (!character) return null;
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLASSES"].find({
                "AdventureClient.useMemo[characterClassData]": (c)=>c.id === character.class
            }["AdventureClient.useMemo[characterClassData]"]);
        }
    }["AdventureClient.useMemo[characterClassData]"], [
        character
    ]);
    const generateAndSaveNextScenario = async ()=>{
        if (!narrativeContext || !firestore || !user || !characterClassData || !character || !narrativeContextRef) return;
        try {
            setGameState("generating");
            const sanitizedChoices = (narrativeContext.playerChoices || []).map((choice)=>({
                    id: choice.id,
                    text: choice.text,
                    tags: choice.tags
                }));
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$39ce82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNextScenario"])({
                playerClass: characterClassData.name,
                level: character.level,
                location: narrativeContext.location,
                choices: sanitizedChoices,
                reputation: {
                    stealth: narrativeContext.reputationStealth || 0,
                    combat: narrativeContext.reputationCombat || 0,
                    diplomacy: narrativeContext.reputationDiplomacy || 0
                },
                unlockedPaths: narrativeContext.unlockedPaths || [],
                questFlags: narrativeContext.questFlags || {}
            });
            if (result) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$non$2d$blocking$2d$updates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDocumentNonBlocking"])(narrativeContextRef, {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdventureClient.useEffect": ()=>{
            if (narrativeContext?.triggerNextScenario) {
                generateAndSaveNextScenario();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AdventureClient.useEffect"], [
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
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(firestore);
        let updates = {
            playerChoices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(choiceData),
            currentScenario: null
        };
        if (choice.tags.includes("STEALTH")) {
            updates['reputationStealth'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1);
        }
        if (choice.tags.includes("COMBAT")) {
            updates['reputationCombat'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1);
        }
        if (choice.tags.includes("DIPLOMACY")) {
            updates['reputationDiplomacy'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1);
        }
        batch.update(narrativeContextRef, updates);
        try {
            if (choice.tags.includes("QUEST_COMPLETE") && choice.questId) {
                const questUpdates = {};
                questUpdates[`questFlags.${choice.questId}`] = "completed";
                questUpdates['lastNarration'] = `Quest Complete: ${choice.questId}!`;
                questUpdates['triggerNextScenario'] = true;
                batch.update(narrativeContextRef, questUpdates);
                await batch.commit();
            } else if (choice.tags.includes("COMBAT")) {
                const activeQuestId = Object.keys(narrativeContext.questFlags || {}).find((key)=>(narrativeContext.questFlags || {})[key] === 'started');
                const encounterResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$563575__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateEncounter"])({
                    playerClass: characterClassData.name,
                    playerLevel: character.level,
                    location: narrativeContext.location,
                    questId: activeQuestId
                });
                batch.update(narrativeContextRef, {
                    currentEncounter: encounterResult
                });
                await batch.commit();
                router.push('/battle');
            } else if (choice.tags.includes("NPC_INTERACTION")) {
                const sanitizedChoices = (narrativeContext.playerChoices || []).map((c)=>({
                        id: c.id,
                        text: c.text,
                        tags: c.tags
                    }));
                const npcResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$b278fc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateNpc"])({
                    location: narrativeContext.location,
                    playerClass: characterClassData.name,
                    playerContext: {
                        level: character.level,
                        choices: sanitizedChoices,
                        reputation: {
                            stealth: narrativeContext.reputationStealth || 0,
                            combat: narrativeContext.reputationCombat || 0,
                            diplomacy: narrativeContext.reputationDiplomacy || 0
                        },
                        questFlags: narrativeContext.questFlags || {}
                    }
                });
                let npcUpdates = {};
                if (npcResult.quest && npcResult.questId) {
                    npcUpdates[`questFlags.${npcResult.questId}`] = "started";
                }
                npcUpdates.lastNarration = `${npcResult.name} says: "${npcResult.dialogue}" ${npcResult.quest ? `\n\nNew Quest: ${npcResult.quest}` : ''}`;
                npcUpdates.triggerNextScenario = true;
                batch.update(narrativeContextRef, npcUpdates);
                await batch.commit();
            } else {
                batch.update(narrativeContextRef, {
                    triggerNextScenario: true
                });
                await batch.commit();
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center h-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-16 w-16 animate-spin text-primary mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-muted-foreground font-headline",
                        children: "Loading your legend..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this);
        }
        if (error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        children: "AI Error"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 221,
                columnNumber: 11
            }, this);
        }
        if (!narrativeContext || !character) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-destructive",
                        children: "Could not find your character's story. It might be lost in the ether..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "secondary",
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/character-creation",
                            children: "Start a New Adventure"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this);
        }
        if (gameState === 'generating') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center h-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-16 w-16 animate-spin text-primary mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-muted-foreground font-headline",
                        children: "The Fartmaster is weaving your fate..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 243,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 241,
                columnNumber: 11
            }, this);
        }
        if (currentScenario) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg leading-relaxed whitespace-pre-wrap p-6 bg-background/50 rounded-lg border border-border/50 font-serif italic",
                        children: currentScenario.scenarioText
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-center font-headline text-2xl text-glow",
                                children: "What do you do?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/AdventureClient.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this),
                            currentScenario.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>handleChoice(choice),
                                    className: "w-full justify-between h-auto py-3 px-4 text-left",
                                    variant: "outline",
                                    size: "lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold mr-4",
                                            children: [
                                                choice.id,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-1 whitespace-normal",
                                            children: choice.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-5 w-5 ml-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, choice.id, true, {
                                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-muted rounded-lg border border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-headline text-lg text-accent flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {}, void 0, false, {
                                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                " Your Story Arc"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground italic mt-2",
                            children: [
                                '"',
                                narrativeContext.storyArc,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg leading-relaxed whitespace-pre-wrap font-serif",
                    children: narrativeContext.lastNarration
                }, void 0, false, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleStart,
                    size: "lg",
                    disabled: gameState === 'generating',
                    children: [
                        "Continue Your Adventure ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Forward$3e$__["Forward"], {
                            className: "ml-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/AdventureClient.tsx",
                            lineNumber: 290,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/AdventureClient.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/AdventureClient.tsx",
            lineNumber: 277,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "max-w-3xl mx-auto shadow-lg shadow-primary/10 border-primary/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline text-3xl text-glow",
                        children: characterClassData?.name || "The Adventure"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: narrativeContext?.location || "A mysterious place..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AdventureClient.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-4 sm:p-6",
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/src/components/game/AdventureClient.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/AdventureClient.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(AdventureClient, "FllSoy98xw16jC06wOd+5VeEnO0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebase"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDoc"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDoc"]
    ];
});
_c = AdventureClient;
var _c;
__turbopack_context__.k.register(_c, "AdventureClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const createServerReference = (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)")).createServerReference; //# sourceMappingURL=action-client-wrapper.js.map
}}),
"[project]/node_modules/@radix-ui/react-slot/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// packages/react/compose-refs/src/compose-refs.tsx
__turbopack_context__.s({
    "composeRefs": (()=>composeRefs),
    "useComposedRefs": (()=>useComposedRefs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/slot.tsx
__turbopack_context__.s({
    "Root": (()=>Slot),
    "Slot": (()=>Slot),
    "Slottable": (()=>Slottable),
    "createSlot": (()=>createSlot),
    "createSlottable": (()=>createSlottable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(newElement) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>LoaderCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>BookOpen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
];
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("BookOpen", __iconNode);
;
 //# sourceMappingURL=book-open.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BookOpen": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/forward.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Forward)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "polyline",
        {
            points: "15 17 20 12 15 7",
            key: "1w3sku"
        }
    ],
    [
        "path",
        {
            d: "M4 18v-2a4 4 0 0 1 4-4h12",
            key: "jmiej9"
        }
    ]
];
const Forward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Forward", __iconNode);
;
 //# sourceMappingURL=forward.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/forward.js [app-client] (ecmascript) <export default as Forward>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Forward": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/forward.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronRight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    };
    _react.default.startTransition(navigate);
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    /**
   * The possible states for prefetch are:
   * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
   * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
   * - false: we will not prefetch if in the viewport at all
   * - 'unstable_dynamicOnHover': this starts in "auto" mode, but switches to "full" when the link is hovered
   */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, appPrefetchKind, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        appPrefetchKind,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            "TURBOPACK unreachable";
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}}),
"[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// packages/react/separator/src/separator.tsx
__turbopack_context__.s({
    "Root": (()=>Root),
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = [
    "horizontal",
    "vertical"
];
var Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
        role: "none"
    } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
    });
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
}
var Root = Separator;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_47c0ef62._.js.map