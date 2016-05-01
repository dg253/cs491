$( window ).resize(function() {
  activityFeedResize();
  //balanceGraphPosition();
});

function activityFeedResize(){
  var rightNavHeight = $(".right-nav").height();
  var calenderHeight = $(".cal").height()
  var activityHeaderHeight = $(".activity-header").height()

  activityFeedNewHeight = rightNavHeight - (calenderHeight + activityHeaderHeight)
  var activityFeedHeight = $(".activity-feed").css('max-height', activityFeedNewHeight+'px');
//  console.log(activityFeedNewHeight);
};

function balanceGraphPosition(){
  var body = $("html").width();
  var cardHeight = $(".balances-card").height();
  var headerHeight = 70;
  var graph = $(".chart-container");
  var graphHeight = graph.height();
  var newHeight = (cardHeight - (headerHeight + graphHeight)) / 2;

  if(graphHeight < 370 && body > 1200){
    if(graphHeight < 330){
      graph.css('padding-top', newHeight)
    }
    else if(graphHeight < 370){
      graph.css('padding-top', newHeight)
    }
  }else{
    graph.css('padding-top', 0)
  }

  console.log(body);
};
