const path = '/'

module.exports = {
  providerOptions: {
    drive: {
      key: process.env.GOOGLE_DRIVE_KEY,
      secret: process.env.GOOGLE_DRIVE_SECRET,
    },
    dropbox: {
      key: process.env.UPLOADER_DROPBOX_KEY,
      secret: process.env.UPLOADER_DROPBOX_SECRET
    }
  },
  server: {
    host: process.env.COMPANION_HOST,
    protocol: 'https',
    path,
  },
  sendSelfEndpoint: process.env.COMPANION_SELF_ENDPOINT || 'localhost:3020',
  filePath: './uploads',
  secret: process.env.COMPANION_SECRET,
  debug: process.env.DEBUG || false,
  // ! TODO: TURN TO TRUE BEFORE USING IN PRODUCTION
  corsOrigins: false
}