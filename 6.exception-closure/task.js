function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        const s = this.perimeter / 2;
        const areaValue = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
        return Math.round(areaValue * 1000) / 1000;
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}

const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter);
console.log(triangle1.area);

const triangle2 = getTriangle(1, 2, 3);
console.log(triangle2.perimeter); 
console.log(triangle2.area);      