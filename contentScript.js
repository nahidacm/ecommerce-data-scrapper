(function(){
    let product_data = new Object()

    let short_desc_li = document.querySelectorAll('#feature-bullets ul li:not(#replacementPartsFitmentBullet) span.a-list-item');
    let short_desc = '<ul>'
    short_desc_li.forEach(function(item){
      short_desc += '<li>'+item.innerText+'</li>'
    })
    short_desc += '</ul>'
    product_data.short_desc = short_desc

    let tech_spec = '<table>'
    let tech_spec_summery = document.querySelectorAll('#productDetails_techSpec_section_1 tr')
    console.log(tech_spec_summery)
    tech_spec_summery.forEach(function(row){
        tech_spec += '<tr><th>'+row.cells[0].textContent+'</th><td>'+row.cells[1].textContent+'</td></tr>'
    })
    
    let tech_spec_detail = document.querySelectorAll('#productDetails_techSpec_section_2 tr')
    tech_spec_detail.forEach(function(row){
        tech_spec += '<tr><th>'+row.cells[0].textContent+'</th><td>'+row.cells[1].textContent+'</td></tr>'
    })
    product_data.tech_spec = tech_spec
    
    console.log(product_data)

    return product_data
  })()