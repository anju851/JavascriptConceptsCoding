function abc() {
  console.log(abc.xyz);
}
abc(); 
abc.xyz = 400; // temporal dead zone for abc.xyz till here from line 1, hence value of abc.xyz remians undefined if accessed until here 
abc.xyz = 200;
abc();
