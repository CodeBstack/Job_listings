export default class App {
  _parentElement = document.querySelector('.container');
  data;
  constructor(data) {
    data.forEach(data => {
      this.render(data);
    });
  }

  render(data) {
    this.data = data;
    // console.log(this.data);

    const html = `
      <div class="item item-1">
            <div class="item-img">
              <img src="${this.data.logo}" alt="" />
            </div>
  
            <div class="item-content">
              <div class="company">
                <h3 class="company-name">${this.data.company}</h3>
                <p><span class="new">${this.data.new ? 'NEW!' : ''}</span></p>
                <p><span class="featured">${
                  this.data.featured ? 'FEATURED' : ''
                }</span></p>
              </div>
              <h3 class="position">${this.data.position}</h3>
              <ul class="infos">
                <li class="info">${this.data.postedAt}</li>
                <li class="info">${this.data.contract}</li>
                <li class="info">${this.data.location}</li>
              </ul>
            </div>
            <hr />
            <div class="right-items">
              <div class="personal-info">
                <div><h3 class="role">${this.data.role}</h3></div>
                <div><h3 class="level">${this.data.level}</h3></div>
              </div>
  
              <div class="languages">
              <div><h3 class="language">${
                this.data.languages.length >= 1 ? this.data.languages[0] : ''
              }</h3></div>
              <div><h3 class="language">${
                this.data.languages.length >= 2 ? this.data.languages[1] : ''
              }</h3></div>
              <div><h3 class="language">${
                this.data.languages.length === 3 ? this.data.languages[2] : ''
              }</h3></div>
              </div>
              <div class="tools">
              <div><h3 class="tool">${
                this.data.tools.length >= 1 ? this.data.tools[0] : ''
              }</h3></div>
              <div><h3 class="tool">${
                this.data.tools.length >= 2 ? this.data.tools[1] : ''
              }</h3></div>
              </div>
            </div>
          </div>
      `;

    this._parentElement.insertAdjacentHTML('beforeend', html);
  }
}
