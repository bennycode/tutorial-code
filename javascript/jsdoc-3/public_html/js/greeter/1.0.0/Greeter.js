/**
 * An object to create a <b>personal greetings</b>. The object can be 
 * initialized with a first and last name. If no name is set, an empty 
 * string is used.
 * 
 * @param   {GreeterConfiguration} config
 * @returns {Greeter}
 */
function Greeter(config) {
  /**
   * The name of a person consisting of first name and last name.
   */
  this.name = undefined;

  try {
    this.name = config.firstName + ' ' + config.lastName;
  }
  catch (error) {
    this.name = '';
  }
}

/**
 * Creates a personal greeting.
 * 
 * @returns {string}
 * @throws  {GreetingError} if the name was not set.
 */
Greeter.prototype.getGreeting = function() {
  if (this.name.length === 0) {
    throw new GreetingError('Name has not been set.');
  }

  return 'Hello ' + this.name + '!';
};