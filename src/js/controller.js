import view from "./view.js";
// import * as model from "./model.js";

const data2 = async function () {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};
const data = await data2();
new view(data);

// data.forEach((data) => {
//   console.log(data);
//   //   view.render(data);
// });

// const render = function (data) {
//   const html = `
//     <div class="item item-1">
//           <div class="item-img">
//             <img src="${data.logo}" alt="" />
//           </div>

//           <div class="item-content">
//             <div class="company">
//               <h3 class="company-name">${data.company}</h3>
//               <p><span class="new">${data.new ? "NEW!" : ""}</span></p>
//               <p><span class="featured">${
//                 data.featured ? "FEATURED" : ""
//               }</span></p>
//             </div>
//             <h3 class="position">${data.position}</h3>
//             <ul class="infos">
//               <li class="info">${data.postedAt}</li>
//               <li class="info">${data.contract}</li>
//               <li class="info">${data.location}</li>
//             </ul>
//           </div>
//           <hr />
//           <div class="right-items">
//             <div class="personal-info">
//               <div><h3 class="role">${data.role}</h3></div>
//               <div><h3 class="level">${data.level}</h3></div>
//             </div>

//             <div class="languages">
//             <div><h3 class="language">${
//               this.data.languages.length >= 1 ? this.data.languages[0] : ""
//             }</h3></div>
//             <div><h3 class="language">${
//               this.data.languages.length >= 2 ? this.data.languages[1] : ""
//             }</h3></div>
//             <div><h3 class="language">${
//               this.data.languages.length === 3 ? this.data.languages[2] : ""
//             }</h3></div>
//             </div>
//             <div class="tools">
//             <div><h3 class="tool">${
//               this.data.tools.length >= 1 ? this.data.tools[0] : ""
//             }</h3></div>
//             <div><h3 class="tool">${
//               this.data.tools.length >= 2 ? this.data.tools[1] : ""
//             }</h3></div>
//             </div>
//           </div>
//         </div>
//     `;

//   container.insertAdjacentHTML("beforeend", html);
// };
