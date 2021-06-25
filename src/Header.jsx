export default () => { return (
    <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
		<div class="container">
		<a href="#" class="navbar-brand"><strong>Odinsario</strong></a>
		<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menuitems" aria-controls="menuitems" aria-expanded="false" arial-label="Main Menu"><span class="navbar-toggler-icon"></span></button>
		
		<div class="collapse navbar-collapse " id="menuitems">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item"><a href="http://alexaurio.ddns.net/" class="nav-link text-white">Inicio</a></li>
				<li class="nav-item"><a href="#" class="nav-link text-white">¿Quien Soy?</a></li>
				<li class="nav-item"><a href="#" class="nav-link text-white">Proyectos</a></li>
				<li class="nav-item"><a href="http://alexaurio.ddns.net:3006/" class="nav-link text-white">Panzas en React</a></li>
				<li class="nav-item"><a href="http://alexaurio.ddns.net/tienda.html" class="nav-link text-white">Tienda</a></li>
				
			</ul>
		</div>
				
		</div>
	</nav>
);
}