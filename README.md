# Box office - junior technical test

Congratulations on being selected to progress to the next stage of the interview process and to complete our tech test. The purpose of this test is to assess the quality of the code that you write, your approach to problem-solving, and your ability to reason about the approaches and practices you have implemented.

Do not worry too much about how much progress you make through each part of the test, but rather make sure that what you do complete is of a high, production-ready, standard. We expect you to spend around 3 hours on this task (feel free to spend more time on it if you wish).

If you have any questions please do not hesitate to contact us.

## The Task

For this task, we would like you to recreate the component in the attached "react-component.jpg" image by fetching the shows from this local [endpoint](localhost:9090/api/shows/all-open) and displaying them in the browser.

![React Component](./assets/react-component.jpg)

### Acceptance criteria

- [ ] Shows should be displayed on three columns for desktop screens
- [ ] Each show card should include the show image, title and click through to the correct booking link
- [ ] "SOLD OUT" shows should be greyed out with a label of "SOLD OUT" in place of the "BOOK NOW" button. You should also **not** be able to click on these tiles
- [ ] Show tiles on the same row should all be equal height

## Development server

### `/api/shows/all-open` `GET`

The `/api/shows/all-open` endpoint serves an array of shows objects and you will find a `see_tickets_url_infos` property that stores an array of booking links. If this array is empty, then that show should appear as "SOLD OUT". If there are items in the array, then you should pick the url with a subdomain of `tktsonline.seetickets.com` as the booking link and if that is not available fallback to using the `officiallondontheatre.seetickets.com` url.

## Development environment

1. Go to the root of the repository.
1. Run `npm install`

Now check your development server is working.

1. Start the development server using the script in the `package.json` at the root of the repo.
   Call the `/api` endpoint to check it's working correctly
   Call the `/api/shows/all-open` to check it's working correctly

1. Start your frontend application using the script in the `package.json` at the root of this repo.
