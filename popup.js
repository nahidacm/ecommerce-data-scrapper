// Runs script when popup is opened
chrome.tabs.executeScript({file: 'contentScript.js'}, function(result) {
  const product_data = result[0]
  
  //Title
  let title = document.querySelector('#title p')
  title.innerHTML = product_data.title
  title.addEventListener('click',function(){
    navigator.clipboard.writeText(product_data.title)
  })

  //Short Description
  let short_desc = document.querySelector('#short_desc p')
  short_desc.innerHTML = product_data.short_desc
  short_desc.addEventListener('click',function(){
    navigator.clipboard.writeText(product_data.short_desc)
  })

  //Technical Specification
  let tech_spec = document.querySelector('#tech_spec p')
  tech_spec.innerHTML = product_data.tech_spec
  tech_spec.addEventListener('click',function(){
    navigator.clipboard.writeText(product_data.tech_spec)
  })

  //Images
  imageRender(product_data.images)
});

function imageRender(srcArray){
  srcArray.forEach(src => {
    let newImg = document.createElement('img')
    newImg.src = src
    newImg.addEventListener('click',function(){
      chrome.downloads.download({url: newImg.src})
    })
    document.querySelector('#images p').appendChild(newImg)
  });
}