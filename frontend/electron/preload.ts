import { ipcRenderer, contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { getTokensAndIdFromUrl } from "./electron-utils";

declare global {
    interface Window {
        electron: typeof electronAPI;
        api: typeof api;
    }
}

const api = {
    openExternal: (url: string) => ipcRenderer.invoke("open-external", url),
};

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", {
    on(...args: Parameters<typeof ipcRenderer.on>) {
        const [channel, listener] = args;
        return ipcRenderer.on(channel, (event, ...args) =>
            listener(event, ...args)
        );
    },
    off(...args: Parameters<typeof ipcRenderer.off>) {
        const [channel, ...omit] = args;
        return ipcRenderer.off(channel, ...omit);
    },
    send(...args: Parameters<typeof ipcRenderer.send>) {
        const [channel, ...omit] = args;
        return ipcRenderer.send(channel, ...omit);
    },
    invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
        const [channel, ...omit] = args;
        return ipcRenderer.invoke(channel, ...omit);
    },

    // You can expose other APTs you need here.
    // ...
});

// setting token from URL
// This is useful for handling custom protocol URLs like `awakening://set-token?token=...&refreshToken=...`
window.addEventListener("DOMContentLoaded", () => {
    ipcRenderer.on("set-token", (_event, url) => {
        const { token, refreshToken, id } = getTokensAndIdFromUrl(url);
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("id", id);
        window.dispatchEvent(new Event("token-change"));
    });
});

if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld("electron", electronAPI);
        contextBridge.exposeInMainWorld("api", api);
    } catch (error) {
        console.error(error);
    }
} else {
    window.electron = electronAPI;
    window.api = api;
}
