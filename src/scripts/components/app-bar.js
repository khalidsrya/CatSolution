class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- Navbar -->
        <header>
          <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#"><img src="../image/logo.png" alt="Logo Kucing" /></a>
              <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="navbarNavLabel">Menu</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#/home">Beranda</a>
                    <a class="nav-item nav-link" href="#/article">Artikel</a>
                    <a class="nav-item nav-link" href="#/about">Tentang Kami</a>
                    <a class="nav-item btn" href="#">Hubungi Kami</a>
                  </div>
                </div>
              </div>
              <div class="collapse navbar-collapse justify-content-end d-none d-lg-flex" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#/home">Beranda</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/article">Artikel</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/about">Tentang Kami</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Hubungi Kami</a>
                  </li>
                </ul>
              </div>  
            </div>
    
            <script>
              var navbarToggler = document.querySelector('.navbar-toggler');
              var offcanvas = document.querySelector('.offcanvas');
    
              function toggleOffcanvas() {
                offcanvas.classList.toggle('show');
              }
    
              navbarToggler.addEventListener('click', toggleOffcanvas);
            </script>
          </nav>    
        </header>
                   
              `;
    }
}

customElements.define('app-bar', AppBar);