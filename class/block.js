const global_object = new Object();
class block {
    /**
     * class to define error blocks
     * @param {String} message this parameter is to define the message of the block.
     */
    constructor({message}) {
        this.message = message;
    }

    /**
     * function to be able to activate the error block in user mode
     * @returns html code the block error
     */
    user() {
        return `<p>${this.message}</p>
      <style>
        p {
            background: #ff4b4b;
            border: 1px solid #ff4b4b;
            border-radius: 5px;
            padding: 5px;
            position: absolute; 
            top: 80 px; 
            left: 100 px;
            font-famly: Sans-Serif;
            color: #fff;
        }
      </style>`;
    }
}

module.exports = block;