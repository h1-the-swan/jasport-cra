# jasport.org website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Uses typescript.

2021 Jason Portenoy

- [jasport.org website](#jasportorg-website)
	- [Getting started](#getting-started)
	- [Development](#development)
	- [Deployment](#deployment)
	- [Developing in WSL](#developing-in-wsl)

## Getting started

In the project directory, run:

```sh
yarn install
```

## Development

In the project directory, you can run:

```sh
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deployment

In the project directory, run:

```sh
yarn build && aws s3 sync build/ s3://www.jasport.org/ --acl public-read
```

This requires that [AWS Command Line Interface](https://aws.amazon.com/cli/) be installed,
and that you have write access to the S3 bucket.

## Developing in WSL

If developing in WSL2 (Windows Subsystem for Linux), using `localhost` might not work.
In this case, use the command `ip addr`, locate the entry for `eth0`, and copy the IP address
you find after `inet`, excluding the forward slash and anything that comes after.
Use this IP address instead of `localhost` (e.g., `http://172.29.129.222:3000`).