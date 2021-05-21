## Instagram Clone
- Live: https://instagram-jannkasper.vercel.app/ (be patient, server is sleeping)

[![Product Name Screen Shot][product-screenshot]](https://github.com/jannkasper/instagram-react/blob/master/video.gif)

## :rocket: Tech Stack

- Vue

## :warning: Prerequisite

- node
- npm

## :cd: How to run local

```bash
# Clone this repository
$ git clone https://github.com/jannkasper/instagram-vue

# Go into client
$ cd instagram-vue

# Create configuration file
$ echo 'VUE_APP_SITE_NAME=<server-host>' > .env

# Install dependencies
$ npm install

# Start the frontend client
$ npm run serve
```

## :mag_right: Testing

```bash
$ cd instagram-vue
$ npm run test
```

## :globe_with_meridians: Deploy

#### Deploying Server App on Heroku

- Copy server from https://github.com/jannkasper/instagram-react

#### Deploying Client App on Vercel

- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fjannkasper%2Finstagram-vue&env=VUE_APP_SITE_NAME)
- Select client directory
- Add heroku api url to VUE_APP_SITE_NAME enviorement
- Finally deploy client application


## :book: Directory Structure

```
├── app/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── router/
│   │   ├── static/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   │
│   ├── util/
│   │   ├── context.js
│   │   ├── fetcher.js
│   │   ├── formatter.js
│   │   └── image.js
│   ├── .env
│   ├── babel.config.js
│   ├── package.json
│   │
```

## :memo: License

This project is made available under the MIT License.



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: video.gif
