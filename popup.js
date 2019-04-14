chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  tab_url = tabs[0].url
  var excute_script
  
  let scrapables = [
    'amazon',
    'computerdealsdirect'
  ]

  scrapables.forEach(function(site_name){
    if(RegExp('https?:\/\/(www.)?('+site_name+')\..{2,}\/.*').test(tab_url)){
      excute_script = 'content-scripts/'+site_name+'-scrapper.js'
    }
  })

  if(excute_script){
    console.log(excute_script)
    chrome.tabs.executeScript({file: excute_script}, function(result) {
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
  }
})
