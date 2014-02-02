document.write('    <nav class="navbar navbar-default" role="navigation">')
document.write('      <div class="navbar-header">')
document.write('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">')
document.write('<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>')
document.write('       </button><a class="navbar-brand" href="#">Code The Change</a></div>')
document.write('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">')
document.write('        <ul class="nav navbar-nav">')


var url = document.URL;
var split = url.split("/");
var page = split[split.length - 1];
var pages = ["index.html", "about.html", "developers.html"];
var titles = ["Home", "About", "Developers"];

for(var i = 0; i < pages.length; i++) {
	document.write('<li');
	if(page === pages[i]) {
		document.write(' class="active"');
	}
	document.write('><a href="' + pages[i] + '">' + titles[i] + '</a></li>');
}

document.write('      </div><!-- /.navbar-collapse --></nav>')
