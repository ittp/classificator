

let kyocera = {
  type: "cartridge",
  type: "original",
  manufacturer: "KYOCERA",
  model: "TK-1140",
  capacity: 7200,
  range: "0.3",
  capability: {
      vendor: "Kyocera",
      group: "Mita Ecosys",
      models: ["M2040dn", "M2540dn", "M2540dw", "M2640dwi"]
      
  }
}


let models = {

  kyocera: { 
    "M2040dn": "" 
  }
}

let printer = () => {

  
}

let groups = {
  KYOCERA: {},
  { 1: ["", "Kyocera Mita Ecosys ", "Kyocera Mita Ecosys ", "Kyocera Mita Ecosys "] }

}


let p = {
  l: {
    c: "Картридж",
    d: "Блок термозакрепления (узел термозакрепления, фьюзерный модуль, печь)",
    r: "Ролики"
  }
}


let PrintTypes = {
  p: "Принтер",
  mfp: "Многофункциональное устройство",
  s: "Сканер",
  hs: "Ручной сканер",
  ts: "Планшетный сканер",
  tp: "Термопринтер",
}

// (p.type == 0 ? 'лазерного устройства' : 'струйного устройства')

// [{ name: 'картриджж', '

let parts = {
  c: { 
    l: "Картридж для лазерного устройства"
  },
  drum: p.l.d
  
  types: []
}

let text = (key, type) => parts.[type] + ' тип ' + p.key


// types: 1 - original, 2 - capability
let data = [  { id: 1, key: 23, 
               deviceGroup: "HP.16",
               cartridge: { 
                 type: "cartridge", 
                 category: 1, 
                 capability: 1, 
                 specs: [],
                 subtype: 1,
                 code: 606, 
                 key: 23, 
                 devices: ["Xerox"] 
               }
               ]


// для лазерного устройства
               
               
               
               /*
               
Тип: Оригинальный
Технология печати: Лазерная
Цвет: Черный
Емкость: Стандартная
Ресурс при 5% заполнении страницы, страница: не менее 7200
Совместимость: 
Соответствие нормативно-технической документации: ТУ производителя
               */


