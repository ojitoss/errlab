const global_object = new Object();
class link {
    /**
     * class to define error links
     * @param {String} message this parameter is to define the message of the block.
     * @param {String} href this 
     */
    constructor({message, href}) {
        this.message = message;
        this.href = href;
    }

    /**
     * function to be able to activate the error block in user mode
     * @returns html code the block error
     */
    user() {
        return `<a href="${this.href}">${this.message}</a>
      <style>
        a {
            color: #ff4b4b;
            font-weight: 800;
            font-family: Snas-Serif;
        }

        a:hover {
            color: #d30000;
        }
      </style>`;
    }
}

module.exports = link;