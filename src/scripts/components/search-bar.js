class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .container {
            font-family: "nunito", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20vh;
          }
          .search-container > input {
            width: 500px;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid cornflowerblue;
            font-weight: bold;
            border-radius: 20px;
          }
          .input-group-text {
            max-width: 800px;
            width: 500px;
            background-color: transparent;
            border-right: 0;
          }
          .search-container > button {
            width: 150px;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #2a4f82;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 20px;
            color: white;
          }
          @media screen and (max-width: 550px){
            .search-container {
              flex-direction: column;
              position: static;
            }
            .search-container > input {
              width: 100%;
              margin-bottom: 12px;
            }
            .search-container > button {
              width: 100%;
            }</style>
      <div class="container">
      <div id="search-container" class="search-container">
      <input placeholder="Search Article" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">Search</button>
    </div>
      </div>
      </div>
      `;

        this.shadowDOM.querySelector('#searchButtonElement')
            .addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);