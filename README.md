# React Resume

Building a resume with all your favourite JS modules.

## Motivation

* Fast layout and style choices.
* Easy customisability for each job posting.
* Export to PDF, text, and easy embedding into websites.

## Usage

This is simply a `create-react-app` project with my current resume already inside. Edit
the `src/` folder, especially `src/App.jsx` and `src/components/`. Keep the `src/page/`
directory, as that is what makes the project work as intended.

View your work with `npm start`.

## Exporting

### PDF

Run `npm start`, then open `localhost:3000` on Google Chrome and print the page as a PDF
at 150% zoom.

I've tried Firefox, it doesn't seem to be able to fit the site on the page. I've tried
Chromium, it seems to be missing the scale feature when printing to a PDF.

### Text

Run `npm start`, then open `localhost:3000` in your favourite browser and save the web
page as a text file.


### Embedding into websites

You can eject this React App, make it a module, or run `npm run build` to create a
standalone site, possibly to contain in an `<iframe />`.
