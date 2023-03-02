import { AxiosError } from "axios";

interface Message {
    message?: string;
    status?: boolean;
    statusCode?: number;
    payload?: any;
}
export default class Helper {
    private message?: string | any;
    private status?: boolean;
    private statusCode?: number;
    private payload?: any

    public setMessage(msg: any) {
        if (msg instanceof AxiosError) {
            console.log(msg.response?.request)
            this.message = msg.response?.data && msg.response.data ? msg.response.data.message : msg.message;
            this.status = msg.response?.data && msg.response.data ? msg.response.data.status : false;
            this.statusCode = (msg.response?.data && msg.response.data) ? msg.response.data.statusCode : 500;
        } else if (msg instanceof Error) {
            const cause: any = msg.cause
            this.message = cause.message ? cause.message : msg.message
            this.status = cause.status ? cause.status : false;
            this.statusCode = cause.statusCode ? cause.statusCode : false
        }
        return this;
    }
    public setResponse(msg: any) {
        this.message = 'success';
        this.payload = msg.data;
        this.status = true;
        this.statusCode = msg.status
        return this;
    }


    public report() {
        const report = {
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        } as any
        if (this.payload) {
            report.payload = this.payload
        }
        console.log(report)
        return report
    }
}