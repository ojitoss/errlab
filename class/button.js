const global_object = new Object();
class button {
    /**
     * 
     * @param {String} buttonText this parameter is used to define the text inside the button.
     * @param {String} message this parameter is used to define the message of the button.
     */
    constructor({buttonText, message}) {
        this.buttonText = buttonText;
        this.message = message;
    }

    /**
     * function to be able to activate the error button in user mode
     * @returns html code the button error
     */
    user() {
        return `<button>${this.buttonText}</button>
    <legend id="err-legend">${this.message}</legend>
    <style>
      body {
        font-family: Sans-Serif;
      }

      button {
        background: #ff4b4b;
        border: 1px solid #ff4b4b;
        border-radius: 5px;
        color: #fff;
        padding: 9px;
        font-size: 15px;
        font-weight: 700;
      }

      button:hover {
        background: #ff0303;
      }

      #err-legend {
        color: #cf0000;
        margin: 5px;
      }
    </style>`;
    }
}

module.exports = button;