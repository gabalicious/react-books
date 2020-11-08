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

function fetchDetails() {
    return {
        description: "What drives children as consumers? How do advertising campaigns and branding effect children and young people? How do children themselves understand and evaluate these influences?\u003c/p\u003e \u003cp\u003e\u003c/p\u003e \u003cp\u003eWhether fashion, toys, food, branding, money - from TV adverts and the supermarket aisle, to the internet and peer trends, there is a growing presence of marketing forces directed at and influencing children and young people. How should these forces be understood, and what means of research or dialogue is required to assess them? \u003c/p\u003e \u003cp\u003e\u003c/p\u003e \u003cp\u003eWith critical insight, the contributors to this collection, take up the evaluation of the child as an active consumer, and offer a valuable rethinking of the discussions and literature on the subject. \u003c/p\u003e \u003cp\u003e\u003c/p\u003e \u003cp\u003eFeatures:\u003c/p\u003e \u003cp\u003e• 14 original chapters from leading researchers in the field\u003c/p\u003e \u003cp\u003e• Each chapter contains vignettes or case examples to reinforce learning\u003c/p\u003e \u003cp\u003e• Contains consideration of future research directions in each of the topics that the chapters cover.\u003c/p\u003e \u003cp\u003e\u003c/p\u003e \u003cp\u003eThis book will be relevant reading for postgraduates and advanced undergraduates with an interest in children as consumers, consumer behaviour and on marketing courses in general as well as for researchers working in this field.",
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
}

export {
    createRows,
    fetchDetails
}