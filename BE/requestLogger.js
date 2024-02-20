// requestLogger.js
function requestLogger(req, res, next) {
    const timestamp = new Date().toISOString();
    const accessToken = req.headers.authorization || 'No access token';
    console.log(`[${timestamp}] ${req.method}: ${req.url}, AccessToken: "${accessToken}"`);
    next();
  }
  
  module.exports = requestLogger;
  