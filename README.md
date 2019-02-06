# DroneCI Plugins


## eslint
```yaml
pipeline:
  eslint:
    group: build
    image: marcbachmann/eslint:4.19.1

    // If the secret is present, it will push a status check to github
    secrets: [gh_token]
```

```bash
cd eslint
docker build -t marcbachmann/eslint:4.19.1 .
docker push marcbachmann/eslint:4.19.1
```


## semantic-release
```yaml
pipeline:
  release:
    group: build
    image: marcbachmann/semantic-release:15.1.4
    secrets: [gh_token, npm_token]
```

```bash
docker build -f ./Dockerfile.semantic-release -t marcbachmann/semantic-release:15.1.4 .
docker push marcbachmann/semantic-release:15.1.4
```
