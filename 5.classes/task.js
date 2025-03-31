class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100; 
        this.type = null; 
    }

    fix() {
        this._state = Math.min(100, this._state * 1.5); 

    set state(value) {
        if (value < 0) {           
             this._state = 0; 
        } else if (value > 100) {
            this._state = 100; 
        } else {
            this._state = value; 
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

// Пример использования

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); 
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state); 

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.author); 
picknick.state = 10;
console.log(picknick.state); 
picknick.fix();
console.log(picknick.state); 


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
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0]; 
        }
        return null; 
    }
}

// Пример использования

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); 
console.log(library.findBookBy("releaseDate", 1924).name); 

console.log("Количество книг до выдачи: " + library.books.length);
const borrowedBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 

// Тестовый сценарий

const testLibrary = new Library("Тестовая Библиотека");

testLibrary.addBook(new FantasticBook("Рэй Брэдбери", "451 градус по Фаренгейту", 1953, 160));
testLibrary.addBook(new Magazine("Наука и жизнь", 2020, 50));
testLibrary.addBook(new NovelBook("Джордж Оруэлл", "1984", 1949, 328));

let book1919 = testLibrary.findBookBy("releaseDate", 1919);
if (!book1919) {
    book1919 = new Book("Неизвестный Автор", "Книга из 1919 года", 1919, 200);
    testLibrary.addBook(book1919);
}

const borrowedTestBook = testLibrary.giveBookByName("1984");
console.log("Выдана книга: " + (borrowedTestBook ? borrowedTestBook.name : "Книга не найдена")); 

borrowedTestBook.state = 20; 

borrowedTestBook.fix();

testLibrary.addBook(borrowedTestBook);
console.log("Количество книг после восстановления: " + testLibrary.books.length); 

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            console.log(`Оценка ${mark} не может быть добавлена. Она должна быть от 2 до 5.`);
            return;
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }
        
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        }

        const total = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return total / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0; 
        }

        const totalAverage = subjects.reduce((acc, subject) => {
            return acc + this.getAverageBySubject(subject);
        }, 0);

        return totalAverage / subjects.length; 
    }
}

// Примеры использования класса Student
const student = new Student("Олег Никифоров");
student.addMark(5, "Химия");
student.addMark(5, "Химия");
student.addMark(5, "Физика");
student.addMark(4, "Физика");
student.addMark(6, "Физика"); 
console.log(student.getAverageBySubject("Физика")); 
console.log(student.getAverageBySubject("Биология")); 
console.log(student.getAverage()); 