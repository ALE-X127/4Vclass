import React from 'react';

const milestones = [
  { year: '1921', text: 'Audi Typ K е първият немски сериен автомобил с ляв волан' },
  { year: '1975', text: 'Двигател с механично впръскване на бензин в Audi 80 GT/E' },
  { year: '1977', text: 'Петцилиндров бензинов двигател в Audi 100 С2' },
  { year: '1980', text: 'Системата quattro' },
  { year: '1983', text: 'Първи немски производител с разрешение за катализатор' },
  { year: '1986', text: 'Всички коли на Audi са галванизирани с 6 години гаранция (днес – 12)' },
  { year: '1986', text: 'Procon-ten – алтернатива на еърбеговете със стоманени въжета' },
  { year: '1988', text: 'Audi V8 – първата лимузина с 4x4 задвижване в серийно производство' },
  { year: '1989', text: 'Първият TDI двигател – Audi 100 C3, 2.5-литров, 5-цилиндров' },
  { year: '1994', text: 'Audi Space Frame – алуминиево купе, използвано в Audi A8' },
  { year: '1999', text: 'Multitronic – безстепенна скоростна кутия в Audi A6 (4B)' },
  { year: '2001', text: 'Audi A2 1.2 TDI – първият „трицилиндров“ автомобил с пет врати' },
  { year: '2001', text: 'Двигател FSI – технология за впръскване под налягане' },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Исторически моменти на Audi</h1>
      <div className="relative border-l border-gray-300 pl-6">
        {milestones.map((item, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-[-9px] top-1.5"></div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-blue-700">{item.year} г.</h3>
              <p className="text-gray-700 mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;