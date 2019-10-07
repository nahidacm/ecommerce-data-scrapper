(function(){
    let product_data = new Object()

    //Title
    let title = document.getElementsByClassName('productView-title')[0].innerText
    product_data.title = title

    //Short description
    let short_desc = document.querySelector('.productView-description-tabContent ul').outerHTML
    product_data.short_desc = short_desc

    //technical specification
    product_data.tech_spec = short_desc

    //Images
    let images = document.querySelectorAll('.productView-imageCarousel-main-item img')
    let sourceArray = Array.from(images).map(function(image){
      return image.src.split('?')[0]
    })
    product_data.images = sourceArray

    return product_data
  })()