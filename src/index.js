module.exports = function solveEquation(equation) {
  let mass = equation.split(' ');
  let d = (mass[3] + mass[4])*(mass[3] + mass[4]) - 4*(mass[0] * (mass[7] + mass[8]));
  let x = (-(mass[3] + mass[4]) + Math.sqrt(d)) / (2 * mass[0]);
  let y = (-(mass[3] + mass[4]) - Math.sqrt(d)) / (2 * mass[0]);

  if(mass[0] < 0){
    return [Math.round(x),Math.round(y)];
  }else{
    return [Math.round(y),Math.round(x)];
  }
}
