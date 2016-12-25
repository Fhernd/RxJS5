import {
    Observable, Observer
} from "rxjs";
import {
    load, loadWithFetch
} from "./loader";

// let source = Observable.create( observer => {
//     observer.next(1);
//     observer.next(2);
//     observer.error("Stop!");
//     // throw new Error("Stop!");
//     observer.next(3);
//     observer.complete();
// });

// let source = Observable.onErrorResumeNext(
//     Observable.of(1),
//     Observable.from([2, 3, 4]),
//     Observable.throw(new Error("Stop!")),
//     Observable.of(5)
// );

let source = Observable.merge(
    Observable.of(1),
    Observable.from([2, 3, 4]),
    Observable.throw(new Error("Stop!")),
    Observable.of(5)
).catch(
    e => {
        console.log(`caught: ${e}`);
        return Observable.of(10);
    }
);

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);


// let output = docueate(ment.getElementById("output");
// let button = document.getElementById("button");

// let click = Observable.fromEvent(button, "click");



// function renderMovies(movies) {
//     movies.forEach(m => {
//         let div = document.createElement("div");
//         div.innerText = m.title;
//         output.appendChild(div);
//     });
// }

// // load("movies.json").subscribe(renderMovies);
// loadWithFetch("movies.json").subscribe(renderMovies);

// click.flatMap(e => loadWithFetch("movies.json"))
//     .subscribe(
//     renderMovies,
//     e => console.log(`Error: ${e}`),
//     () => console.log("complete")
//     );