function fn() {
  console.log(this.a);
  return () => {
    console.log(this.b);
  };
}
fn.call({ a: 10 }).call({ b: 20 });

// fn.call({a:10}): This calls the fn function with the context set to {a:10}. This means that inside the fn function, this will refer to {a:10}.
// return () => { console.log(this.b) }: This returns an arrow function. Note that arrow functions inherit the this context from their surrounding scope. So, in this case, this inside the arrow function will still refer to {a:10}.
// .call({b:20}) calls the returned arrow function with the context set to {b:20}. However, as mentioned earlier, the this context inside the arrow function is already set to {a:10}, so this call does not change the this context.
// console.log(this.b): Since this still refers to {a:10}, and there is no property b on this object, this will log undefined to the console.