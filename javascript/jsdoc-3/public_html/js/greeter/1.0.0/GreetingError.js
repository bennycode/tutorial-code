/**
 * Error class for displaying greeting errors.
 * 
 * @param   {string} message Message for error description.
 * @returns {GreetingError}
 */
function GreetingError(message) {
  this.message = message;
  this.name = 'GreetingError';
}