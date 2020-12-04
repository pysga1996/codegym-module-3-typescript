async function getBooksAndAuthorFixed(authorId: string) {
    const bookPromise = fetchAllBook();
    const authorPromise = fetchAuthorById(authorId);
    const books = await bookPromise;
    const author = await authorPromise;
    return {
        author,
        books: books.filter(book => book.authorId === authorId),
    };
}

getBooksAndAuthorFixed('author-id-2');