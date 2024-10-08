# Frontend Challenge

## Layout
For this challenge, I decided to use Mantine as the component library. This allowed me to have a consistent UI without worrying about setting up all the styling.

## Async State Management
To manage my state and API calls, I used Tanstack (React) Query. This allowed me to easily handle success and error states as well as the loading overlay.

## Localization
While I didn't implement localization since it wasn't needed in this case, I could have used react-intl to create a formatted message that could take in a key to map to a translated string.

## Testing
Unit testing was done on each page to ensure that fields were correctly filled out. This could be enhanced to include e2e testing such as with Cypress to test out the navigation between pages as well as the form submission.

## Possible Improvements
There are a few things that I could have improved in this solution:
- I could have made each field mandatory since they are required when submitting the form.
- With more time, I could have used typescript to enforce types. This would have been especially useful for the colours which could have been an enum.