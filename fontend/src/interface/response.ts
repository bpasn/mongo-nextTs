// export type ResponseMessage ={
//     status?: boolean,
//     statusCode?: number,
//     message?: string,
//     payload?: any
// }
export interface IResponseMessage {
    status: boolean,
    message: string,
    statusCode: number,
    payload?: any
}

export default class ResponseMessage {
    public status?: boolean;
    public statusCode?: number;
    public message?: string;
    public payload?: any;

    constructor(IR?: IResponseMessage) {
        this.status = IR?.status;
        this.statusCode = IR?.statusCode;
        this.message = IR?.message;
        this.payload = IR?.payload;
    }

    public getMessage(): string {
        return this.message!;
    }
    public getStatusCode(): boolean {
        return this.status!;
    }
    public getStatus(): number {
        return this.statusCode!;
    }

    public setResponse(t: IResponseMessage) {
        this.message = t.message;
        this.status = t.status;
        this.statusCode = t.statusCode;
        this.payload = t.payload!;
        return this;
    }

    public getReport(): IResponseMessage {
        const response = <IResponseMessage>{
            status: this.status,
            statusCode: this.statusCode,
            message: this.message,
        }
        if (this.payload) {
            response.payload = this.payload
        }

        return response
    }

    public error(): IResponseMessage {
        return {
            status: this.status!,
            statusCode: this.statusCode!,
            message: this.message!,
        }
    }

}