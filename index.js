
$(document).ready(() => {
  // const $body = $('body');
  // $body.html('');

  // const $tweets = streams.home.map((tweet) => {
  //   const $tweet = $('<div></div>');
  //   const text = `@${tweet.user}: ${tweet.message}`;
  //   $tweet.text(text);
  //   return $tweet;
  // });
  // $body.append($tweets);
  $(document).ready(function () {
    var $body = $('body').css('background-color', 'Steelblue');
    $body.html('');



    // Sections of the HTML
   
    var $twiddleHeader = $('<div id="twiddlerHeader">').appendTo($body);
    var $twiddleBody = $('<div id="twiddlerBody">').appendTo($body);
    var $twiddleFooter = $('<div id="twiddlerFooter">').appendTo($body);
    var $twiddleMaker = $('<h1 id="twiddlerMakerText">').appendTo($twiddleFooter).text("Twid Yo Thoughts!");
    var $twiddleByUser = $('<div class="formGroup">').appendTo($twiddleMaker);
  

    // Stream of Tweets
    
    var $twiddleStream = $('<div id="twiddlerStream">').appendTo($twiddleBody);
    var $twiddleStreamTitle = $('<h1 id="twiddlerStreamTitle">').appendTo($twiddleStream).text("Live Twiddle Stream");
    var $twiddleTitle = $('<h1 id="twiddlerTitle">').appendTo($twiddleHeader).text("Prototype Twiddler")

    // Sidebar including, User History and Hashtag History
  
    var $twiddleSidebar = $('<div id="twiddlerSidebar">').appendTo($twiddleBody);

    var $twiddleUserList = $('<div id="twiddlerUserList">').appendTo($twiddleSidebar);
    var $twiddlerUserListHeader = $('<h1 id="twiddlerUserListHeader">').appendTo($twiddleUserList).text("Twiddle Users List");
    var $twiddleUsers = $('<li id="twiddlerUsers">').appendTo($twiddleUserList);


    // Each Users History
    var $twiddleUserHistory = $('<div id="twiddlerUserHistory">').appendTo($twiddleSidebar);
    var $twiddleUserHistoryHeader = $('<h1 id="twiddlerUserHistoryHeader">').appendTo($twiddleUserHistory).text("Twiddle User History");




    // Displaying User Twiddle History
    var $userButton = users.map(user => {
      $('<button id="userButton">').text(user).appendTo($twiddleUsers).on('click', function () {
        streams.home.forEach(person => {

          let globalTime = person.created_at;
          let correctedTime = globalTime.toLocaleString();

          let $users = $('<div class="handle">').text(`@${user}`);
          let $twiddle = $('<div class="twid">').text(`${person.message}`);
          let $timeStamp = $('<div class="timestamp">').text(`${correctedTime}`);
          if (user === person.user) {
            $twidHistory = $('<li></li>').append($users, $twiddle, $timeStamp)
            $twiddleUserHistory.append($twidHistory);
          }
        })
        return false;
      })
    });


    // Button for Tweets
    var $twiddleButton = $('<button id="refreshTwids">').text('Refresh Twid Stream').appendTo($twiddleStream);
    $twiddleButton.on('click', function () {
      var indexOfUsers = streams.home.length - 1;
      while (indexOfUsers >= 0) {
        var tweet = streams.home[indexOfUsers];

        var $tweet = $('<li></li>');
        var currentDate = new Date();
        var currDate = currentDate.toLocaleString()
        var $twiddle = $('<div class="twid">').text(`${tweet.message}`);
        var $twiddleHandle = $('<div class="handle">').text(`@${tweet.user}`);
        var $timestamp = $('<div class="timestamp">').text(`${currDate}`);

        $tweet.append($twiddleHandle, $twiddle, $timestamp);
        $tweet.appendTo($twiddleStream);
        indexOfUsers -= 1;
        return false;
      }
      return false;
    });

var $visitorContainer = $('<div id="vistor"></div>').appendTo($twiddleFooter)
$('<input id="visitorname" type="text "placeholder="Pick a random name!" />').appendTo($visitorContainer)
$('<input id="visitormessage" type="text" placeholder="Say something random!"<br><br>').appendTo($visitorContainer)
$(`<button type="button" id="submit-button" class="button">Click to Share</button>`).appendTo($visitorContainer)

//visitor tweet button function
var $twiddleButton = $("#submit-button").on('click', function(){
  const visitorTweet = {
    user: $('#visitorName').val(),
    message: $('#visitorMessage').val(),
    created_at: new Date(),
  }
  for (let key in visitorTweet) {




  var $userElement = $('<div class="user-tweet-container"></div>').appendTo($twiddleStream)
  $('<div></div>').appendTo($userElement).addClass(visitorTweet.user).text('@' + visitorTweet.user)
  //Create a div and append the message then append the result to the user element
  $('<div class="user-tweet"></div>').appendTo($userElement).text(visitorTweet.message)
  //Use moment.js to call the moment function and fromNow method to convert the time
  //to how many minutes ago
  $('<div class="date-time"></div>').appendTo($userElement).text(visitorTweet.created_at);
  var howLong = moment(visitorTweet.created_at).fromNow()
  //Create a div that holds how long ago in minutes and append it to the user element 
  $('<div class="mins-ago"></div>').appendTo($userElement).text(howLong);
  }
  })



  })
});
