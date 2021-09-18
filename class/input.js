const global_object = new Object();
class input {
    /**
     * class to define error inputs
     * @param {String} type this parameter is used to define the type of input.
     * @param {String} placeholder this parameter is used to put a placeholder.
     * @param {String} message this parameter is used to define the input message.
     */
    constructor({type, placeholder, message}) {
        this.type = type;
        this.placeholder = placeholder;
        this.message = message;
    }

    /**
     * function to be able to activate the error input in user mode
     * @returns html code the input error
     */
    user() {
        return `<form>
      <input type="${this.type}" placeholder="${this.placeholder}">
    </form>
    <legend>${this.message}</legend>
    <style>
      body {
        font-family: Sans-Serif;
      }

      input, input:focus {
        border: 3px solid #cf0000;
        border-radius: 5px;
        padding: 5px;
      }
    </style>`;
    }
}

module.exports = input;