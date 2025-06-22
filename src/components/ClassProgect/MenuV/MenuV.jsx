import React from 'react';
import img from "../../../assets/gabi.jpg";
import slmat from "../../../assets/slmat.jpg";
import "./MenuV.css";

const MenuV = () => {
  return (
    <div className="menu-layout">
      <div className="side-images">
        <img src={slmat} alt="1" />
        <img src={img} alt="2" />
        <img src={img} alt="3" />
      </div>

      <div className='text-poem'>
         <p  className="center-textOne">
        Четвърти в клас
        </p>
        <p className="center-text">
        Четири години – като миг отлетяха,
игри, усмивки – в сърцата останаха.
Със смях и пакости, с уроци, мечти,
пораснахме всички – и аз, и ти.

4.в – каква дружна дружина!
Като едно сърце, като една родина.
Помагахме си – ръка за ръка,
бяхме семейство в всяка беда.

Неусетно се смениха сезони,
пролет след зима, звънливи камбани.
А сякаш вчера за пръв път в клас влязохме —
сега вече спомени със себе си вземаме.

Благодарим за всеки ден, всяка следа —
че бяхме заедно, че бяхме деца.
4.в – останеш ли в миналото днес,
в сърцето ни винаги ще имаш адрес.
        </p>
      </div>

      <div className="side-images">
        <img src={img} alt="4" />
        <img src={img} alt="5" />
        <img src={img} alt="6" />
      </div>
    </div>
  );
};

export default MenuV;