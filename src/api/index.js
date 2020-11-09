import axios from 'axios'

function cacheResults(results) {
    localStorage.setItem("results", JSON.stringify(results));
}


function cacheSearchParams(searchParams) {
    localStorage.setItem("searchParams", JSON.stringify(searchParams));
}

function createRows(results) {
    cacheResults(results)
    return results.map((book) => {
        return {
            id: book?.id,
            author: book?.volumeInfo?.authors?.[0] || "",
            title: book?.volumeInfo?.title || "",
            pageCount: book?.volumeInfo?.pageCount || "",
            date: book?.volumeInfo?.publishedDate || "0000",
            selfLink: book.selfLink
        }
    })
}

function fetchBooks(params) {
    cacheSearchParams(params)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params}&startIndex=0&maxResults=40`)
}

function fetchDetails(url) {
    return axios.get(url).then((response) => {
        return {
            description: response.data.volumeInfo?.description || "",
            title: response.data.volumeInfo?.title || "",
            authors: response.data.volumeInfo?.authors || "",
            publisher: response.data.volumeInfo.publisher,
            infoLink: response.data.volumeInfo?.infoLink,
            imageUrl: response.data.volumeInfo?.imageLinks?.thumbnail || "",
        }
    })

}

export {
    createRows,
    fetchDetails,
    fetchBooks
}