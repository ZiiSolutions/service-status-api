import { ServiceConfigMapping } from './app-interfaces';
// Note: this application was for the front end position therefore
// I did not focus on the API as such. However, this can be extracted
// to a database or and S3 bucket. Then you can add another endpoint
// to the API to update the service mapping. However going that far seems
// like an overkill for now so keeping it simple by using an array.
export const SERVICE_MAPPINGS: ServiceConfigMapping[] = [
  { name: 'Test One', url: 'https://localhost:1234' },
  { name: 'Test Two', url: 'https://localhost:34009' },
  { name: 'Test Three', url: 'https://localhost:276044' },
  { name: 'BBC News', url: 'https://www.bbc.co.uk/news' },
  { name: 'Yahoo News', url: 'https://uk.news.yahoo.com/' },
  { name: 'News Now', url: 'https://www.newsnow.co.uk/' },
  { name: 'Al Jazeera', url: 'https://www.aljazeera.com/' },
  { name: 'CNN', url: 'https://edition.cnn.com/' },
  { name: 'Reuters', url: 'https://www.reuters.com/' },
  { name: 'Wall Street Journal', url: 'https://www.wsj.com/' },
  { name: 'Fox News', url: 'https://www.foxnews.com/' },
  { name: 'NBC', url: 'https://www.nbcnews.com/' },
];
