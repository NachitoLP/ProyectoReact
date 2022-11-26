import React from 'react'
import Card from "../Card/Card";
import "./cardcontainer.scss";

export default function CardContainer() {
  return (
    <div className='div_cards'>
      <Card 
            texto = "Zapatillas"
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bQsnpkp5OZT5cjYzZHRDCFdXHjDzIUr0jygqnq9jiVTgsSDB5-gdnUCv9NXhlI7fhmM&usqp=CAU"
            precio = "$500"
          />
          <Card 
            texto = "Pantalones"
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6WpSWTXmJyYOi1K0K7mEUIbQxipJt6mv7g&usqp=CAU"
            precio = "$900"
          />
          <Card 
            texto = "Gorra"
            img = "https://newsport.vteximg.com.br/arquivos/ids/14714664-455-588/HL9326-A.jpg?v=638023843320900000"
            precio = "$200"
          />
          <Card 
            texto = "Remera"
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOWwdD1Phq9JeBbkUp8qnDwUdwfhqt_30aQ&usqp=CAU"
            precio = "$400"
          />
          <Card 
            texto = "Guantes"
            img = "https://www.clicksport.com.ar/4856-large_default/guantes-nike-therma-glove-running-hombre-.jpg"
            precio = "$200"
          />
          <Card 
            texto = "Lentes"
            img = "https://d3ugyf2ht6aenh.cloudfront.net/stores/113/564/products/lentes-de-sol-benson-black-afec9bb5130b6e6c6116462583586747-1024-1024.jpg"
            precio = "$450"
          />
    </div>
  )
}
