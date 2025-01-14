module.exports = {
    tabWidth: 4,
    trailingComma: "all",
    jsxBracketSameLine: true,
    importOrder: [
        "preact|classnames|.scss$",
        "^@FrenzyComs",
        "/(lib)",
        "/(redux|mobx)",
        "/(context)",
        "/(ui|common)$",
        ".svg|.webp|.png|.jpg$",
        "^[./]",
    ],
    importOrderSeparation: true,
};
