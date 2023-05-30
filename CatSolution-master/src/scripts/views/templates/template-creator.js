const homePage = () => `
<!-- Jumbotron -->
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <div class="row"  data-aos="fade-up" data-aos-duration="2000">
      <div class="col">
        <h1 class="display-4 title">Find The Best</h1>
        <h1 class="display-4 title" style="color: #2a4f82;">Treatment For</h1>
        <h1 class="display-4 title">Your Cats</h1>
        <a class="nav-item button-hero btn" href="#/article">Jelajahi Artikel</a>
      </div>
      <div class="col">
        <img
          src="../image/image1.png"
          alt=""
          data-speed="-2"
          class="float-right hero-img img-fluid"
        />
      </div>
    </div>
  </div>
  
  <!-- Category -->
  <div id="category" class="category">
    <div class="container">
      <div class="row justify-content-center" data-aos="fade-up" data-aos-duration="2000">
        <div class="col-md-3">
          <div class="circle">
            <img src="image/image2.png" alt="Gambar 1">
          </div>
          <h4>Kesehatan</h4>

        </div>
        <div class="col-md-3">
          <div class="circle">
            <img src="image/image3.png " alt="Gambar 2">
          </div>
          <h4>Perawatan</h4>
        </div>
        <div class="col-md-3">
          <div class="circle">
            <img src="image/image4.png" alt="Gambar 3">
          </div>
          <h4>Makanan</h4>
        </div>
        <div class="col-md-3">
          <div class="circle">
            <img src="image/image5.png" alt="Gambar 4">
          </div>
          <h4>Gaya Hidup</h4>
        </div>
      </div>
    </div>
  </div>

  <!-- About -->
  <div class="container about">
    <div class="row justify-content-center ">
        <div class="col">
          <img class="about-img img-fluid" src="image/image6.png" alt="" data-aos="fade-right" data-aos-duration="2000">
        </div>
         <div class="col about-us" data-aos="fade-left" data-aos-duration="2000">
            <p class="info">Tentang kami</p>
            <h1 class="area-title">Cat Solution</h1>
            <p class="about-info lead mb-4">Cat Solution menyediakan berbagai artikel mengenai edukasi pentingnya melakukan perawatan terhadap
                kucing peliharaan, membantu para pemilik kucing dalam merawat kucing mereka
                agar terawat lebih tepat dan baik, membantu dalam melakukan pengawasan
                kucing dan dapat...</p>
            <a class="nav-item button-about btn" href="#/about">Selengkapnya</a>
        </div>
    </div>
  </div>

  <div class="container interest-content" id="articles">
`;

const aboutPage = () => `
<!-- About Us -->
    <div class="content-about">
      <div class="about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-7 about-desc" data-aos="fade-right" data-aos-duration="2000">
              <h1 class="area-title">Cat Solution</h1>
              <p class="about-desc">
                Cat Solution menyediakan berbagai artikel menarik tentang kucing
                peliharaan dan masalah umum tentang kucing, seperti tentang
                nutrisi kucing, perilaku, perkembangan, kesehatan, dan lainnya.
              </p>
              <hr/>
              <p class="about-desc">
                Kami berharap dengan artikel yang kami sediakan dapat memberikan
                edukasi kepada para pemilik kucing tentang pentingnya melakukan
                perawatan terhadap kucing peliharaan, membantu para pemilik
                kucing dalam merawat kucing mereka agar terawat lebih tepat dan
                baik, membantu dalam melakukan pengawasan kucing dan dapat
                membantu pemilik kucing dalam memenuhi kebutuhan kucing.
              </p>
            </div>
            <div class="col-md" data-aos="fade-left" data-aos-duration="2000">
              <img
                src="../image/image8.png"
                class="img-fluid content-aboutImg mx-auto d-block"
                alt="tentang Kami Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="team" class="team" data-aos="fade-up" data-aos-duration="2000">
        <div class="container">
          <div class="row justify-content-center team-title">
            <div class="col-lg-10">
              <h1 class="card-title text-center area-title">Tim Kami</h1>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3">
              <div class="circle">
                <img src="image/khalid.jpg" alt="Gambar 1" />
              </div>
              <h4>Khalid Surya</h4>
            </div>
            <div class="col-md-3">
              <div class="circle">
                <img src="image/nessa.jpeg" alt="Gambar 2" />
              </div>
              <h4>Nessa Aqila</h4>
            </div>
            <div class="col-md-3">
              <div class="circle">
                <img src="image/ikbal.jpg" alt="Gambar 3" />
              </div>
              <h4>Ikbal</h4>
            </div>
            <div class="col-md-3">
              <div class="circle">
                <img src="image/andreas.jpg" alt="Gambar 4" />
              </div>
              <h4>Andreas</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

`;

const createArticleDetailTemplate = (article) => `
<div class="row justify-content-center">
  <div class="title text-center">
    <h1 class="area-title mb-5">${article.title}</h1>
    <img class="detail-img img-fluid" src=${article.urlToImage} alt="">
  </div>
  <div class="desricption-area mt-4">
    <p>${article.description}</p>
  </div>
</div>
`;

const createArticleItemTemplate = (article) => `
<div class="card card-list" style="width: 20rem;" data-aos="fade-up" data-aos-duration="2000">
  <img src="${article.urlToImage}" class="card-img-top list-img" alt="...">
  <div class="card-body">
    <h5 class="card-title item-title">${article.title}</h5>
    <p class="card-text">${article.description.slice(0, 150)}...</p>
    <a class="nav-item button-about btn" href="/#/detail/${article.id}">Selengkapnya</a>
  </div>
</div>
`;

const createInterestArticleContent = () => ` 
<div class="container">
<div class="row justify-content-center interest-container">
     <div class="col about-us" data-aos="fade-right" data-aos-duration="2000">
        <p class="info">Konten Menarik</p>
        <h1 class="area-title">Waktu & Tips Memandikan Kucing</h1>
        <p class="about-info lead mb-4">Seperti yang kita ketahui, kucing bisa membersihkan tubuhnya sendiri. Terkadang, hal tersebut sudah cukup, namun untuk beberapa kondisi, Anda perlu memandikan kucing karena noda atau kotoran yang tidak bisa mereka bersihkan sendiri. Ideal...</p>
        <a class="nav-item button-about btn" href="#/detail/03">Selengkapnya</a>
    </div>
    <div class="col">
    <img class="about-img img-fluid mx-auto d-block interest-img" src="https://i.postimg.cc/DZp1X72t/Article04.png" alt="" data-aos="fade-left" data-aos-duration="2000">
  </div>
</div>

<div class="row justify-content-center ">
   <div class="col">
      <img class="about-img img-fluid  interest-img" src="https://i.postimg.cc/qRx0SMRS/Article06.png" alt="" data-aos="fade-right" data-aos-duration="2000">
    </div>
     <div class="col about-us" data-aos="fade-left" data-aos-duration="2000">
        <p class="info">Konten Menarik</p>
        <h1 class="area-title">Beberapa Fakta Unik Tentang Kucing</h1>
        <p class="about-info lead mb-4">Beberapa orang meyakini kucing merupakan salah satu hewan yang dapat meredakan stres ataupun mengurangi ketegangan sehabis melakukan pekerjaan. Jika diperhatikan kucing cenderung suka bermalas-malasan seperti halnya...</p>
        <a class="nav-item button-about btn" href="#/detail/06">Selengkapnya</a>
    </div>
    
</div>
</div>


`;
export {
 homePage, aboutPage, createArticleItemTemplate, createArticleDetailTemplate, createInterestArticleContent
};
