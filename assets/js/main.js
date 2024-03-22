fetch("./assets/js/MOCK_DATA.json")
    .then(response => response.json())
    .then(data => {

        let options = {
            threshold: 0.3
        }

        let observer = new IntersectionObserver((entries) => {
            for (let i = 0; i < entries.length; i++) {
                let rand = new Random();
                if (entries[i].isIntersecting) {
                    for (i = 0; i < 9; i++) {
                        let rand = new Random();
                        new Post(document.getElementsByTagName("main")[0],
                            data[rand.randomAvatar].avatar,
                            data[rand.randomName].name,
                            data[rand.randomPost].post
                        );
                    }
                    let post = new Post(document.getElementsByTagName("main")[0],
                        data[rand.randomAvatar].avatar,
                        data[rand.randomName].name,
                        data[rand.randomPost].post
                    );
                    observer.observe(post.article);
                }
            };
        }, options);
        let rand = new Random();
        let post = new Post(document.getElementsByTagName("main")[0],
            data[rand.randomAvatar].avatar,
            data[rand.randomName].name,
            data[rand.randomPost].post
        );
        observer.observe(post.article);
    })
    .catch(error => {
        console.error(error);
    });

class Post {
    /* article */
    parent;
    article;

    /* header */
    header;
    headerImg;
    headerName;
    headerNameSource;
    headerImgSource;

    /* img */
    mainImg;
    mainImgSource;

    /* footer */
    heart;
    comment;
    paperPlane;
    footer;

    constructor(newArticleParent, newHeaderImg, newHeaderName, newMainImg) {
        /* article */
        this.parent = newArticleParent;
        this.article = document.createElement("article");

        /* header */
        this.header = document.createElement("header");
        this.header.classList = "header";
        /* header img */
        this.headerImg = document.createElement("img");
        this.headerImgSource = newHeaderImg;
        this.headerImg.src = this.headerImgSource;
        this.headerImg.classList = "avatar";

        /* header username */
        this.headerName = document.createElement("p");
        this.headerNameSource = newHeaderName;
        this.headerName.innerText = this.headerNameSource;
        this.headerName.classList = "username";

        /* img */
        this.mainImg = document.createElement("img");
        this.mainImgSource = newMainImg;
        this.mainImg.src = this.mainImgSource;
        this.mainImg.classList = "mainImg";

        /* making the footer */
        this.footer = document.createElement("footer");
        this.footer.classList = "icons";

        /* making the heart */
        this.heart = document.createElement("i");
        this.heart.classList = "fa-regular fa-heart reactIcons";

        /* making the comment */
        this.comment = document.createElement("i");
        this.comment.classList = "fa-regular fa-comment reactIcons";
        /* making the paperPlane */
        this.paperPlane = document.createElement("i");
        this.paperPlane.classList = "fa-regular fa-paper-plane reactIcons"
        this.render();
    }

    render() {
        /* header */
        this.header.appendChild(this.headerImg);
        this.header.appendChild(this.headerName);

        /* footer */
        this.footer.appendChild(this.heart);
        this.footer.appendChild(this.comment);
        this.footer.appendChild(this.paperPlane);

        /* article */
        this.article.appendChild(this.header);
        this.article.appendChild(this.mainImg);
        this.article.appendChild(this.footer);
        this.parent.appendChild(this.article);
    }
}
class Random {
    randomName;
    randomAvatar;
    randomPost;

    constructor() {

        this.randomName = Math.floor(Math.random(1) * 1000 + 1);
        this.randomAvatar = Math.floor(Math.random(1) * 1000 + 1);
        this.randomPost = Math.floor(Math.random(1) * 1000 + 1);
    }
}





//maak functie die 10 posts aanmaakt
//in de fucntie, laat de observer naar het laatste element kijken.













