$(document).ready(function() {

  var convertNewlines = function(text) {
    text = text.replace("           "," ")
    return text.replace("\t","<br>")
  }

  var changeTo = function(i) {
    entry = data[i]
    var screen_el;

    if (entry.text != null) {
      screen_el = $($("#screen").html())
      screen_el.html(convertNewlines(entry.text))
      screen_el.attr({id: "f"+i})
    }
    else if(entry.image != null) {
      screen_el = '<img class="screen_image" src="'+entry.image+'"/>'
    }
    else {
      alert("wrong type => debugger")
      debugger
    }

    $(".display").html(screen_el)
  }

  $.each(data, function(i, entry) {
    var filter_html = $($("#filter").html())
    filter_html.find(".description").html(entry.title)
    $(".inner-wrap").append(filter_html)

    filter_html.click(function() {
      changeTo(i)
    })

    
  })

  changeTo(0)

});