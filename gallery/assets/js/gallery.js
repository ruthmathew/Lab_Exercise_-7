const slide_item = document.querySelector('.carousel-inner');


document.addEventListener('DOMContentLoaded', () => {
    load_fromPicsum();
})


setTimeout( function load_fromPicsum() {
    fetch('https://picsum.photos/v2/list')
    .then((res) => { return res.json(); })
    .then((images) => {
        
        let output = '';
        images.forEach((image, index) => {
            if (index == 2) {
                output += `<div class="carousel-item active">
                <img src="${image.download_url}" height=500px class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${image.author}</h5>
                </div>
              </div>`;
            } else {
                output += `<div class="carousel-item">
                <img src="${image.download_url}" height= 500px class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${image.author}</h5>
                </div>
              </div>`;
            }      
        });

        slide_item.innerHTML = output;
    })
    .catch((err) => { console.log(err); })
}

,1000)