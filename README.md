# Random Quote Generator

## Overview

The Random Quote Generator is a web-based application that fetches random quotes from an external API. It provides users with an easy way to discover motivational, humorous, or thought-provoking quotes. Additionally, users can copy the displayed quote to their clipboard with a single click.

## Features

- **Random Quote Fetching**: Retrieves a random quote from an external API.
- **Copy to Clipboard**: Allows users to copy the displayed quote to their clipboard for easy sharing.
- **Dynamic Content**: Ensures fresh and diverse quotes with each request.
- **Responsive Design**: Works seamlessly across devices.

## Usage

1. Open the application in your browser.
2. Click the "Get Quote" button to fetch a random quote.
3. To copy the quote, click the "Copy to Clipboard" button.

## Example

Here’s an example of how the application works:

1. User clicks "Get Quote".
2. A random quote is displayed:
   ```
   "The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt
   ```
3. User clicks "Copy to Clipboard", and the quote is copied for use elsewhere.

## API Integration

The application uses an external API to fetch quotes. Ensure you have a stable internet connection for the application to function correctly.

### API Endpoint

- **URL**: `http://api.quotable.io/random`
- **Method**: GET
- **Response Format**: JSON

### Sample Response

```json
{
  "_id": "d79yOltfl35h",
  "content": "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
  "author": "Daisaku Ikeda",
  "tags": ["Character"],
  "authorSlug": "daisaku-ikeda",
  "length": 81,
  "dateAdded": "2019-01-14",
  "dateModified": "2023-04-14"
}
```

## Notes

- Ensure the API key (if required) is configured correctly in the application.
- Handle API errors gracefully to provide a seamless user experience.

## Potential Enhancements

- Add support for filtering quotes by category (e.g., motivational, humorous, etc.).
- Implement offline functionality with a local cache of quotes.
- Allow users to submit their own quotes to the API.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Quotes provided by [Example API](http://api.quotable.io/random).
- Inspired by the need to share positivity and inspiration.
