export default class Table { 
    constructor(id) { 
        this.table = document.getElementById(id);
        this.head = this.table.getElementsByTagName('thead')[0];
        this.headerRow = this.head.getElementsByTagName('tr')[0];
        this.body = this.table.getElementsByTagName('tbody')[0];
    }

    addHeader(rowName) { 
        const th = document.createElement('th');
        th.innerText = rowName;
        this.headerRow.appendChild(th);

    }
    addRow(...columns) { 
        const row = document.createElement('tr');
        columns.
            map(col => this.td(col)).
            forEach(td => row.appendChild(td));
 
        this.body.appendChild(row);
    }

    td(text) { 
        const cell = document.createElement('td');
        cell.innerText = text;
        return cell;
    }

}