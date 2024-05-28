# Box office - junior technical test

The purpose of this technical interview is to assess your problem-solving ability,your technical communication and your ability to write clear well structured code.

## The Task

### Duration ⏰ 1 hour max

### Description

For this task, we would like you to recreate the component in the attached "react-component.jpg" image by fetching the shows from a local endpoint and displaying them in the browser.

![React Component](./assets/react-component.jpg)

### Acceptance criteria

- [ ] Shows should be displayed on three columns for desktop screens
- [ ] Each show card should include the show image, title and click through to the correct booking link
- [ ] "SOLD OUT" shows should be greyed out with a label of "SOLD OUT" in place of the "BOOK NOW" button. You should also **not** be able to click on these tiles
- [ ] Show tiles on the same row should all be equal height

## Endpoints

### List all showings

The `/api/shows/all-open` endpoint serves an array of shows objects. On each object you will find a `see_tickets_url_infos` property that stores an array of booking links. If this array is empty, then that show should appear as "SOLD OUT". If there are items in the array, then you should pick the url with a subdomain of `tktsonline.seetickets.com` as the booking link and if that is not available fallback to using the `officiallondontheatre.seetickets.com` url.

## Setup ⚙️

### Install dependencies ⚙️

1. Go to the root of the repository.
1. Run `npm install`

### Check your server 🍽️

Now check your development server is working.

Start the development server using the script in the `package.json` at the root of the repo.

- Call the `/api` endpoint to check it's working correctly
- Call the `/api/shows/all-open` to check it's working correctly

### Check your client 💻

Start your frontend application using the script in the `package.json` at the root of this repo.

- Check the frontend development server is working.
