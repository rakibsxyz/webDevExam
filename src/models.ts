export interface AuthorModel {
    name: string,
    bio: string,
    link: string,
    _id: string,
    description: string,
    quoteCount: string,
    slug: string,
    dateAdded: string,
    dateModified: string
    isFav?:boolean
}

export interface ApiResponseModel {
    count: number,
    totalCount: number,
    page: number,
    totalPages: number,
    lastItemIndex: number,
    results: AuthorModel[]
}