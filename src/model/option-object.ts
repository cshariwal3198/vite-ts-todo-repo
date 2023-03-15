import { IValueObject, OptionHeader } from "../utils/types";

export const optionHeader: OptionHeader = {
    "Content-type": "application/json",
}

export class OptionObject {
    method;
    body;
    headers;

    constructor(method: string, body?: IValueObject, header?: OptionHeader) {
        this.method = method;
        this.body = JSON.stringify(body);
        this.headers = header;
    }
}