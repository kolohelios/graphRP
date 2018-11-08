interface IConfig {
  app: {
    name: string
  }
  os: {
    ios: string
    android: string
    web: string
  }
  web: {
    root: string
  }
}

// TODO if we're setting the app name and consuming it here, do we stilll need /app.json?
const Config: IConfig = {
  app: {
    name: 'graphRP'
  },
  os: {
    ios: 'ios',
    android: 'android',
    web: 'web'
  },
  web: {
    root: 'app'
  }
}

export default Config
