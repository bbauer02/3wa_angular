const { map, switchMap, take } = rxjs.operators;
const { fromEvent, from, interval  } = rxjs;

const click$ = fromEvent(generate , 'click');
const interval$ = interval(1000);

function* fibonacci() {

    let a = 0;
    let b = 1;

    while(true) {
        let t = b;
        b = a + b;
        a = t;

        yield b;
    }
}


const start$ = click$.pipe(
  switchMap(
      (event) => {
          const fib = fibonacci();
          return interval$.pipe(
              map(_ => fib.next().value),
              take(10)
          )
      }
  )
);

const ul = document.querySelector('ul');

start$.subscribe(val => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(val));
    ul.appendChild(li);
})
