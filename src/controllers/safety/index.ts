import { Server } from "revolt.js";

export function report(object: Server) {
    let type;
    if (object instanceof Server) {
        type = "Server";
    }

    window.open(
        `mailto:abuse@transfem.pp.ua?subject=${encodeURIComponent(
            `${type} Report`,
        )}&body=${encodeURIComponent(
            `${type} ID: ${object._id}\nWrite more information here!`,
        )}`,
    );
}
