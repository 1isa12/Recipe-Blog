const searchon = document.querySelector('#searchopen');
const searchoff = document.querySelector('#removesearch');
const searchinput = document.querySelector('.searchinput');

searchinput.style.display = "none";

searchon.addEventListener('click', () =>{
    if(searchinput.style.display === 'none'){
        searchinput.style.display = 'flex';
    } else{
        searchinput.style.display = 'none';
    }
});

searchoff.addEventListener('click', () =>{
    if(searchinput.style.display === 'flex'){
        searchinput.style.display = 'none';
    } else{
        searchinput.style.display = 'flex';
    }
});

//slider header
const posts = [
    {
        title: "Brownie Cookies",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/cookies1.jpg",
        label: "Cookies"
    },
    {
        title: "Caramel Cookies",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/cookies2.jpg",
        label: "Cookies"
    },
    {
        title: "Healthy Pizza",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/veggie-pizza.jpg",
        label: "Pizza"
    },
    {
        title: "Alfredo Pasta",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/alfredo-pasta.jpg",
        label: "pasta"
    },
    {
        title: "Pancake Breakfast",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/pancakes-breakfast.jpg",
        label: "pancakes"
    },
    {
        title: "Tiramisu",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/dessert.jpg",
        label: "Dessert"
    },
    {
        title: "Healthy Fries",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/fries.jpg",
        label: "fries"
    },
    {
        title: "Fruit Salad",
        desc: "lorem",
        link: "hhtps://google.com/",
        bgImg: "images/fruity-salad.jpg",
        label: "Salad"
    }
];

let currentSlide = 0;

function showSlide(slideIndex){
    const slide = posts[slideIndex];
    document.querySelector('.headertitle').textContent = slide.title;
    document.querySelector('.headerpera').textContent = slide.desc;
    document.querySelector('.headerbtn').href = slide.link;
    document.querySelector('.headerimg').style.background = `url('${slide.bgImg}') no-repeat center center/cover`;
}

//initial slide
showSlide(currentSlide);

//header posts change slider
const headerPosts = document.querySelector('.headercards');

const headerPostsCards = () => {
    const updateSlider = () => {
        headerPosts.innerHTML = '';
        for(let i = currentSlide; i < currentSlide + 8; i++){
            const post = posts[i % posts.length];
            const postElement = document.createElement('a');
            postElement.classList.add('headercard');
            postElement.classList.add('flex');
            postElement.href = `${post.link}`;
            postElement.innerHTML = `
            <img src="${post.bgImg}" />
                    <div class="hcardinfo">
                        <span>${post.label}</span>
                        <h3>${post.title}</h3>
                    </div>
            `

            headerPosts.appendChild(postElement);
        }
    };
    //left right scroll
    const leftbtn = document.getElementById('sleft');
    const rightbtn = document.getElementById('sright');
    
    leftbtn.addEventListener('click', function(){
        currentSlide = (currentSlide - 1 + posts.length) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    });

    rightbtn.addEventListener('click', function(){
        currentSlide = (currentSlide + 1) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    });

    //initialise the slider
    updateSlider();
}

headerPostsCards();

function nextSlide(){
    currentSlide = (currentSlide + 1) % posts.length;
    showSlide(currentSlide);
    headerPostsCards(currentSlide);
}

//change slide every 3s
setInterval(nextSlide, 3000);


//nav sticky

const mainnav = document.querySelector('.mainnav');

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 2){
        mainnav.classList.add('sticky');
    } else{
        mainnav.classList.remove('sticky');
    }
});

//DarkMode
const darkmode = document.querySelector('#checkbox');
let body = document.body;
const logoImage = document.querySelector('.logo img');
const logoImage2 = document.querySelector('.titlecon img');

//check if there is a stored dark mode preference in the local storage
const idDarkMode = localStorage.getItem('darkMode') === 'true';

//set initital based in storage prefernce
if(idDarkMode){
    body.classList.add('dark');
    darkmode.checked = true;
    //logoImage.src = '/images/favicon.jpg';
    logoImage2.src = 'images/favicon.jpg';
} else{
    //logoImage.src = "/images/logo.jpg";
    logoImage2.src = 'images/logo.jpg';
}

darkmode.addEventListener('change', () => {
    if(darkmode.checked){
        body.classList.add('dark');
        //logoImage.src = "/images/favicon.jpg";
        logoImage2.src = 'images/favicon.jpg';
        localStorage.setItem('darkMode', 'true');
    } else{
        body.classList.remove('dark');
        //logoImage.src = "/images/logo.jpg";
        logoImage2.src = 'images/logo.jpg';
        localStorage.setItem('darkMode', 'flase');
    }
});

//navbar on off
const navonoff = document.querySelector('.navonoff');
const navtoggle = document.querySelector('#checkbox2');
const navlist = document.querySelector('.navlist');

navtoggle.addEventListener('change', () => {
    if(navtoggle.checked){
        navlist.style.right = '-150px';
    } else{
        navlist.style.right = '-400px';
    }
});
