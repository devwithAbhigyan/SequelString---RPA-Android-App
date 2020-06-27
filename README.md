## Installation

```shell
> git clone https://github.com/devwithAbhigyan/SequelString---RPA-Android-App
> cd flask-pwa
> pipenv install
```

## Usage

Due to the current Service Worker [specification](https://w3c.github.io/ServiceWorker/#secure-context), the web browser will only allow its registration if the application is served over **https, or on localhost** for development purposes.

This makes **nGrok** useful for testing the PWA functionality, as it allows you to expose localhost over the internet with **https** included.

### localhost

```shell
> pipenv run flask run
```

### nGrok

```shell
> pipenv run flask run
> ngrok http 80
```

## PWA

serviceworker.js and androidmanifest.xml in static folder

## References:

- [Google's Seu Primeiro PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=pt-br)
- [Flask PWA demo](https://github.com/uwi-info3180/flask-pwa)
- [Google's Workbox](https://developers.google.com/web/tools/workbox/)

## Licensing

This project is licensed under MIT license.
