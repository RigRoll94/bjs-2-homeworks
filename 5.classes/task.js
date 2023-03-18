class PrintEditionItem {
    
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
		if (number < 0) {
			this._state = 0;
		}
		if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
    
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }    
}

class Book extends PrintEditionItem {
    
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


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
        let findBook = this.books.find(item => item[type] === value);
        if (findBook === undefined) {
            return null;
        }
        return findBook;
    }

    giveBookByName(bookName) {
		let giveBoook = this.books.find(book => book.name === bookName);
		if (typeof giveBoook === 'object') {
			let element = this.books.indexOf(giveBoook);
			this.books.splice(element, 1);
			return giveBoook;
		} else {
			return null;
		}
    }
}


class Student {
    
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        } else if (this.marks.hasOwnProperty(subject) === false) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject) === false) {
            return 0;
        }
        let avg = this.marks[subject].reduce((acc, item) => acc + item, 0);
        return avg / this.marks[subject].length;
    }

    getAverage() {
        let allNameSubject = Object.keys(this.marks);
        let markSubject = Object.values(this.marks);
        let avgMarkSubject = 0;
        markSubject.forEach(item => {
          avgMarkSubject += item.reduce((a, b) => a + b / item.length, 0)
        })
        return avgMarkSubject / allNameSubject.length;
    }
}