export type ResponseData<D> = {
    data: D[] | D; // định nghĩa D là 1 data bất kì
    message: string;
    status: number;
}