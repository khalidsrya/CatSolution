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
          <a class="navbar-brand" href="#"><img src="../image/logo.png" alt="Logo Kucing"/></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav ms-auto">
                <a class="nav-item nav-link" href="#/home">Beranda</a>
                <a class="nav-item nav-link" href="#/article">Artikel</a>
                <a class="nav-item nav-link" href="#/about">Tentang Kami</a>
                <a class="nav-item btn" href="#">Hubungi Kami</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
              
              `;
  }
}

customElements.define('app-bar', AppBar);
