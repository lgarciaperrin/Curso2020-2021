
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

$('#district').on('change', (e) => {
  $('#neighborhood').val('');
  if(camposCorrect($(e.target).val()) === 1) {
        M.toast({html: 'The district doesn\'t exist'})
        return;
  };
  const container = $('#list-neighborhood');
  container.empty();
  neighborhoods[$(e.target).val()].sort().forEach((neighborhood) => {
    container.append(`<option value="${neighborhood}">${neighborhood}</option>`)
  })
})

$('#neighborhood').on('change', (e) => {
  const neighborhood = $(e.target).val();
  if(neighborhood === '') return;
  console.log(neighborhood);
  const districts = Object.keys(neighborhoods);
  let selectDistrict;
  for(let i = 0; i < districts.length; i++) {
    if(neighborhoods[districts[i]].includes(neighborhood)){
      selectDistrict = districts[i];
      return;
    }
  }
  console.log(selectDistrict)
  if(selectDistrict) {
    $('#district').val(selectDistrict);
  } else {
    M.toast({html: 'The neighborhood doesn\'t exist'})
  }
})

$('#filtrar').submit((e) => {
  e.preventDefault();
  const district = $('#district').val();
  const neighborhood = $('#neighborhood').val();
  const company = $('#company').val();
  const correct = camposCorrect(district, neighborhood, company);
  console.log(correct)
  if(correct === 1) {
    M.toast({html: 'The district doesn\'t exist'})
    return;
  }
  if(correct === 2) {
    M.toast({html: 'The neighborhood doesn\'t exist'})
    return;
  }
  if(correct === 3) {
    M.toast({html: 'The company doesn\'t exist'})
    return;
  }
  console.log(district)
  console.log(neighborhood)
  console.log(company)
  fetch(`http://127.0.0.1:5000/scooters?district=${district}&neighborhood=${neighborhood}&company=${company}`, {
        method: 'GET',
        headers: {
              'Access-Control-Allow-Origin': '*',
        } 
  })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data);
      // TODO: poner dos botones al link de wikidata: district y neighborhood (abrir una nueva pesta??a)
      const container = $('.card-datos .card-content');
      container.empty();
      container.append(`<a href="${data.wikidataDistrict}" target="_blank" class="waves-effect waves-teal btn pink-primary">Wikidata District</a>`)
      container.append(`<a href="${data.wikidataNeighbourhood}" target="_blank" class="waves-effect waves-teal btn pink-primary">Wikidata neighbourhood</a>`)
      renderTable(data.companies, container);
      changeGoogleMap(data.coordNB[1], data.coordNB[0], 16);
    })
})

$('.clear').click(() => {
  $('#filtrar').trigger("reset");
  changeGoogleMap();
  $('.card-datos .card-content').empty();
});

const neighborhoods = {
  'Arganzuela': ['Imperial', 'Las Acacias', 'La Chopera', 'Legazpi', 'Las Delicias', 'Palos de Moguer', 'Atocha'],
  'Carabanchel': ['Comillas', 'Opa??el', 'San Isidro', 'Vista Alegre', 'Puerta Bonita', 'Buenavista', 'Abrantes'],
  'Barajas': ['Corralejos', 'Tim??n', 'Casco Hist??rico de Barajas', 'Aeropuerto', 'Alameda de Osuna'],
  'Centro': ['Palacio', 'Embajadores', 'Cortes', 'Justicia', 'Universidad', 'Sol'],
  'Chamart??n': ['El Viso', 'Prosperidad', 'Ciudad Jard??n', 'Hispanoam??rica', 'Nueva Espa??a', 'Castilla'],
  'Chamber??': ['Gaztambide', 'Arapiles', 'Trafalgar', 'Almagro', 'R??os Rosas', 'Vallehermoso'],
  'Ciudad Lineal': ['Ventas', 'Pueblo Nuevo', 'Quintana', 'Concepci??n', 'San Pascual', 'San Juan Bautista', 'Colina', 'Atalaya', 'Costillares'],
  'Hortaleza': ['Palomas', 'La Piovera', 'Canillas', 'Pinar del Rey', 'Ap??stol Santiago', 'Valdefuentes'],
  'Fuencarral-El Pardo': ['El Pardo', 'Fuentelarreina', 'Pe??agrande', 'El Pilar', 'La Paz', 'Valverde', 'Mirasierr', 'El Goloso'],
  'Moncloa-Aravaca': ['Casa de Campo', 'Arg??elles', 'Ciudad Universitaria', 'Valdezarza', 'Valdemar??n', 'El Plant??o', 'Aravaca'],
  'Moratalaz': ['Pavones', 'Horcajo', 'Marroquina', 'Media Legua', 'Fontarr??n', 'Vinateros'],
  'Latina': ['Los C??rmenes', 'Barrio de Puerta del ??ngel', 'Lucero', 'Aluche', 'Campamento', 'Cuatro Vientos', 'Las ??guilas'],
  'Puente de Vallecas': ['Entrev??as', 'San Diego', 'Palomeras Bajas', 'Palomeras Sureste', 'Portazgo', 'Numancia'],
  'Retiro': ['Pac??fico', 'Adelfas', 'Estrella', 'Ibiza', 'Jer??nimos', 'Ni??o Jes??s',],
  'Salamanca': ['Recoletos', 'Goya', 'Fuente del Berro', 'La Guindalera', 'Lista', 'Castellana'],
  'San Blas': ['Salvador', 'Canillejas', 'Rejas', 'Rosas', 'Arcos', 'Amposta', '
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

$('#district').on('change', (e) => {
  $('#neighborhood').val('');
  if(camposCorrect($(e.target).val()) === 1) {
        M.toast({html: 'The district doesn\'t exist'})
        return;
  };
  const container = $('#list-neighborhood');
  container.empty();
  neighborhoods[$(e.target).val()].sort().forEach((neighborhood) => {
    container.append(`<option value="${neighborhood}">${neighborhood}</option>`)
  })
})

$('#neighborhood').on('change', (e) => {
  const neighborhood = $(e.target).val();
  if(neighborhood === '') return;
  console.log(neighborhood);
  const districts = Object.keys(neighborhoods);
  let selectDistrict;
  for(let i = 0; i < districts.length; i++) {
    if(neighborhoods[districts[i]].includes(neighborhood)){
      selectDistrict = districts[i];
      return;
    }
  }
  console.log(selectDistrict)
  if(selectDistrict) {
    $('#district').val(selectDistrict);
  } else {
    M.toast({html: 'The neighborhood doesn\'t exist'})
  }
})

$('#filtrar').submit((e) => {
  e.preventDefault();
  const district = $('#district').val();
  const neighborhood = $('#neighborhood').val();
  const company = $('#company').val();
  const correct = camposCorrect(district, neighborhood, company);
  console.log(correct)
  if(correct === 1) {
    M.toast({html: 'The district doesn\'t exist'})
    return;
  }
  if(correct === 2) {
    M.toast({html: 'The neighborhood doesn\'t exist'})
    return;
  }
  if(correct === 3) {
    M.toast({html: 'The company doesn\'t exist'})
    return;
  }
  console.log(district)
  console.log(neighborhood)
  console.log(company)
  fetch(`http://127.0.0.1:5000/scooters?district=${district}&neighborhood=${neighborhood}&company=${company}`, {
        method: 'GET',
        headers: {
              'Access-Control-Allow-Origin': '*',
        } 
  })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data);
      // TODO: poner dos botones al link de wikidata: district y neighborhood (abrir una nueva pesta??a)
      const container = $('.card-datos .card-content');
      container.empty();
      container.append(`<a href="${data.wikidataDistrict}" target="_blank" class="waves-effect waves-teal btn pink-primary">Wikidata District</a>`)
      container.append(`<a href="${data.wikidataNeighbourhood}" target="_blank" class="waves-effect waves-teal btn pink-primary">Wikidata neighbourhood</a>`)
      renderTable(data.companies, container);
      changeGoogleMap(data.coordNB[1], data.coordNB[0], 16);
    })
})

$('.clear').click(() => {
  $('#filtrar').trigger("reset");
  changeGoogleMap();
  $('.card-datos .card-content').empty();
});

const neighborhoods = {
  'Arganzuela': ['Imperial', 'Las Acacias', 'La Chopera', 'Legazpi', 'Las Delicias', 'Palos de Moguer', 'Atocha'],
  'Carabanchel': ['Comillas', 'Opa??el', 'San Isidro', 'Vista Alegre', 'Puerta Bonita', 'Buenavista', 'Abrantes'],
  'Barajas': ['Corralejos', 'Tim??n', 'Casco Hist??rico de Barajas', 'Aeropuerto', 'Alameda de Osuna'],
  'Centro': ['Palacio', 'Embajadores', 'Cortes', 'Justicia', 'Universidad', 'Sol'],
  'Chamart??n': ['El Viso', 'Prosperidad', 'Ciudad Jard??n', 'Hispanoam??rica', 'Nueva Espa??a', 'Castilla'],
  'Chamber??': ['Gaztambide', 'Arapiles', 'Trafalgar', 'Almagro', 'R??os Rosas', 'Vallehermoso'],
  'Ciudad Lineal': ['Ventas', 'Pueblo Nuevo', 'Quintana', 'Concepci??n', 'San Pascual', 'San Juan Bautista', 'Colina', 'Atalaya', 'Costillares'],
  'Hortaleza': ['Palomas', 'La Piovera', 'Canillas', 'Pinar del Rey', 'Ap??stol Santiago', 'Valdefuentes'],
  'Fuencarral-El Pardo': ['El Pardo', 'Fuentelarreina', 'Pe??agrande', 'El Pilar', 'La Paz', 'Valverde', 'Mirasierr', 'El Goloso'],
  'Moncloa-Aravaca': ['Casa de Campo', 'Arg??elles', 'Ciudad Universitaria', 'Valdezarza', 'Valdemar??n', 'El Plant??o', 'Aravaca'],
  'Moratalaz': ['Pavones', 'Horcajo', 'Marroquina', 'Media Legua', 'Fontarr??n', 'Vinateros'],
  'Latina': ['Los C??rmenes', 'Barrio de Puerta del ??ngel', 'Lucero', 'Aluche', 'Campamento', 'Cuatro Vientos', 'Las ??guilas'],
  'Puente de Vallecas': ['Entrev??as', 'San Diego', 'Palomeras Bajas', 'Palomeras Sureste', 'Portazgo', 'Numancia'],
  'Retiro': ['Pac??fico', 'Adelfas', 'Estrella', 'Ibiza', 'Jer??nimos', 'Ni??o Jes??s',],
  'Salamanca': ['Recoletos', 'Goya', 'Fuente del Berro', 'La Guindalera', 'Lista', 'Castellana'],
  'San Blas': ['Salvador', 'Canillejas', 'Rejas', 'Rosas', 'Arcos', 'Amposta', 'Hellin', 'Simancas'],
  'Tetu??n': ['Bellas Vistas', 'Cuatro Caminos', 'Castillejos', 'Almenara', 'Valdeacederas', 'Berruguete'],
  'Usera': ['Orcasitas', 'Orcasur', 'San Ferm??n', 'Almendrales', 'Moscard??', 'El Zof??o', 'Pradolongo'],
  'Vic??lvaro': ['Casco Hist??rico de Vic??lvaro', 'Ambroz'],
  'Villaverde': ['Villaverde Alto, Casco Hist??rico de Villaverde', 'San Crist??bal', 'Butarque', 'Los Rosales', 'Los ??ngeles'],
  'Villa de Vallecas': ['Casco Hist??rico de Vallecas', 'Santa Eugenia'],
}

function renderTable(companies, container) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  th1.innerText = 'Company';
  th2.innerText = 'Scooters';
  tr.appendChild(th1);
  tr.appendChild(th2);
  thead.appendChild(tr);
  table.appendChild(thead)
  companies.forEach((company) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerText = Object.keys(company)[0]
    td2.innerText = Object.values(company)[0]
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody)
  container.append(table);
}

function camposCorrect(district, neighborhood, company) {
  if(!Object.keys(neighborhoods).includes(district)) return 1;
  if(!Object.values(neighborhoods).flat().includes(neighborhood)) return 2;
  if(!['All', 'Acciona', 'Taxify', 'Koko', 'Ufo', 'Rideconga', 'Flash', 'Lime', 'Wind', 'Bird', 'RebyRides', 'Movo', 'Mygo', 'JumpUber', 'SjvConsulting'].includes(company)) return 3;
  return 0; 
}

function changeGoogleMap(y = 40.5281307, x = -3.7000000, zoom = 11) {
  console.log(x, y, zoom)
  document.getElementById('gmap_canvas').src = `https://maps.google.com/?ll=${y},${x}&z=${zoom}&t=m&output=embed`
}