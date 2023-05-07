//alert("hiiiiiiiiiii");
let left_btn = document.getElementsByClassName("bi-chevron-left")[0];
let right_btn = document.getElementsByClassName("bi-chevron-right")[0];
let cards = document.getElementsByClassName("cards")[0];
let search = document.getElementsByClassName("search")[0];
let search_input = document.getElementById("search_input");

left_btn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
  // console.log("i got clicked");
});
right_btn.addEventListener("click", () => {
  cards.scrollLeft += 140;
  // console.log("evem im soo");
});

// FETCHING THE DATA

// fetch('https://server.com/data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

let json_url = "movie.json";
fetch(json_url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element, i) => {
      let { name, imdb, date, sposter, bposter, genre, url, descrp, type } =
        element;
      // console.log(element);
      // console.log(name);
      let card = document.createElement("a");
      card.href = url;
      card.classList.add("card");
      card.innerHTML = `<img src= "${sposter}" alt="" class="poster" />
            <div class="rest_card">
              <img src="${bposter}" alt="" />
              <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                  <p>${genre},${date}</p>
                  <h3 id="rate">
                    <span>IMDB</span><i class="bi bi-star-half"></i>${imdb}
                  </h3>
                </div>
              </div>
            </div> `;
      cards.appendChild(card).addEventListener("mouseover", () => {
        let content = document.getElementById("title");
        let descrpt = document.getElementById("descrp");
        let show = document.getElementById("show_type");
        let gen = document.getElementById("genre");
        let rDate = document.getElementById("release_date");
        let movie_rating = document.getElementById("rating");

        content.innerText = `${name}`;
        descrpt.innerText = `${descrp}`;
        show.innerText = `A Netflix original ${type}`;
        gen.innerText = `${genre}`;
        rDate.innerText = `${date}`;
        movie_rating.innerHTML = `<span>IMDB</span><i class="bi bi-star-half"></i>${imdb}`;
      });
    });

    console.log(data);

    data.forEach((ele) => {
      let { name, imdb, date, sposter, genre, url } = ele;
      console.log(ele);
      let card = document.createElement("a");

      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
      <img src="${sposter}" alt="" />
      <div class="cont">
        <h3>${name} </h3>
        <p>
          ${date},${genre} <span>IMDB</span
          ><i class="bi bi-star-half"></i>${imdb}
        </p>
      </div> `;
      search.appendChild(card);
    });

    search_input.addEventListener("keyup", () => {
      let filter = search_input.value.toUpperCase();
      let a = search.getElementsByTagName("a");

      for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName("cont")[0];
        let textValue = b.textContent || b.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "flex";
          search.style.visibility = "visible";
          search.style.opacity = 1;
        } else {
          a[i].style.display = "none";
        }

        if (filter == 0) {
          a[i].style.display = "none";
          search.style.visibility = "hidden";
          search.style.opacity = 0;
        }
      }
    });
    let video = document.getElementsByTagName("video")[0];
    let play = document.getElementById("play");
    play.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        play.innerHTML = `Stop<i class="bi bi-pause-fill"></i>`;
      } else {
        video.pause();
        play.innerHTML = `Watch<i class="bi bi-play-fill"></i>`;
      }
    });

    // MOVIES AND SERIES NAV BAR TARGET

    let series = document.getElementById("series");
    series.addEventListener("click", () => {
      cards.innerHTML = "";
      let series_array = data.filter((element) => {
        return element.type === "series";
      });
      series_array.forEach((element, i) => {
        let { name, imdb, date, sposter, bposter, genre, url, descrp, type } =
          element;
        // console.log(element);
        // console.log(name);
        let card = document.createElement("a");
        card.href = url;
        card.classList.add("card");
        card.innerHTML = `<img src= "${sposter}" alt="" class="poster" />
        <div class="rest_card">
          <img src="${bposter}" alt="" />
          <div class="cont">
            <h4>${name}</h4>
            <div class="sub">
              <p>${genre},${date}</p>
              <h3 id="rate">
                <span>IMDB</span><i class="bi bi-star-half"></i>${imdb}
              </h3>
            </div>
          </div>
        </div> `;
        cards.appendChild(card);
      });
    });

    // movies 

    
    let movies = document.getElementById("movies");
    movies.addEventListener("click", () => {
      cards.innerHTML = "";
      let movies_array = data.filter((element) => {
        return element.type === "movie";
      });
      movies_array.forEach((element, i) => {
        let { name, imdb, date, sposter, bposter, genre, url, descrp, type } =
          element;
        // console.log(element);
        // console.log(name);
        let card = document.createElement("a");
        card.href = url;
        card.classList.add("card");
        card.innerHTML = `<img src= "${sposter}" alt="" class="poster" />
        <div class="rest_card">
          <img src="${bposter}" alt="" />
          <div class="cont">
            <h4>${name}</h4>
            <div class="sub">
              <p>${genre},${date}</p>
              <h3 id="rate">
                <span>IMDB</span><i class="bi bi-star-half"></i>${imdb}
              </h3>
            </div>
          </div>
        </div> `;
        cards.appendChild(card);
      });
    });







  });
