module.exports = {

"[project]/.next-internal/server/app/character-creation/[class]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/game-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
        image: "https://storage.googleapis.com/character_poot/ch1.png",
        imageHint: "rogue assassin",
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
        image: "https://storage.googleapis.com/character_poot/homie.jpg",
        imageHint: "armored knight",
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
        name: "Goddess of Wind",
        image: "https://storage.googleapis.com/character_poot/sista.jpg",
        imageHint: "wind goddess",
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
    }
];
const getClass = (id)=>{
    return CLASSES.find((c)=>c.id === id);
};
}}),
"[project]/src/components/game/ConfirmationScreen.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmationScreen": (()=>ConfirmationScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ConfirmationScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfirmationScreen() from the server but ConfirmationScreen is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/game/ConfirmationScreen.tsx <module evaluation>", "ConfirmationScreen");
}}),
"[project]/src/components/game/ConfirmationScreen.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmationScreen": (()=>ConfirmationScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ConfirmationScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfirmationScreen() from the server but ConfirmationScreen is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/game/ConfirmationScreen.tsx", "ConfirmationScreen");
}}),
"[project]/src/components/game/ConfirmationScreen.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ConfirmationScreen$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/game/ConfirmationScreen.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ConfirmationScreen$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/game/ConfirmationScreen.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ConfirmationScreen$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/game/GameContainer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GameContainer": (()=>GameContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function GameContainer({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameContainer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/character-creation/[class]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ConfirmCharacterPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ConfirmationScreen$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/ConfirmationScreen.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/GameContainer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function ConfirmCharacterPage({ params }) {
    const character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClass"])(params.class);
    if (!character) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/character-creation/[class]/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GameContainer"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ConfirmationScreen$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfirmationScreen"], {
                        character: character
                    }, void 0, false, {
                        fileName: "[project]/src/app/character-creation/[class]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/character-creation/[class]/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/character-creation/[class]/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/character-creation/[class]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/character-creation/[class]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_334ffd0b._.js.map