# Frontend Challenge

## Layout
For this challenge, I decided to use Mantine as the component library. This allowed me to have a consistent UI without worrying about setting up all the styling.

## Async State Management
To manage my state and API calls, I used Tanstack (React) Query. This allowed me to easily handle success and error states as well as the loading overlay.

## Localization
While I didn't implement localization since it wasn't needed in this case, I could have used react-intl to create a formatted message that could take in a key to map to a translated string.

## Testing
Testing proved to be difficult. I had less experience setting up the wrappers for Mantine and providers, so I did not have enough time to create proper tests. Had I been able to use the proper wrappers, I would have created tests for the navigation between each page, the storing of the form values and ensuring that they stayed populated between each page, and testing the success and error possibilities when submitting the form.

## Possible Improvements
There are a few things that I could have improved in this solution:
- I could have made each field mandatory since they are required when submitting the form.
- With more time, I could have used typescript to enforce types. This would have been especially useful for the colours which could have been an enum.
- Lastly, 