async function fetchAllBook() {
    await new Promise(resolve => {
        console.log('Waiting 2s...');
        setTimeout(() => resolve(), 2000);
    });
    console.log('fetchAllBook');
    return [
        {
            id: 'book-id-1',
            authorId: 'author-id-1'
        }, {
            id: 'book-id-2',
            authorId: 'author-id-2'
        }, {
            id: 'book-id-3',
            authorId: 'author-id-3'
        }
    ];
}

async function fetchAuthorById(authorId: string) {
    console.log('fetchAuthorById');
    return {
        authorId,
    };
}
async function getBooksAndAuthor(authorId: string) {
    const books = await fetchAllBook();
    const author = await fetchAuthorById(authorId);
    return {
        author,
        books: books.filter(book => book.authorId === authorId),
    };
}

getBooksAndAuthor('author-id-2');