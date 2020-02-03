export class Pagination {
    public pageSize: number;
    public totalResults: number;
    public totalPages: number;
    public page: number;
    public pageSizeOptions: number[] = [5, 10, 25, 50, 100, 1000];

    constructor(pageSize?: number, totalResults?: number, totalPages?: number, page?: number) {

        this.pageSize = pageSize ? pageSize : 10;
        this.totalResults = totalResults;
        this.totalPages = totalPages;
        this.page = page ? page : 1;
    }
}
