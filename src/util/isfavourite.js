
export const isFavourite = (data,id) => {
    return data?.filter(it => it.id === id).length > 0
}