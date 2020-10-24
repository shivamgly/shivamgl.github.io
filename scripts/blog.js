const highlightElem = (elem) => {
  if (!elem.classList.contains('highlight')) {
    elem.classList.add('highlight');
  }
};

const unHighlightElem = (elem) => {
  if (elem.classList.contains('highlight')) {
    elem.classList.remove('highlight');
  }
}

const main = document.getElementById("main");
const keyPointList = document.getElementById("kp-list");

for (mainChild of main.children) {
  const tag = mainChild.getAttribute('tag');
  const id = mainChild.getAttribute('id');
  if (tag && id) {
    const link = document.createElement('a');
    link.href = "#" + id;
    link.innerText = tag;
    const listItem = document.createElement('li');
    listItem.appendChild(link);
    keyPointList.appendChild(listItem);
    const keyPointContent = mainChild.nextElementSibling;
    link.addEventListener('click', () => {
      highlightElem(keyPointContent);
      setTimeout(() => {unHighlightElem(keyPointContent)}, 2500);
    });
  }
}

// for (keyPoint of keyPoints) {
//   const keyPointId = keyPoint.getAttribute('href').replace("#", '');
//   const keyPointElem = document.getElementById(keyPointId);
//   if (keyPointElem) {
//     const keyPointContent = keyPointElem.nextElementSibling;
//     console.log(keyPointContent);
//     keyPoint.addEventListener('click', () => {
//       highlightElem(keyPointContent);
//       setTimeout(() => {unHighlightElem(keyPointContent)}, 2500);
//     });
//   }
// }


