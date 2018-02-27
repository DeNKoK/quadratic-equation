module.exports = function solveEquation(equation) {
  equation = equation.split(' ').join('');
  function compare(a,b) {return a-b};
		var a;
		var b;
		var c;
		var i1, i2, x1, x2;
		i1 = equation.indexOf('*x^2');
		
		i2 = equation.lastIndexOf('*x');
		
		a = parseInt(equation.substring(0,i1));
		
		b = parseInt(equation.substring(i1+4,i2));
		
		c = parseInt(equation.substring(i2+2,equation.length));
		

		var D = b*b - 4*a*c;
		x1 = Math.round((-b + Math.sqrt(D)) / (2*a));
		
		x2 = Math.round((-b - Math.sqrt(D)) / (2*a));
    var answer = [x1,x2];
    answer.sort (compare);
		
  
  return answer;
}
