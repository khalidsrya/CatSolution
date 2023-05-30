class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-5">
            <a class="navbar-brand" href="#"><img src="../image/logo2.png" alt="Logo Kucing"/></a>
          </div>

          <div class="col-5 contact">
            <p>
              <i class="fa fa-map-marker contact-link" aria-hidden="true"></i>
              Jalan Semangka No.5B, Bandar Lampung, lampung, 3455
            </p>

            <p>
              <i class="fa fa-envelope contact-link" aria-hidden="true"></i>
              catSolution@gmail.com
            </p>

            <div class="row justify-content-between">
              <div class="col-5">
                <p>
                  <i
                    class="fa fa-phone fa-flip-horizontal contact-link"
                    aria-hidden="true"
                  ></i>
                  072 548 256
                </p>
              </div>

              <div class="col-5">
                <p>
                  <i
                    class="ri-whatsapp-fill ri-lg contact-link"
                    aria-hidden="true"
                  ></i>
                  +62 8773 4129 231
                </p>
              </div>
            </div>

            <div class="sosmed">
              <i
                class="ri-facebook-box-fill ri-xl sosmed-link"
                aria-hidden="true"
              ></i>
              <i
                class="ri-youtube-fill ri-xl sosmed-link"
                aria-hidden="true"
              ></i>
              <i class="ri-instagram-fill ri-xl sosmed-link"></i>
            </div>
          </div>
        </div>

        <hr style="color: #ebe8e1;">

        <div class="row justify-content-between copyright">
          <div class="col">
            <p>Copyright CatSolution © 2023 All Rights Reserved</p>
          </div>
          <div class="col-4">
            <p>Website Design By Team C23-M4088.</p>
          </div>
        </div>
      </div>
    </footer>
    
                `;
  }
}

customElements.define('footer-section', Footer);
