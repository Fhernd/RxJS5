import {
    Observable, Observer
} from "rxjs";
import {
    load, loadWithFetch
} from "./loader.ts";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");



function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

// load("movies.json").subscribe(renderMovies);
loadWithFetch("moviess.json").subscribe(
    renderMovies,
    e => console.log(`error: ${e}`),
    () => console.log("complete!")
);

click.flatMap(e => loadWithFetch("movies.json"))
    .subscribe(
    renderMovies,
    e => console.log(`Error: ${e}`),
    () => console.log("complete")
    );