(() => {
  console.log('Javascript Firing!');

  var iconSet = document.querySelectorAll('svg');

  iconSet.forEach(icon => icon.addEventListener('click',logThisIcon));

  function logThisIcon() {
    console.log('An icon was clicked!', this.id);
  }

  iconSet.forEach(icon => icon.addEventListener('mouseover', iconZoom));

  function iconZoom(e) {
    this.style.width = '125%';
    this.style.height = '125%';
    this.setAttribute("class", "icon-zoomed");
  }

  iconSet.forEach(icon => icon.addEventListener('mouseout', iconNormal));

  function iconNormal(e) {
    this.style.width = '70px';
    this.style.height = '70px';
    this.setAttribute("class", "icon-normal");
  }
})();
