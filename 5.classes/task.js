class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; 
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5; 
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0; 
        } else if (newState > 100) {
            this._state = 100; 
        } else {
            this._state = newState; 
        }
    }

    get state() {
        return this._state; 
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'; 
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
        this.state = 100; 
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'; 
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'; 
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'; 
    }
}

//Задача2

class Library {
    constructor(name) {
        this.name = name; 
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null; 
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName); 
        if (index !== -1) {
            return this.books.splice(index, 1)[0]; 
        }
        return null; 
    }
}


const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    168,
    1972
);


const library = new Library("Библиотека имени Ленина");

let sherlock = new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
)