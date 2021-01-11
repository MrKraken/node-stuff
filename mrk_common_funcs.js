/** 
 * 
 * Description: Common Functions
 * Author: MrKraken
 * 
 */

/** Formatted Date/Time **/
module.exports.formedDate = function(timeOnly = false)
{
    let cleaned;
    if(timeOnly)
    {
        cleaned = new Date().toLocaleString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return cleaned;
    }
        cleaned = new Date().toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    return cleaned;

}

 /** Just Display The Time From A Date */
module.exports.timeFromDate = function(input)
{
    return input.toLocaleString('en-GB',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
    });     
}

 /** Time Difference */
module.exports.timeDiff = function(a,b)
{
    a = new Date(a);
    b = new Date(b);
    let timeDiff = a.getTime() - b.getTime();
    return timeDiff; //return time difference in miliseconds
    
}
/** Miliseconds to Minutes & Seconds */
 module.exports.msToMandS = function(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals 
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
  };

  /** Console Colour Values */
  module.exports.console_colors = 
  {
      "reset" : "\x1b[0m",
      "bright" : "\x1b[1m",
      "dim" : "\x1b[2m",
      "underscore" : "\x1b[4m",
      "blink" : "\x1b[5m",
      "reverse" : "\x1b[7m",
      "hidden" : "\x1b[8m",
      "foreground" :
      {
          "black" : "\x1b[30m",
          "red" : "\x1b[31m",
          "green" : "\x1b[32m",
          "yellow" : "\x1b[33m",
          "blue" : "\x1b[34m",
          "magenta" : "\x1b[35m",
          "cyan" : "\x1b[36m",
          "white" : "\x1b[37m",
      },
      "background" :
      {
          "black" : "\x1b[40m",
          "red" : "\x1b[41m",
          "green" : "\x1b[42m",
          "yellow" : "\x1b[43m",
          "blue" : "\x1b[44m",
          "magenta" : "\x1b[45m",
          "cyan" : "\x1b[46m",
          "white" : "\x1b[47m",
      }
      
  };

/** Console logger with time & colour  **/
module.exports.log = function(inp,col = false)
{
    return console.log((col ? col : ''),`${this.formedDate(true)} - ${inp}`,this.console_colors.reset);
}