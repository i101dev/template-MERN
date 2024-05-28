//
//
import { URL } from "../../../__PKG__/util/routes";
import { UseRoot, RootCntxType } from "../providers/RootCtx";
//
//
export function MyApi() {
    //
    const { set_loading } = UseRoot() as RootCntxType;
    //
    //
    async function fetch_GET(url: string, showModal: boolean = true) {
        //
        const OPTIONS = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        //
        return SendRequest(url, OPTIONS, showModal);
    }
    async function fetch_POST(url: string, bodyData: object, showModal: boolean = true) {
        //
        const OPTIONS = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData),
        };
        //
        return SendRequest(url, OPTIONS, showModal);
    }
    //
    //
    const SendRequest = async (url: string, OPTIONS: object, showModal: boolean) => {
        //
        //
        if (showModal === true) {
            set_loading(true);
        }
        //
        const response = await fetch(URL.BASE + url, OPTIONS);
        //
        set_loading(false);
        //
        if (!response.ok) {
            LogError(response);
        }
        //
        return response.json();
    };
    //
    //
    const LogError = async (response: any) => {
        const errorResponse = await response.json();
        window.alert("API request error. Check console logs");
        console.log("API request error => " + JSON.stringify(errorResponse));
    };
    //
    //
    return { fetch_GET, fetch_POST };
}
