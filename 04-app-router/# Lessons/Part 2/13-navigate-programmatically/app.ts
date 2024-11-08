/*
  - click on the overlay to go back to previous page


-------------------------

  - news/[slug]/@modal/(.)image/page.js -> useRouter -> router.back


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Defining the Base HTML Document
  - Currently, this project has a small bug / issue - the root HTML document is re-defined for every route. The fix is to  define the base HTML document only once in a layout.js file inside the root folder path.
  - Create an app/layout.js file with the following content:

      import './globals.css';
      
      export const metadata = {
        title: 'Next.js Page Routing & Rendering',
        description: 'Learn how to route to different pages.',
      };
      
      export default function RootLayout({ children }) {
        return (
          <html lang="en">
            <body>{children}</body>
          </html>
        );
      }


*/
