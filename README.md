# DroneCI Plugins


## eslint
```
pipeline:
  eslint:
    group: build
    image: marcbachmann/eslint:4.19.0
```

```
docker build -f ./Dockerfile.eslint -t marcbachmann/eslint:4.19.0 .
docker push marcbachmann/eslint:4.19.0
```


## semantic-release
```
pipeline:
  eslint:
    group: build
    image: marcbachmann/semantic-release:15.1.3
    secrets: [gh_token]
```

```
docker build -f ./Dockerfile.semantic-release -t marcbachmann/semantic-release:15.1.3 .
docker push marcbachmann/semantic-release:15.1.3
```
