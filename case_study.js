function  addToCart(index) {
    let trNode = index.parentElement.parentElement

    let trNodeClone = trNode.cloneNode(true);
    let addindex = trNodeClone.getElementsByTagName('button');
    addindex[0].innerText = "Hủy bỏ";
    addindex[0].setAttribute('onclick', 'removeCartItem(this)');
    let cartBody = document.getElementById("cart-body");

    cartBody.appendChild(trNodeClone);

    let cartTable = document.getElementById('cartItems');
    cartTable.style.display = "table";
    let emptyCart = document.getElementById("emptyCard")
    emptyCart.style.display = 'none'
    let grandTotal = document.getElementById('grandTotal')
    grandTotal.style.display = "block";

    calculateGrandTotal();
}
function  removeCartItem(index1){
    let indexNode = index1.parentElement.parentElement;
    let indexBodyNode = indexNode.parentElement;
    indexBodyNode.removeChild(indexNode)

    if(indexBodyNode.children.length <= 0){
        let cartTable = document.getElementById("cartItems");
        cartTable.style.display = "none";
        let emptyCart = document.getElementById("emptyCard");
        emptyCart.style.display ="block"
        let grandTotal = document.getElementById("grandTotal");
        grandTotal.style.display = "none";

        grandTotal.childNodes[1].innerText = "0";
    }
    calculateGrandTotal()
}
function calculateGrandTotal(){
    let cartItemsTable = document.getElementById("cartItems");
    let amountSpans = cartItemsTable.getElementsByClassName("amount");

    let total = 0;
    for (const element of amountSpans){
        total += Number(element.innerHTML);
    }
    let totalSpan = document.getElementById("total");
    totalSpan.innerText = total;
}