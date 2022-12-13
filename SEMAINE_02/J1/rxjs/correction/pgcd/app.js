const { map, mergeMap, pluck } = rxjs.operators;
const { fromEvent, interval, timer  } = rxjs;

const ob1$ = fromEvent(num1, 'input');
const ob2$ = fromEvent(num2, 'input');






const span = document.querySelector('span');


function pgcd(a, b) {
    if (a < b) {
        let t = a;
        a = b;
        b = t;
    }
    while (b > 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}



ob1$.pipe(
    pluck('target','value'),

    mergeMap(
        num1 => {
            return ob2$.pipe(
                pluck('target', 'value'),
                map(num2 => pgcd(num1, num2))
            )
        }
    )
).subscribe(
    result => span.textContent = result
)
