export const APP_VERSION = "__APP_VERSION__";
export const IS_REVOLT =
    import.meta.env.VITE_API_URL === "https://api.transfem.pp.ua" ||
    // future proofing
    import.meta.env.VITE_API_URL === "https://app.transfem.pp.ua/api" ||
    import.meta.env.VITE_API_URL === "https://transfem.pp.ua/api";
