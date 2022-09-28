var madeby;


$('[bloc=crisp]').on('click',function() { $crisp.push([`do`, `chat:open`]); });

var url_string = (window.location.href).toLowerCase();
var url = new URL(url_string);
var madeby = url.searchParams.get("madeby");
if (madeby == 'hex') {
  $('[bloc=subfooter-text]').text('Made by ');
  $('[bloc=subfooter-link]').text('Hexagon Studio');
  $('[bloc=subfooter-link]').attr("href", "https://www.hexagonstudio.net");
  $('[bloc=subfooter-logo]').attr("src", "https://uploads-ssl.webflow.com/603cf681dc2fb991cbb084c4/605c87b4fd7f402ed345bda0_Hexagon%20Logo%20center.svg");
  $('[bloc=subfooter-logo-link]').attr("href", "https://www.hexagonstudio.net");
}
