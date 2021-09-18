const global_object = new Object();
class table {
    /**
     * class to define error table
     * @param {String} title this parameter is used to define the error title.
     * @param {String} type this parameter is used to define the type of error in the table.
     * @param {String} message this parameter is used to define the message of the table.
     */
    constructor({title, type, message}) {
        this.title = title;
        this.type = type;
        this.message = message;
    }

    /**
     * function to be able to activate the error table in user mode
     * @returns html code the table error
     */
    user() {
        return `<table>
        <tr>
          <th id="err-table">${this.title}
            <table>
            <tr class="err-tables-data">
              <th>Type</th>
              <th>Message error</th>
            </tr>
            <tr class="err-tables-data">
             <td>${this.type}</td>
             <td>${this.message}</td>
            </tr>
            </table>
          </th>
        </tr>
      </table>
      <style>
      table {
        font-family: Sans-Serif;
        border: 1px solid #000;
      }

      #err-table {
        background: #ff4b4b;
      }

      .err-tables-data {
        border: 1px solid #000;
        background: #fff;
      }

      th {
        text-align: left;
      }
      </style>`;
    }
}

module.exports = table;