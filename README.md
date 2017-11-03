# Taskable
==========

![Logo](https://s3.us-east-2.amazonaws.com/app-taskable-pro/logo.png)

This is a Ruby on Rails application with a React-redux front-end inspired by the website TaskRabbit. It has the essential functionality of the TaskRabbit application but instead of hiring taskers for manual labor, Taskable allows hiring of tutors for educational help.


---

## Features
- User authentication with additional social log in buttons (Facebook/Google)
- Searching for address using Google Places Api autocomplete
- Front-end sorting of search results using date, time, and other parameters
- Ability to browse website while not signed in
- Prompts a sign-in if attempting to book a tutor
- Select a tutor, input fake payment information
- Complete bookings by adding a review
- Update user information with a profile picture
- many more awesome features to come...

![Splash Page](https://s3.us-east-2.amazonaws.com/app-taskable-pro/Screen+Shot+2017-11-03+at+9.21.59+AM.png)
![Form page with Google autocomplete](https://s3.us-east-2.amazonaws.com/app-taskable-pro/Screen+Shot+2017-11-03+at+10.03.30+AM.png)

## Result Filtering and Sorting

![sorting results](https://s3.us-east-2.amazonaws.com/app-taskable-pro/Screen+Shot+2017-11-03+at+10.09.56+AM.png)

A sorted by field, a date field, and time selection dropdown were created to help filter and sort the results of your search.
I chose to mimic the actual TaskRabbit site and created an array of 2 weeks worth of date-buttons instead of using a date-type input. This was done by manipulating the current Date so the site will update accordingly at any time.

```cpp
dateArrays(num) {
  let result = [];
  let x = new Date;
  for (var i = 0; i < num; i++) {
    result.push({
      date: (x.toDateString().slice(4,10).trim()),
      day: x.getDay(),
      day_string: x.toDateString().slice(0,3)
    });
    x.setDate(x.getDate() + 1);
  }
  result[0].day_string = 'Today';
  return result;
}
```


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
