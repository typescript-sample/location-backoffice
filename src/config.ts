export const config = {
  port: 8085,
  allow: {
    origin: 'http://localhost:3000',
    credentials: 'true',
    methods: 'GET,PUT,POST,DELETE,OPTIONS,PATCH',
    headers: 'Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  },
  log: {
    level: 'info',
    map: {
      time: '@timestamp',
      msg: 'message'
    }
  },
  middleware: {
    log: true,
    skips: 'health,log,middleware',
    request: 'request',
    response: 'response',
    status: 'status',
    size: 'size'
  },
  mongo: {
    uri: 'mongodb+srv://dbUser:Demoaccount1@projectdemo.g0lah.mongodb.net',
    db: 'location'
  },
  model: {
    id: 'id',
    payload: 'payload',
    user: 'userId',
  },
  bucket: 'go-firestore-rest-api.appspot.com',
  storage: {
    image: 'avatar',
    cover: 'cover',
    gallery: 'gallery'
  },
};

export const env = {
  sit: {
    mongo: {
      db: 'location_sit',
    }
  },
  prd: {
    log: {
      level: 'error'
    },
    middleware: {
      log: false
    }
  }
};
