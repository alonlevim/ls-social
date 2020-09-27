# ls-social
![](./resource/image/ls-social.jpg)
## Live demo

[Demo](http://ls-social.work-alon.com/)

## Getting Started

### Installing

First clone my project.

```
git clone https://github.com/alonlevim/ls-social.git
```

Then go to root poject:

```
cd ls-social
```

Go to `server`

and add .env file with content:

```
SECRET=
DB_URL=

ACCESS_KEY_ID=
SECRET_ACCESS_KEY=
BUCKET_NAME=
```

Then run:

```
npm install
```

Then run:
```
cd ../client && npm install
```

#### Great! everything is ready

## Run It

### Developer mode:

Need to run two Terminals:

#### Server side:

Run:

```
cd server && npm run start
```

#### Client side:

From `root folder` run:

```
cd client && ng serve --open
```

### Production mode:

From `root folder` run:

```
cd server && npm run start
```

You should open `http://localhost:8081/` if you are not changed the port.
