export class Result {
    success: boolean;
    message: string;
    data: any;
    constructor() {
        this.success = true;
        this.message = '成功';
        this.data = null;
    }
}