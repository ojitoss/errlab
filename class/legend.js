const global_object = new Object();
class legend {
    /**
     * class to define error blocks
     * @param {String} message this parameter is to define the message of the legend.
     */
    constructor({message}) {
        this.message = message;
    }

    /**
     * function to be able to activate the error block in user mode
     * @returns html code the legend error
     */
    user() {
        return `<p>${this.message}</p>
      <style>
        p {
            font-famly: Sans-Serif;
            color: #ff4b4b;
        }
      </style>`;
    }
}

module.exports = legend;