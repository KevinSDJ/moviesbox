
export const isFavourite = (data,title) => {
    return data?.filter(it => it.title === title).length > 0
}