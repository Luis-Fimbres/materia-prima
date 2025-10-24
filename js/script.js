window.onload = () =>{
    let txtName = document.getElementById("name")
    let customerName = document.getElementById("customerName")
    let form = document.getElementById("form")
    let arr=[]
    
    let priceTable = [
        {id:1, material:"Stainless steel",price: 2000.50},
        {id:2, material:"ABS plastic",price: 10.0},
        {id:3, material:"Aluminum",price: 30.0},
        {id:4, material:"Copper",price: 70.0}
    ]

    txtName.addEventListener('keyup',()=>{
        console.log("HELLO")
    })

    txtName.addEventListener('keyup',()=>{
        customerName.innerText = "Customer Name: " + txtName.value
    })

    form.addEventListener('submit',(event)=>{
        event.preventDefault()//Prevent reloads when clicking button
        let material = document.getElementById("material")
        let quantity = document.getElementById("quantity")
        let date = document.getElementById("date")
        let observations = document.getElementById("observations")
        let price = priceTable.find(item=>item.material == material.value)
        arr.push({
            id:arr.length+1,
            material:material.value,
            quantity:quantity.value,
            date:date.value,
            observations:observations.value,
            subtotal:price.price * parseFloat(quantity.value)
        })
        printTable()
        localStorage.setItem("order",JSON.stringify(arr))
    })
    const printTable = ()=>{
        var total = 0
        var trs=""
        arr.forEach(item=>{
            total+=item.subtotal
            trs+=`
            <tr>
                <td>${item.id}</td>
                <td>${item.material}</td>
                <td><input type="number" value="${item.quantity}"/></td>
                <td>${item.date}</td>
                <td>${item.observations}</td>
                <td>$${item.subtotal}</td>
            </tr>`
        })
        document.querySelector("tbody").innerHTML = trs
        document.querySelector("#tdTotal").innerHTML = `<b>$${total.toFixed(2)}</b>`
    }
    if(localStorage.getItem("order")){
        arr = JSON.parse(localStorage.getItem("order"))//JAVA SCRIPT OBJECT NOTATION
        printTable()
    }
}