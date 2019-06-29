let ul = document.createElement('ul');
$.ajax({
    type: 'GET',
    url: 'data.json',
}).done((data) => {
        for (let item in data) {
            let li = document.createElement('li');
            $(li).text(JSON.stringify(data[item].task));
            $(li).appendTo(ul);
            let selectList1 = document.createElement("select");
            selectList1.id = "status";
            selectList1.name = "status";
            $(selectList1).appendTo(li);
            let selectList2 = document.createElement("select");
            selectList2.id = "priority";
            selectList2.name = "priority";
            $(selectList2).appendTo(li);

            for (let item in data) {
                let options = JSON.stringify(data[item].status);
                let option = document.createElement('option');
                $(option).text(options);
                $(option).appendTo(selectList1);
                let priorities = JSON.stringify(data[item].priority);
                let priority = document.createElement('option');
                $(priority).text(priorities);
                $(priority).appendTo(selectList2);
            }
            $(ul).appendTo('div');
        }
        let myNodelist = document.getElementsByTagName('li');
        for (let i = 0; i < myNodelist.length; i++) {
            let span = document.createElement("SPAN");
            let txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }

        let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let buttonYes = document.createElement('BUTTON');
                let buttonNo = document.createElement('BUTTON');
                buttonYes.innerHTML = 'delete';
                buttonNo.innerHTML = 'stay';
                let div = this.parentElement;
                div.appendChild(buttonYes);
                div.appendChild(buttonNo);
                buttonYes.onclick = () => {
                    div.style.display = "none"};
                buttonNo.onclick = () => {
                    buttonNo.style.display = "none";
                    buttonYes.style.display = "none";
                }
            }
        }
    }
).fail((errorMessage) => {
    console.log(errorMessage);
});

document.querySelector('.addBtn').addEventListener('click', () => {
    let liNew = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    liNew.appendChild(t);

    if (inputValue === '') {
        let str = "You must write something!";
        document.getElementById('empty').innerHTML =`${str}`;
    } else {
        document.getElementById('empty').innerHTML = '';
        document.querySelector("ul").appendChild(liNew);
        let selectList1 = document.createElement("select");
        selectList1.id = "status";
        selectList1.name = "status";
        $(selectList1).appendTo(liNew);
        let selectList2 = document.createElement("select");
        selectList2.id = "priority";
        selectList2.name = "priority";
        $(selectList2).appendTo(liNew);
        $.ajax({
            type: 'GET',
            url: 'data.json',
        }).done((data) => {
            for (let item in data) {
                let options = JSON.stringify(data[item].status);
                let option = document.createElement('option');
                $(option).text(options);
                $(option).appendTo(selectList1);
                let priorities = JSON.stringify(data[item].priority);
                let priority = document.createElement('option');
                $(priority).text(priorities);
                $(priority).appendTo(selectList2);
            }
        });
        document.getElementById("myInput").value = "";
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        liNew.appendChild(span);
        let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let buttonYes = document.createElement('BUTTON');
                let buttonNo = document.createElement('BUTTON');
                buttonYes.innerHTML = 'delete';
                buttonNo.innerHTML = 'stay';
                let div = this.parentElement;
                div.appendChild(buttonYes);
                div.appendChild(buttonNo);
                buttonYes.onclick = () => {
                    div.style.display = "none"};
                buttonNo.onclick = () => {
                    buttonNo.style.display = "none";
                    buttonYes.style.display = "none";
                }
            }
        }
    }
});
