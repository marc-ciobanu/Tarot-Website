var carti = ["images/00.jpg", "images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/05.jpg", "images/06.jpg"
, "images/07.jpg", "images/08.jpg", "images/09.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg"
, "images/15.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg", "images/19.jpg", "images/20.jpg", "images/21.jpg", "images/22.jpg"
, "images/23.jpg", "images/24.jpg", "images/25.jpg", "images/26.jpg", "images/27.jpg", "images/28.jpg", "images/29.jpg", "images/30.jpg"
, "images/31.jpg", "images/32.jpg", "images/33.jpg", "images/34.jpg", "images/35.jpg", "images/36.jpg", "images/37.jpg", "images/38.jpg"
, "images/39.jpg", "images/40.jpg", "images/41.jpg", "images/42.jpg", "images/43.jpg", "images/44.jpg", "images/45.jpg", "images/46.jpg"
, "images/47.jpg", "images/48.jpg", "images/49.jpg"];

function changeImg() {

    var randomNr = [];

    // generarea a 3 indexi aleatori din array
    for(let i=0; i<3; i++){
        randomNr[i] = Math.floor(Math.random() * carti.length);
        // verificare sa nu se aleaga acelasi numar de doua ori
        for (let j=0; j<3; j++){
            if(randomNr[i] == randomNr[j] && i !=j){
                randomNr[i] = Math.floor(Math.random() * carti.length);
            }
        }
    }

    document.getElementById('back1').src = carti[randomNr[0]];
    document.getElementById('back2').src = carti[randomNr[1]];
    document.getElementById('back3').src = carti[randomNr[2]];
}



function buton1(){
    const popup = document.getElementById('pop-up');
    console.log('card1 button clicked');
    popup.style.display = 'block';
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.cards[0].nume);
    })
    .catch(error => {
        console.error("Error fetching tarot data:", error);
    });
}

function disparePopup() {
    const popup = document.getElementById('pop-up');
    popup.style.display = 'none';
}
