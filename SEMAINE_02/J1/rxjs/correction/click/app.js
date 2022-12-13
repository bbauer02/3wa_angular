const { map, filter, switchMap,debounce, buffer } = rxjs.operators;
const { fromEvent, interval, timer } = rxjs;

let button = document.querySelector('button');
let stat = document.querySelector('.stat');

const click$ = fromEvent(button, 'click');

const buffer$ = click$.pipe(
    debounce(() => timer(250))
);



const nbClick$ = click$.pipe(
    buffer(buffer$),
    map(b => b.length),
    filter(num => num > 2)
).subscribe(
    total => {
            const stat = document.createElement('p');
            const t = document.createTextNode(`Total de click :  ${total}`);
            stat.appendChild(t);

            const parentButton = button.parentNode;

            parentButton.insertBefore(stat, button)
    }
);