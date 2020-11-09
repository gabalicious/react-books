import axios from 'axios'
function createRows(results) {
    return results.map((book) => {
        return {
            id: book?.id,
            author: book?.volumeInfo?.authors?.[0] || "",
            title: book?.volumeInfo?.title || "",
            pageCount: book?.volumeInfo?.pageCount || 0,
            date: book?.volumeInfo?.publishedDate || "0001",
            selfLink: book.selfLink
        }
    })
}

function fetchDetails(url) {
    return axios.get(url).then((response) => {
        console.log(response)
        return {
            description: response.data.volumeInfo?.description || "",
            title: "Understanding Children as Consumers",
            authors: [
                "David Marshall"
            ],
            publisher: "SAGE",
            averageRating: 5,
            purchaseInfo: "https://play.google.com/store/books/details?id=AR9XonAslZQC",
            imageUrl: "https://books.google.com/books/content?id=AR9XonAslZQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70X3QG8gp0xMlHazGqA6oOXyuTwuhSvBptPA8RTQjqjDipby17OG8vWm7polo829KY_vN955weIHcc5axIYp3-6TM1NN6zG1qfXbMTP3QqVycDLf3TTbOvsio_zfq8Xikww7rPo&source=gbs_ap",
            pageCount: 280,
            dimensions: {
                "height": "24.20 cm",
                "width": "17.00 cm"
            }
        }
    })

}

export {
    createRows,
    fetchDetails
}