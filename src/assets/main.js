$(function() {
  $.ajax({
    url:https://www.codeschool.com/users/2653763.json,
    dataType: 'jsonp',
    success: function(response{
      console.log('response', response.courses.completed)
      addCourses(response.courses.completed);
    })
  });
function addCourses(courses)  {

  var $badges = $('badges');

  courses.forEach(function(course){
    var $course = $('<div />', {
      'class': 'course'
    }).appendTo($badges);

    $('<h3 />', ) {
      text: course.title
    }).appendTo($course);

  })
}

});
