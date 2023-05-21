import React from "react";
import './about.css';


const About = () => {
return (
	<div className="container">
		 <div class="section white">
      <div class="row container">
        <h2 class="header our_goal">About Us</h2>
      </div>
    </div>
		<div class="parallax-container">
      <div class="parallax"><img src="/javascriptbook.jpg" /></div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header our_goal">The Goal</h2>
        <p class="grey-text text-darken-3 lighten-3">Our goal with bookit has been and always will be to allow students...</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="/javascriptbook.jpg" /></div>
    </div>
	<div class="section white">
      <div class="row container">
        <h2 class="header our_goal">The Story</h2>
        <p class="grey-text text-darken-3 lighten-3">Bookit started as a ...</p>
      </div>
    </div>
	<h1>about</h1>
	<div className="row">
		<div className="col s3 about-img">
			<img src="/javascriptbook.jpg" alt="javascriptbook" />
			<img src="/javascriptbook.jpg" alt="javascriptbook" />
			<img src="/javascriptbook.jpg" alt="javascriptbook" />
		</div>
		<div className="col s9">
			<p>Hvad er Lorem Ipsum?
Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.

Hvorfor bruger vi det?
Det er en kendsgerning, at man bliver distraheret af læsbart indhold på en side, når man betragter dens layout. Meningen med at bruge Lorem Ipsum er, at teksten indeholder mere eller mindre almindelig tekstopbygning i modsætning til "Tekst her - og mere tekst her", mens det samtidigt ligner almindelig tekst. Mange layoutprogrammer og webdesignere bruger Lorem Ipsum som fyldtekst. En søgning på Lorem Ipsum afslører mange websider, som stadig er på udviklingsstadiet. Der har været et utal af variationer, som er opstået enten på grund af fejl og andre gange med vilje (som blandt andet et resultat af humor).


Hvor kommer det fra?
I modsætning til hvad mange tror, er Lorem Ipsum ikke bare tilfældig tekst. Det stammer fra et stykke litteratur på latin fra år 45 f.kr., hvilket gør teksten over 2000 år gammel. Richard McClintock, professor i latin fra Hampden-Sydney universitet i Virginia, undersøgte et af de mindst kendte ord "consectetur" fra en del af Lorem Ipsum, og fandt frem til dets oprindelse ved at studere brugen gennem klassisk litteratur. Lorem Ipsum stammer fra afsnittene 1.10.32 og 1.10.33 fra "de Finibus Bonorum et Malorum" (Det gode og ondes ekstremer), som er skrevet af Cicero i år 45 f.kr. Bogen, som var meget populær i renæssancen, er en afhandling om etik. Den første linie af Lorem Ipsum "Lorem ipsum dolor sit amet..." kommer fra en linje i afsnit 1.10.32.</p>
		</div>
	</div>
	</div>
	
);
};

export default About;
