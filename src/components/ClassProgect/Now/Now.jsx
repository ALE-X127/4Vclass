
import React from 'react';
import { Grid } from '@mui/material';
import ClassmateInformation from './ClassmateInformation/ClassmateInformation';
import './Now.css';

import miwo from '../../../assets/miwo.jpg';
import gabig from '../../../assets/gabi.jpg';
import naskos from '../../../assets/naskos.jpg';
import az from '../../../assets/az.jpg';
import stoan from '../../../assets/stoan.jpg';
import nikola from '../../../assets/nikola.jpg';
import krasi from '../../../assets/krasi.jpg';
import naskoz from '../../../assets/naskoz.jpg';
import viki from '../../../assets/viki.jpg';
import daana from '../../../assets/daana.jpg';
import iva from '../../../assets/iva.jpg';
import markata from '../../../assets/markata.jpg';
import petro from '../../../assets/petro.jpg';
import dani from '../../../assets/dani.jpg';
import gabis from '../../../assets/gabis.jpg';
import vara from '../../../assets/vara.jpg';
import mawa from '../../../assets/mawa.jpg';
import lorak from '../../../assets/lorak.jpg';
import ivanina from '../../../assets/ivanina.jpg';
import lorai from '../../../assets/lorai.jpg';
 import vesi from '../../../assets/vesi.jpg';
 import hr from '../../../assets/hr.jpg';
 import ml from '../../../assets/ml.jpg';
import nk from '../../../assets/nk.jpg';
const Now = () => {
  const classmates = [
    { img: az, grade: 5, name: 'Алекс' ,text:'e отличник той се занимава с програмиране.Той много мил.Неговите най-добри приятели са Стоянчо, Марянчо и Краси.'},// da
    { img: naskos, grade: 5, name: 'Наско С.' ,text:'e отличник той ходи на английски.Той е много весел.Неговият най-добър приятел е Виктор.'},//da
    { img: naskoz, grade: 5, name: 'Наско З.',text:'е забавен той ходи на английски.Той много обича да прави щуротии' },//da
    { img: vesi , grade: 5, name: 'Веси' ,text:'e отличничка изкара 99т. на матурата по математика.Тя ходи на Мъжоретки'},//da
    { img: viki, grade :5, name: 'Виктор',text:'e винаги усмихнат.Той е ходил на Карате.Най-добрият му приятел е Наско С.' },//da
    { img: vara, grade: 5, name: 'Вяра' ,text:'e забавна.Тя ходи на Мъжоретки.Нейните най-добри приятелки са всичките момичета'},//da
    { img: gabig, grade: 5, name: 'Габи Г.',text:'e отличничка.Изкара на матурите по мат. 100т.Мноого усмихната.Нейните BFF са Веси и Лоритата' },// da
    { img: gabis, grade: 5, name: 'Габи С.' ,text:'e малка но има усмифка чак до небесата.Нейните BFF са Вяра и Лоритата'},//da
    { img: dani, grade: 5, name: 'Дани' ,text:'e отличник но доста  си стой на телефина.Нй добри приятели са му всички момчета'},//da
    { img: daana, grade: 5, name: 'Даяна',text:'e отличничка.Но обича да рисува.Нейния най-добър приятел е Краси a BFF са всички момичета ' },//da
    { img: iva, grade: 5, name: 'Ива' ,text:'e отличничка тя много харесва да рисува като Даяна, защото са BFF'},//da
    { img: ivanina, grade: 5, name: 'Иванина',text:'e отличничка и тя има талант за писане на стихотворения.Има 100т. по мат.' },//da
    { img: krasi, grade: 5, name: 'Краси',text:'e отличник той е добър приятел с Даяна, но най-добър приятел му е Алекс' },//da
    { img: lorai, grade: 5, name: 'Лора И.',text:'e отличничка искара 100т. на матурата по мат.Нейните BFF са всички момичета.Има брат Дани' },//da
    { img: lorak, grade: 5, name: 'Лора К.',text:'e отличничка.Висока е.нейните приятелки са всички момичета' },//da
    { img: markata, grade: 5, name: 'Мариян',text:'e забавен.Той обича да излиза с момичета.Мечтата му е д а стане футболист.Най-добър приятел Алекс' },//da
    { img: mawa, grade: 5, name: 'Маша',text:'e отличничка тя е дошла при нас от далечна Украйна.На нея много добре й се получава да говори на Български' },//da
    { img: ml, grade: 5, name: 'Милена',text:'e отличничка и художничка.Тя иска да стане музикантка.Ще се мести в друго училище' },//da
    { img: miwo, grade: 5, name: 'Мишо',text:'e винаги усмихнат.Тъжно ти е погледни го той ще е в някаква луда поза и ще те разсмее.' },// да
    { img: nikola, grade: 5, name: 'Никола',text:'e отличник той е почти най-добър във всяка видео игра.Но обича да се лигави. ' },// da
    { img: nk, grade: 5, name: 'Никол' ,text:'e отличничка.Нейните най-добри приятелки са всички момичета.Обича да командира.'},//da
    { img: petro, grade: 5, name: 'Петьо' ,text:'e отличник той е много забавен.Иска да стане футболист.Той е много добър по футбол.'},//da
    { img: stoan, grade: 5, name: 'Стоян' ,text:'e отличник но е винаги спокоен.С него е много приятно да се говори.Винаги те разбура и те изслушва'},//da
    { img: hr, grade: 5, name: 'Християна' ,text:'e винаги осмихната.Нейната най-добра приятелка е Ника.Заедно обичат да командват.'},//da
  ];

  return (
    <Grid
      container
      spacing={3}
      padding={3}
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      {classmates.map((element, index) => (
        <Grid item xs={10} sm={5} md={4} lg={3} xl={2.5} key={index}>
          <ClassmateInformation
            img={element.img}
            grade={element.grade}
            name={element.name}
            text={element.text}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Now;