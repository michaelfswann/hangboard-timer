# Hangboarding Timer

<img src="https://s3-eu-west-1.amazonaws.com/mswann.dev/hangboard-timer-gif-cropped.gif" width="600" />

## Info

Timer for hang boarding and building finger strength for climbing.

Application is hosted: [here](timer.mswann.dev).

Enter desired number of seconds to prepare, hang and rest between sets and the number of sets and see a visual timer.

Login to store session data and view previous max hang data plotted on a graph (graph created using the [recharts]('recharts.org') node module).

## Stack 

- MongoDB
- Express
- React.js
- Node.js
- Auth0
- Serverless
- AWS

## Deployment

- Client is deployed on AWS S3 served by CloudFront and Route 53.
- Server is desployed using Serverless via AWS Cloud Formation as a Lambda function.
- Database is running on Atlas's cloud service.

Server repository can be found: [here](https://github.com/michaelfswann).

## Challenges

One of biggest challenges I overcame building this application were not using create-react-app writing a custom webpack config: I did this as a learning experience trying to find out more of what goes on under the hood of react.

Another challenge was deploying as a static site: I soon learnt I couldn't use the BrowserRouter from react-router-dom and it took some research to find out more about the nature of how React works and to use the HashRouter to return fragments whilst not not navigating to static pages that did not exist e.g. "/#/data" not "/data".

## Next steps

- Add sound
- Refine styling

<img src="https://i.ibb.co/5GwLQ1d/20210128-164954.jpg" width="200" height="200" />
