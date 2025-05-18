function add(...values)
{
  let x=values.reduce((a,b)=>a+b);
  console.log(x);
}
add(1,2,3,4,5);