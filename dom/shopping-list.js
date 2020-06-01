var shop_ul = document.getElementsByTagName("ul");
var shop_input = document.getElementById("item");
var shop_button = document.getElementsByTagName("button");

shop_button[0].addEventListener("click", buttonAdd);
function buttonAdd() 
{
    var input_value = shop_input.value;
    shop_input.value = "";

    var shop_li = document.createElement("li");
    var shop_span = document.createElement("span");
    var second_button = document.createElement("button");

    shop_li.append(shop_span);
    shop_li.append(second_button);

    shop_span.innerHTML = input_value;
    second_button.innerHTML = "delete"

    shop_ul[0].append(shop_li);

    second_button.addEventListener("click", buttonDelete);
    function buttonDelete()
    {
        this.parentElement.remove();
    }
      shop_input.focus();
}