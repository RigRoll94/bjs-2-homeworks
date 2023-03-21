function parseCount(count) {
    let float = Number.parseFloat(count)
    if (Number.isNaN(float)) {
      throw new Error("Невалидное значение");
    };
    console.log(float)
    return float;
  }
  
function validateCount(count) {
    try {
      return parseCount(count);
    } catch (error) {
      return error;
    }
}


class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
  
    get perimeter() {
      return this.a + this.b + this.c
    }
  
    get area() {
      let halfPerimeter = this.perimeter / 2;
      return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      let error = "Ошибка! Треугольник не существует";
      return {
        get perimeter() {
          return error;
        },
        get area() {
          return error;
        }
      }
    }
}