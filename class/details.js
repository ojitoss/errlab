const global_object = new Object();
class details {
    /**
     * class to define error details
     * @param {String} summary this parameter is used to define the text of the tab.
     * @param {String} message this parameter is used to define the message of the tab.
     */
    constructor({summary, message}) {
        this.summary = summary;
        this.message = message;
    }

    /**
     * function to be able to activate the error details in user mode
     * @returns html code the details errors
     */
    user() {
        return `<details>
        <summary>${this.summary}</summary>
        <div id="err-details">${this.message}</div>
    </details>
    <style>
      body {
        font-family: Sans-Serif;
        padding: 5px;
      }

      details {
        color: #cf0000;
        font-size: 22px;
      }

      #err-details {
        font-size: 16px;
      }
    </style>`;
    }
}

module.exports = details;