# Taskable
==========

![Logo](https://s3.us-east-2.amazonaws.com/app-taskable-pro/logo.png)

This is a Ruby on Rails application with a React-redux front-end inspired by the website TaskRabbit. It has the essential functionality of the TaskRabbit application but instead of hiring taskers for manual labor, Taskable allows hiring of tutors for educational help.

---

## Demo
Here is the working live demo : https://taskable.herokuapp.com


![demologin](https://media.giphy.com/media/l4Epek6Tq7cdmvar6/giphy.gif)

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


## Landing Page

![Splash Page](https://s3.us-east-2.amazonaws.com/app-taskable-pro/Screen+Shot+2017-11-03+at+9.21.59+AM.png)

## Result Filtering and Sorting

![sorting results](https://media.giphy.com/media/xT1Ra7FBsNjpPnREly/giphy.gif)

A sorted by field, a date field, and time selection dropdown were created to help filter and sort the results of your search.
Implementing all three parameters was a tricky, making sure each change changed the React state of the page accordingly. A change in the state triggers a re-filter of the list of available tutors and re-renders the updated, sorted list.

#### Creating an array of date selection boxes

```
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

## Prompt login or signup upon booking

If user attempts to make a booking but is not signed in, a modal comes up to prompt user to sign up or log in.

After logging in or signing up, they are subsequently logged in and able to make a booking. Users can switch between the signup and login modal.
<div display="flex">
<img src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/Screen+Shot+2017-11-03+at+10.40.03+AM.png" width="400">
<img src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/Screen+Shot+2017-11-03+at+10.42.16+AM.png" width="400">
</div>

#### Conditional to prompt login modal

```
handleBook(id) {
  return ((e) => {
    if (this.props.loggedIn) {
      const times = { 1: 'Morning 8AM-12PM', 2: 'Afternoon 12PM - 4PM', 3: 'EVENING 4PM-8PM', '1,2,3': "I'm Flexible"};
      localStorage.setItem('selectedTime', times[this.state.time]);
      let selectedTutor = JSON.parse(localStorage.getItem('tutors')).filter(tutor=>{return tutor.id===id;});
      localStorage.setItem('selectedTutor', JSON.stringify(selectedTutor));
      this.props.history.push('/tutors/confirm');
    } else {
      this.openModal();
    }
  }).bind(this);
}
```



## Built with
- [Ruby on Rails](http://rubyonrails.org/) - A server-side web application framework written in Ruby, a MVC framework.
- [React-Redux](https://github.com/reactjs/react-redux) - Redux is a predictable state container for JavaScript apps.
- [Google Maps Places Api](https://developers.google.com/places/web-service/) - Gets data from same database used by Google Maps.
- [Facebook Login Api](https://developers.facebook.com/docs/facebook-login/) - Facebook Login is a secure, fast and convenient way for people to log into your app or website.
- [Google Signin](https://developers.google.com/identity/) - Google Sign-In is a secure authentication system that reduces the burden of login for your users, by enabling them to sign in with their Google account.

## To-do
- Implement reviews for each tutor. When browsing available tutors, users should be able to click on an individual user and view all of their previous reviews and a rating based on all of those reviews.
- Add location functionality - check whether or not user inputted address is within range of any tutors.
- Add a form for users to become a tutor

This README would normally document whatever steps are necessary to get the
application up and running.
